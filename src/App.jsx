import './App.css'
// import './bootstrap/css/bootstrap.css'
import React from 'react'
import AccountsTable from './AccountsTable';
import LicensesTable from './LicensesTable';

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
        <AccountsTable site={site} dataSrc={'accounts'} title="Счета" />
        <LicensesTable site={site} dataSrc={'licenses'} title="Лицензии" />
      </div>
    )
  }
}

export default App