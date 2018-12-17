import React from 'react'
import Header from './TableHeader';
import Footer from './TableFooter';
import BaseTable from './BaseTable';
import BaseRow from './BaseRow';
import { baseUrl } from './App';

function Cell(cell){return(<td>{cell.item}</td>)}

class Row extends BaseRow {

  remove = (e) => {
    e.preventDefault();
    if(e.target.tagName==='BUTTON') {
      e.target.parentElement.parentElement.remove()
      fetch(`${baseUrl}/license/delete/${e.target.id}`)
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
        <Cell item = {data.created}/>
        <Cell item = {data.amount}/>
        <Cell item={<button className="btn fa fa-trash" onClick={this.remove} id = {data.entityId} />} />
      </tr>
    )
  }
}

class Licenses extends BaseTable {
  render () {
    return (
      <form>
        <table rules='all' frame='border'>
          <caption>{this.props.title}</caption>
          <Header head={["[№]","Счёт","Имя","Лицензия","Активирована","Доступно","--"]}/>
          <tbody>
            {this.state.data.map(item => <Row key={item.entityId} data={item}/>)}
          </tbody>
          <Footer foot={["","","","","","",""]}/>
        </table>
      </form>
    )
  }
}

export default Licenses