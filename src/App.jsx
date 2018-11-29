import React, { Component } from 'react'
import AccountsTable from './AccountsTable';
import LicensesTable from './LicensesTable';
import './App.css'
// import accountsJSON from './accounts.json';
// import licensesJSON from './licenses.json';
// import accountsJSON from 'https://licensesvc.trusted.ru/license/jwt/accounts';

// var accounts = accountsJSON.data;
// var licenses = licensesJSON.data;
var accounts =[]
var licenses =[]

// function WelcomeF(props) {return <h1>Hello, {props.name}!</h1>;}

class WelcomeC extends React.Component {
  render() {return <h1> Hello, {this.props.name} !</h1>;}
}

class App extends Component {

  componentDidMount() {
    // https://habr.com/post/252941/
    // console.log("ACCOUNTS")
    fetch('https://licensesvc.trusted.ru/license/jwt/accounts', {mode: 'cors'})
      .then(function(response) {
      // console.log(response.headers.get('Content-Type'));  
      // console.log(response.headers.get('Date'));
      console.log(response.url,response.status+"/"+response.statusText);  
      // console.log(response.type);  
      // console.log(response.text());
      return response.text(); })
      .then(function(message) { 
        accounts = JSON.parse(message).data;
        console.log('ACCOUNTS:',accounts)
      })
      .catch(function(error) { console.log('Request failed', error) });

    fetch('https://licensesvc.trusted.ru/license/jwt/licenses', {mode: 'cors'})
      .then(function(response) { return response.text(); })
      .then(function(text) { 
        licenses = JSON.parse(text).data;
        console.log('LICENSES:',licenses)
      })
      .catch(function(error) { console.log('Request failed', error) });

    /*
      .then(
        function(response) {
          console.log("FETCH!")
          if (response.status !== 200) {  
            console.log('Looks like there was a problem. Status Code: ' + response.status);  
            return;  
          }
          // Examine the text in the response  
          console.log(response.json)
          response.json().then(function(data) { console.log(data); });  
        }  
      )
      .catch(function(err) { console.log('Fetch Error :-S', err);});
      */

  }

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