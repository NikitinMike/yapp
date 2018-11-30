import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import TableComponent from './TableComponent';

function Row(props) {
  return (
    <tr>
      <td>{props.data.entityId}</td>
      <td>{props.data.account.number}</td>
      <td>{props.data.name}</td>
      <td>{props.data.issued}</td>
      <td>{props.data.amount}</td>
    </tr>
  )
}
class LicensesTable extends TableComponent {
  render () {
    return (
      <table rules='all' frame='border'>
        <caption>{this.props.title}</caption>
        <Header head={["[№]","= Счёт =","= Имя =","= Выпущено =","= Доступно ="]}/>
        <tbody>
          {this.state.data.map(item => <Row key={item.entityId} data={item}/>)}
        </tbody>
        <Footer foot={["","","","",""]}/>
      </table>
    )
  }
}

export default LicensesTable