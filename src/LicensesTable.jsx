import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import TableComponent from './TableComponent';
const head=["[№]","= Счёт =","= Имя Пользователя =","= Токен =","= Доступно ="]
const foot=["","","","",""]

function handleClick(e) {
  e.preventDefault();
  console.log('License:'+e.target.id);
}
function Row(props) {
  return (
    <tr>
      <td>
        <button id={props.data.entityId}>
         {props.data.entityId}
        </button>
      </td>
      <td>{props.data.account.number}</td>
      <td>{props.data.account.displayName}</td>
      <td>{props.data.hashJWT}</td>
      <td>{props.data.amount}</td>
    </tr>
  )
}
class LicensesTable extends TableComponent {
  render () {
    return (
      <form  onClick={handleClick}>
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