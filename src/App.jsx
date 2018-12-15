import './App.css'
// import './bootstrap/css/bootstrap.css'
import React from 'react'

import Accounts from './TableAccounts';
import Licenses from './TableLicenses';
import Journal from './TableJournal';
import Products from './TableProducts';

import MyMenu from './Menu';
// import Welcome from './Welcome';
// import BigTitle from './BigTitle';

const site='https://licensesvc.trusted.ru/license/account/'
function Welcome(props) { return <h1 hidden>Hello, {props.name}!</h1>;}

class App extends React.Component {

  state = {table:[],accountNumber:'',
    accountSrc:site+'accounts',
    licenseSrc:site+'licenses',
    journalSrc:site+'journal',
    productSrc:site+'products',
  } // as is constructor

  click = (e) => {
    // const productSrc = site+'products'
    // this.setState({productSrc});
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
    table["Журнал"]=!table["Журнал"];
    this.setState({table});
    // this.render()
  }

  render () {
    return (
      <div className='App'>
        <MyMenu menu={["Лицензии","Журнал","Продукты"]} click={this.click}/>
        <Welcome name="Kitty"/>
        {this.state.table["Продукты"] && <Products site={site} dataSrc={this.state.productSrc} title={"Продукты"} />}
        <Accounts showJournal={this.showJournal} site={site} dataSrc={this.state.accountSrc} title="Счета" />
        {this.state.table["Лицензии"] && <Licenses site={site} dataSrc={this.state.licenseSrc} title={"Лицензии"} />}
        {this.state.table["Журнал"] && <Journal site={site} dataSrc={this.state.journalSrc} title={this.state.accountNumber} />}
      </div>
    )
  }
}

export default App