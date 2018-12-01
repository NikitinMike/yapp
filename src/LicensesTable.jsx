import React from 'react'
import Header from './Header';
import Footer from './Footer';
import BaseTable from './BaseTable';
import BaseRow from './BaseRow';

const head=["[№]","= Счёт =","= Имя Пользователя =","= Токен =","= Доступно ="]
const foot=["","","","",""]

function Item(props){
  return(<td>{props.item}</td>)
}

class Row extends BaseRow {
  render(){
    const data = this.props.data
    const id = data.entityId
    // console.log(data)
    return (
      <tr id={id}  onMouseOver={this.onMouse} onMouseOut={this.onMouse}>
        <td><button id={id} onClick={this.handleClick}>{id}</button></td>
        <Item item = {data.account.number}/>
        <Item item = {data.account.displayName}/>
        <Item item = {data.hashJWT}/>
        <Item item = {data.amount}/>
      </tr>
    )
  }
}

class LicensesTable extends BaseTable {
  render () {
    return (
      <form>
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