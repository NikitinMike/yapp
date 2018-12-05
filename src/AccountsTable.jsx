import React from 'react'
// import $ from 'jquery'; 
import Header from './Header';
import Footer from './Footer';
import BaseTable from './BaseTable';
import BaseRow from './BaseRow';
const head=["№","Счёт","Создан","Имя","","Лиц.","Токен","amount","issued","--"]
const foot=["","","","","","","","","",""]
const siteUrl='https://licensesvc.trusted.ru/license/account'
const jwt='eyJhbGciOiJSUzI1NiJ9.eyJhdWQiOiLQmtCw0YDQv9C-0LIiLCJzdWIiOiJDcnlwdG9BUk0gR09TVCAxMDAiLCJjb3JlIjo2NTUzNSwibmJmIjoxNTQ0MDExOTY0LCJpc3MiOiLQntCe0J4gXCLQptC40YTRgNC-0LLRi9C1INGC0LXRhdC90L7Qu9C-0LPQuNC4XCIiLCJleHAiOjE1NzU1NDc5MTMsImlhdCI6MTU0NDAxMTk2NCwianRpIjoiZjE4ZWMwMTgtY2NiOS00MTI4LWE5MzctZmNiMDg2ZjM4YmI2IiwiZGVzYyI6IkNyeXB0b0FSTSBHT1NUIDEwMCJ9.f4cfW8AYhWiqPlLhqidtqs1pH7Q4zgZhkAA3gEahY-sPEYee7POJ5LCXo7izauUrqDQ-n8C9tTM9l6i9eBQPKu-Cu8v5upYN2sRjODxgmuFFfw19FB1cp2f-ZVzmHXv2Aq5yc8Mxh6MmbymlrpQvpipZoNp0Xe31uLHPgs1wqBi2-ee2gSJaqsvAJC3td3PYWTrO8pKF5scwdzdRN9eDFVb7AR7pOzOkUJrSRsde_NkYyvaSTQ5_iRg3ts4qVKTLalo6qJyQEtuwQZc6D5Ulxmmt_0GyjiQPliKbXxJyg32MKgebvPNBipED7ViGGeRcY-Vv25hKOo1V8X1Eg2HZkQ'

function Cell(props){return(<td>{props.item}</td>)}

class Row extends BaseRow {

  remove = (e) => {
    e.preventDefault();
    if(e.target.tagName==='BUTTON') {
      e.target.parentElement.parentElement.remove()
      fetch(`${siteUrl}/delete/${e.target.parentElement.parentElement.id}`)
    }
  }

  refund = (e) => {
    e.preventDefault();
    if(e.target.tagName==='BUTTON') {
      fetch(`${siteUrl}/activate/${e.target.parentElement.parentElement.id}?jwt=${jwt}`)
        .then(msg => {this.props.refresh()})
    }
  }

  issue = (e) => {
    e.preventDefault();
    if(e.target.tagName==='BUTTON') {
      fetch(`${siteUrl}/issuetoken/${e.target.id}`)
        .then(msg => {this.props.refresh()})
    }
  }

  render(){
    const data = this.props.data
    return (
      <tr id={data.number} onMouseOver={this.onMouse} onMouseOut={this.onMouse}>
        <Cell item={data.entityId}/>
        <Cell item={data.number}/>
        <Cell item={data.created}/>
        <Cell item={data.displayName}/>
        <Cell item={data.userName}/>
        <Cell item={<button className="btn fa fa-plus" onClick={this.refund} />} />
        <Cell item={<button className="btn fa fa-plus" onClick={this.issue} id = {data.number} />} />
        <Cell item={data.amount}/>
        <Cell item={data.issued}/>
        <Cell item={<button className="btn fa fa-trash" onClick={this.remove} />} />
      </tr>
    )
  }
}

class AccountsTable extends BaseTable {

  newAccount = (e) => {
    e.preventDefault();
    fetch(`${siteUrl}/new`) // , {mode:'cors'}
      .then(response => { this.request() })
      .catch(error => { console.log('Failed', error) });
  }

  render () {
    return (
      <form>
        <table rules='all' frame='border'>
          <caption onDoubleClick={this.newAccount} >{this.props.title}</caption>
          <Header head={head}/>
          <tbody>
            {this.state.data.map(item => <Row key={item.entityId} data={item} refresh={this.request}/>)}
          </tbody>
          <Footer foot={foot}/>
        </table>
      </form>
    )
  }
}

export default AccountsTable