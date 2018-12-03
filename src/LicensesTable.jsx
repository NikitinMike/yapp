import React from 'react'
import $ from 'jquery'; 
import Header from './Header';
import Footer from './Footer';
import BaseTable from './BaseTable';
import BaseRow from './BaseRow';

const head=["[№]","= Счёт =","= Имя Пользователя =","= Токен =","= Доступно =",""]
const foot=["","","","","",""]
const siteUrl='https://licensesvc.trusted.ru/license/account'

function Cell(props){return(<td>{props.item}</td>)}

class Row extends BaseRow {

  remove = (e) => {
    e.preventDefault();
    if(e.target.tagName==='BUTTON') {
      e.target.parentElement.parentElement.remove()
      fetch(`${siteUrl}/license/delete/${e.target.parentElement.parentElement.id}`)
    }
  }

  render(){
    const data = this.props.data
    // console.log(data)
    return (
      <tr id={data.entityId} onMouseOver={this.onMouse} onMouseOut={this.onMouse}>
        <Cell item = {data.entityId}/>
        <Cell item = {data.account.number}/>
        <Cell item = {data.account.displayName}/>
        <Cell item = {data.hashJWT}/>
        <Cell item = {data.amount}/>
        <Cell item={<button className="btn fa fa-trash" onClick={this.remove} />}/>
      </tr>
    )
  }
}

class LicensesTable extends BaseTable {
  render () {
    return (
      <form>
        <table rules='all' frame='border'>
          <caption>{this.props.title}</caption>
          <Header head={head}/>
          <tbody>
            {this.state.data.map(item => <Row key={item.entityId} data={item}/>)}
          </tbody>
          <Footer foot={foot}/>
        </table>
      </form>
    )
  }
}

export default LicensesTable