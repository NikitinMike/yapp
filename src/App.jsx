import './App.css'
// import './bootstrap/css/bootstrap.css'
import React from 'react'
// import Menu from '@material-ui/core/Menu';

import AccountsTable from './AccountsTable';
import LicensesTable from './LicensesTable';
import Journal from './Journal';

import MyMenu from './Menu';
// import Welcome from './Welcome';
// import BigTitle from './BigTitle';

const site='https://licensesvc.trusted.ru/license/account/'
function Welcome(props) { return <h1>Hello, {props.name}!</h1>;}

class App extends React.Component {

  state = {table:[],accountNumber:'',
    accountSrc:site+'accounts',
    licenseSrc:site+'licenses',
    journalSrc:site+'journal',
  } // as is constructor

  click = (e) => {
    // e.preventDefault();
    const item=e.target.innerText
    const table = this.state.table
    table[item]=!table[item]
    // console.log(item,this.state.table[item])
    this.setState({table});
    // this.render()
  }

  showJournal = (e) =>{
    const accountNumber=e;
    this.setState({accountNumber});
    const journalSrc = site+'operations/'+accountNumber
    this.setState({journalSrc});
    // console.log(e)
    const table = this.state.table
    table["Журнал"]=true;
    this.setState({table});
  }

  render () {
    const menu=["Лицензии","Журнал"]
    // const full={site+'journal'}
    return (
      <div className='App'>
        <MyMenu menu={menu} click={this.click}/>
        <Welcome name="Kitty"/>
        <AccountsTable showJournal={this.showJournal} site={site} dataSrc={this.state.accountSrc} title="Счета" />
        {this.state.table[menu[0]] && <LicensesTable site={site} dataSrc={this.state.licenseSrc} title={menu[0]} />}
        {this.state.table[menu[1]] && <Journal site={site} dataSrc={this.state.journalSrc} title={this.state.accountNumber} />}
      </div>
    )
  }
}

export default App