import React, { Component } from 'react'
import AccountsTable from './AccountsTable';
import LicensesTable from './LicensesTable';
import './App.css'
import accountsJSON from './accounts.json';
import licensesJSON from './licenses.json';

const accounts = accountsJSON.data;
const licenses = licensesJSON.data

function WelcomeF(props) {return <h1>Hello, {props.name}!</h1>;}
class WelcomeC extends React.Component {
  render() {return <h1> Hello, {this.props.name} !</h1>;}
}

class App extends Component {
render () {
  return (
      <div className='App'>
        <WelcomeC name="Kitty"/>
        <AccountsTable data = {accounts} title="Счета"/>
        <LicensesTable data = {licenses} title="Лицензии"/>
      </div>
    )
  }
}

export default App