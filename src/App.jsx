import './App.css'
// import './bootstrap/css/bootstrap.css'
import React from 'react'
import AccountsTable from './AccountsTable';
import LicensesTable from './LicensesTable';
const siteUrl='https://licensesvc.trusted.ru/license/account/'
function Welcome(props) {return <h1 hidden>Hello, {props.name}!</h1>;}

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <Welcome name="Kitty"/>
        <AccountsTable getDataFrom={siteUrl+'accounts'} title="Счета"/>
        <LicensesTable getDataFrom={siteUrl+'licenses'} title="Лицензии"/>
      </div>
    )
  }
}

export default App