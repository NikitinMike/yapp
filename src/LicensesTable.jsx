import React from 'react'
import Header from './Header';
import Footer from './Footer';
import TableComponent from './TableComponent';
const head=["[№]","= Счёт =","= Имя Пользователя =","= Токен =","= Доступно ="]
const foot=["","","","",""]

function handleClick(e) {
  e.preventDefault();
  // console.log('License:')
  // console.log(e.target.id); // .target.id
  // console.log(e.target.parentElement)
  if(e.target.tagName==='BUTTON') e.target.parentElement.parentElement.remove()
}

function mouse(e) {
  e.preventDefault();
  if(e.target.parentElement.id!=0)
    e.target.parentElement.style.backgroundColor = (e.type=='mouseover') ? 'red':'';
  // console.log(e);
}

function Row(props) {
  const id=props.data.entityId
  return (
    <tr id={id}  onMouseOver={mouse} onMouseOut={mouse}>
      <td><button id={id} onClick={handleClick}>{id}</button></td>
      <td>{props.data.account.number}</td>
      <td>{props.data.account.displayName}</td>
      <td>{props.data.hashJWT}</td>
      <td>{props.data.amount}</td>
    </tr>
  )
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