import React from 'react'
// import $ from 'jquery'; 
import Header from './Header';
import Footer from './Footer';
import BaseTable from './BaseTable';
import BaseRow from './BaseRow';
const head=["[№]","= Счёт =","= Имя =","= Пользователь ="," Доступно "," Выпущено ","",""]
const foot=["","","","","","","",""]
const siteUrl='https://licensesvc.trusted.ru/license/account'

function Cell(props){return(<td>{props.item}</td>)}

class Row extends BaseRow {

  remove = (e) => {
    e.preventDefault();
    if(e.target.tagName==='BUTTON') {
      e.target.parentElement.parentElement.remove()
      fetch(`${siteUrl}/delete/${e.target.parentElement.parentElement.id}`)
    }
  }

  refund = (e) => {
    e.preventDefault();
    if(e.target.tagName==='BUTTON') {
      fetch(`${siteUrl}/activate/${e.target.parentElement.parentElement.id}`)
    }
  }

  render(){
    const data = this.props.data
    return (
      <tr id={data.number} onMouseOver={this.onMouse} onMouseOut={this.onMouse}>
        <Cell item={data.entityId}/>
        <Cell item={data.number}/>
        <Cell item={data.displayName}/>
        <Cell item={data.userName}/>
        <Cell item={data.amount}/>
        <Cell item={data.issued}/>
        <Cell item={<button className="btn fa fa-trash" onClick={this.remove} />} />
        <Cell item={<button className="btn fa fa-plus" onClick={this.refund} />} />
      </tr>
    )
  }
}

class AccountsTable extends BaseTable {

  newAccount = (e) => {
    e.preventDefault();
    fetch(`${siteUrl}/new`) // , {mode:'cors'}
      .then(response => { this.request() })
      .catch(error => { console.log('Failed', error) });
  }

  render () {
    return (
      <form> 
        <table rules='all' frame='border'>
          <caption onDoubleClick={this.newAccount} >{this.props.title}</caption>
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

export default AccountsTable