import './App.css'
// import './bootstrap/css/bootstrap.css'
import React from 'react'
import AccountsTable from './AccountsTable';
import LicensesTable from './LicensesTable';
import Journal from './Journal';

// import {h, render} from 'ink';
// import Gradient from 'ink-gradient';
// import BigText from 'ink-big-text';

const site='https://licensesvc.trusted.ru/license/account/'
function Welcome(props) { return <h1 hidden>Hello, {props.name}!</h1>;}
// function Welcome(props) {
//   return (
//     <div>
//       <Gradient name="rainbow">
//         <BigText text="unicorns"/>
//       </Gradient>
//     </div>
//   )
// }

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <Welcome name="Kitty"/>
        <AccountsTable site={site} dataSrc={site+'accounts'} title="Счета" />
        <LicensesTable site={site} dataSrc={site+'licenses'} title="Лицензии" />
        <Journal site={site} dataSrc={site+'journal'} title="Журнал" />
      </div>
    )
  }
}

export default App