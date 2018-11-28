import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';

function AccountRowF(props) {
  return (
    <tr>
      <td>{props.data.entityId}</td>
      <td>{props.data.number}</td>
      <td>{props.data.displayName}</td>
      <td>{props.data.userName}</td>
    </tr>
  )
}

function Body(props) {
  return (
    <tbody>
      {props.data.map(item => <AccountRowF key={item.entityId} data={item}/>)}
    </tbody>
  )
}

class AccountsTable extends Component {
  render () {
    return (
      <table rules='all' frame='border' >
        <caption>{this.props.title}</caption>
        <Header head={["[№]","= Счёт =","= Имя =","= Пользователь ="]}/>
        <Body data={this.props.data} />
        <Footer foot={["","","",""]}/>
      </table>
    )
  }
}

export default AccountsTable