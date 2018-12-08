import './App.css'
// import './bootstrap/css/bootstrap.css'
import React from 'react'
import Menu from '@material-ui/core/Menu';

import AccountsTable from './AccountsTable';
import LicensesTable from './LicensesTable';
import Journal from './Journal';

// import MyMenu from './Menu';
// import BigTitle from './BigTitle';

const site='https://licensesvc.trusted.ru/license/account/'
function Welcome(props) { return <h1>Hello, {props.name}!</h1>;}

class App extends React.Component {

  render () {
    return (
      <div className='App'>
        <Welcome name="Kitty"/>
        <AccountsTable site={site} dataSrc={site+'accounts'} title="Счета" />
        {true && <LicensesTable site={site} dataSrc={site+'licenses'} title="Лицензии" />}
        {true && <Journal site={site} dataSrc={site+'journal'} title="Журнал" />}
      </div>
    )
  }
}

export default App