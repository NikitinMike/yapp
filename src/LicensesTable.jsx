import React from 'react'
import Header from './Header';
import Footer from './Footer';
import TableComponent from './TableComponent';
import BaseRow from './BaseRow';

const head=["[№]","= Счёт =","= Имя Пользователя =","= Токен =","= Доступно ="]
const foot=["","","","",""]

class Row extends BaseRow {
  render(){
    const data = this.props.data
    const id = data.entityId
    // console.log(data)
    return (
      <tr id={id}  onMouseOver={this.mouse} onMouseOut={this.mouse}>
        <td><button id={id} onClick={this.handleClick}>{id}</button></td>
        <td>{data.account.number}</td>
        <td>{data.account.displayName}</td>
        <td>{data.hashJWT}</td>
        <td>{data.amount}</td>
      </tr>
    )
  }
}

class LicensesTable extends TableComponent {
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