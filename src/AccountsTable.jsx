import React from 'react'
import Header from './Header';
import Footer from './Footer';
import TableComponent from './TableComponent';
import BaseRow from './BaseRow';
const head=["[№]","= Счёт =","= Имя =","= Пользователь ="," Доступно "," Выпущено "]
const foot=["","","","","",""]

class Row extends BaseRow {
  render(){
    const data = this.props.data
    const id = data.entityId
    return (
      <tr id={id} onMouseOver={this.mouse} onMouseOut={this.mouse}>
        <td><button id={id}  onClick={this.handleClick}>{id}</button></td>
        <td>{data.number}</td>
        <td>{data.displayName}</td>
        <td>{data.userName}</td>
        <td>{data.amount}</td>
        <td>{data.issued}</td>
      </tr>
    )
  }
}

class AccountsTable extends TableComponent {
  render () {
    return (
      <form>
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