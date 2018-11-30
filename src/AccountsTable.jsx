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

  constructor(props) {
    super(props)
    this.state = {data:[]};
  }

  componentDidMount() {
    fetch(this.props.url, {mode:'cors'})
      .then(response => { return response.text(); })
      .then(msg => { const data = JSON.parse(msg).data; this.setState({data});})
      .catch(function(error) { console.log('Failed', error) });
  }
  
  render () {
    return (
      <table rules='all' frame='border' >
        <caption>{this.props.title}</caption>
        <Header head={["[№]","= Счёт =","= Имя =","= Пользователь ="]}/>
        <tbody>
          {this.state.data.map(item => <Row key={item.entityId} data={item}/>)}
        </tbody>
        <Footer foot={["","","",""]}/>
      </table>
    )
  }
}

export default AccountsTable