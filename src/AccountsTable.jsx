import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import TableComponent from './TableComponent';
const head=["[№]","= Счёт =","= Имя =","= Пользователь ="," Доступно "," Выпущено "]
const foot=["","","","","",""]

function handleClick(e) {
  e.preventDefault();
  console.log('Account:'+e.target.id);
}

function Row(props) {
  return (
    <tr>
      <td>
        <button id={props.data.entityId}>
         {props.data.entityId}
        </button>
      </td>
      <td>{props.data.number}</td>
      <td>{props.data.displayName}</td>
      <td>{props.data.userName}</td>
      <td>{props.data.amount}</td>
      <td>{props.data.issued}</td>
    </tr>
  )
}

class AccountsTable extends TableComponent {
  render () {
    return (
      <form  onClick={handleClick}>
        <table rules='all' frame='border' >
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

export default AccountsTable