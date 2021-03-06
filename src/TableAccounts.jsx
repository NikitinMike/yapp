import React from 'react'
import Header from './TableHeader';
import Footer from './TableFooter';
import BaseTable from './BaseTable';
import BaseRow from './BaseRow';
import token from './CryptoARMGOST100.json'
import { baseUrl } from './App';
const jwt=token.jwt
 
function Cell(cell){return(<td>{cell.item}</td>)}

class Row extends BaseRow {

  remove = (e) => {
    e.preventDefault();
    if(e.target.tagName==='BUTTON') {
      e.target.parentElement.parentElement.remove()
      fetch(`${baseUrl}/delete/${e.target.parentElement.parentElement.id}`)
        // .then(msg => {this.props.refresh()})
        // .then(msg => {e.target.parentElement.parentElement.remove()})
    }
  }

  refund = (e) => {
    e.preventDefault();
    if(e.target.tagName==='BUTTON') {
      fetch(`${baseUrl}/activate/${e.target.parentElement.parentElement.id}?jwt=${jwt}`)
        .then(msg => {this.props.refresh()})
    }
  }

  issue = (e) => {
    e.preventDefault();
    if(e.target.tagName==='BUTTON') {
      fetch(`${baseUrl}/issuetoken/${e.target.id}`)
        .then(msg => {this.props.refresh()})
    }
    // refresh licenses table
  }

  showHist = (e) => {
    e.preventDefault();
    const parent=e.target.parentElement
    if(parent.id!==0)
      if(parent.tagName==='TD')
        this.props.showJournal(e.target.id);
  }

  render(){
    const data = this.props.data
    return (
      <tr id={data.number} onMouseOver={this.onMouse} onMouseOut={this.onMouse}>
        <Cell item={data.entityId}/>
        {/* <Cell item={data.number} onMouseOver={this.showButton}/> */}
        <td className="colAccount"><button onClick={this.showHist} className="flex-itm2" id={data.number}>{data.number}</button></td>
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

class Accounts extends BaseTable {

  newAccount = (e) => {
    e.preventDefault();
    fetch(`${baseUrl}/new`,{mode:'cors'})
      .then(response => { this.request() })
      .catch(error => { console.log('Failed', error) });
    this.render ();
  }

  render () {
    return (
      <form>
        <table rules='all' frame='border'>
          <caption onDoubleClick={this.newAccount}><button className="flex-itm" onClick={this.newAccount}>{this.props.title}</button></caption>
          <Header head={["[№]","Счёт","Создан","Имя","user","Лиц.","Токен","доступно","выдано","--"]}/>
          <tbody>
            {this.state.data.map(item => <Row showJournal={this.props.showJournal} key={item.entityId} data={item} refresh={this.request}/>)}
          </tbody>
          <Footer foot={["","","","","","","","","",""]}/>
        </table>
      </form>
    )
  }
}

export default Accounts