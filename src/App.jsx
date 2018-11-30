import './App.css'
import * as React from "react";
// import * as ReactDOM from "react-dom";
// import React, { Component } from 'react'
import AccountsTable from './AccountsTable';
import LicensesTable from './LicensesTable';

// function WelcomeF(props) {return <h1>Hello, {props.name}!</h1>;}
class WelcomeC extends React.Component {
  render() {return <h1> Hello, {this.props.name} !</h1>;}
}

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <WelcomeC name="Kitty"/>
        <AccountsTable url = {'https://licensesvc.trusted.ru/license/jwt/accounts'} title="Счета"/>
        <LicensesTable url = {'https://licensesvc.trusted.ru/license/jwt/licenses'} title="Лицензии"/>
      </div>
    )
  }
}

export default App