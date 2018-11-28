import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';

function Row(props) {
  return (
    <tr>
      <td>{props.data.entityId}</td>
      <td>{props.data.number}</td>
      <td>{props.data.displayName}</td>
      <td>{props.data.userName}</td>
    </tr>
  )
}

class AccountsTable extends Component {
  render () {
    return (
      <table rules='all' frame='border' >
        <caption>{this.props.title}</caption>
        <Header head={["[№]","= Счёт =","= Имя =","= Пользователь ="]}/>
        <tbody>
          {this.props.data.map(item => <Row key={item.entityId} data={item}/>)}
        </tbody>
        <Footer foot={["","","",""]}/>
      </table>
    )
  }
}

export default AccountsTable