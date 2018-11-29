import './App.css'
import * as React from "react";
// import * as ReactDOM from "react-dom";
// import React, { Component } from 'react'
import AccountsTable from './AccountsTable';
import LicensesTable from './LicensesTable';
// import accountsJSON from 'https://licensesvc.trusted.ru/license/jwt/accounts';

// function WelcomeF(props) {return <h1>Hello, {props.name}!</h1>;}
class WelcomeC extends React.Component {
  render() {return <h1> Hello, {this.props.name} !</h1>;}
}

class App extends React.Component {
// class App extends React.Component<AppProps, AppState> {

  constructor(props) {
    super(props)
    this.state = {accounts:[],licenses:[]};
  }

  componentDidMount() {
    fetch('https://licensesvc.trusted.ru/license/jwt/accounts', {mode: 'cors'})
      .then(response => { return response.text(); })
        // console.log(response.url,response.status+"/"+response.statusText);
      .then(message => { 
        const accounts = JSON.parse(message).data;
        // console.log('ACCOUNTS:',accounts)
        this.setState({accounts});
      })
      .catch(function(error) { console.log('Request failed', error) });
    fetch('https://licensesvc.trusted.ru/license/jwt/licenses', {mode: 'cors'})
      .then(response => { return response.text(); })
      .then(text => { 
        const licenses = JSON.parse(text).data;
        // console.log('LICENSES:',licenses)
        this.setState({licenses});
      })
      .catch(function(error) { console.log('Request failed', error) });
    }

  render () {
    // console.log(this.state)
    return (
      <div className='App'>
        <WelcomeC name="Kitty"/>
        <AccountsTable data = {this.state.accounts} title="Счета"/>
        <LicensesTable data = {this.state.licenses} title="Лицензии"/>
      </div>
    )
  }
}

export default App