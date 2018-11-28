import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';

function LicenseRow(props) {
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

function Body(props) {  
  return (
    <tbody>
      {props.data.map(item => <LicenseRow key={item.entityId} data={item}/>)}
    </tbody>
  )
}

class LicensesTable extends Component {
  render () {
    return (
      <table rules='all' frame='border'>
        <caption>{this.props.title}</caption>
        <Header head={["[№]","= Счёт =","= Имя =","= Выпущено =","= Доступно ="]}/>
        <Body data={this.props.data} />
        <Footer foot={["","","","",""]}/>
      </table>
    )
  }
}

export default LicensesTable