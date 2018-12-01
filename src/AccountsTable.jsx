import React from 'react'
import Header from './Header';
import Footer from './Footer';
import BaseTable from './BaseTable';
import BaseRow from './BaseRow';
const head=["[№]","= Счёт =","= Имя =","= Пользователь ="," Доступно "," Выпущено "]
const foot=["","","","","",""]

function Item(props){
  return(<td>{props.item}</td>)
}

class Row extends BaseRow {
  render(){
    const data = this.props.data
    const id = data.entityId
    return (
      <tr id={id} onMouseOver={this.onMouse} onMouseOut={this.onMouse}>
        <td><button id={id}  onClick={this.handleClick}>{id}</button></td>
        <Item item={data.number}/>
        <Item item={data.displayName}/>
        <Item item={data.userName}/>
        <Item item={data.amount}/>
        <Item item={data.issued}/>
      </tr>
    )
  }
}

class AccountsTable extends BaseTable {
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