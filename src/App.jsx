import React, { Component } from 'react'
import Table from './Table';
import './App.css'
// import children from './data.json';
import message from './data2.json';

const data=message.data;
// console.log(data);

class WelcomeC extends React.Component {
  render() {return <h1> Hello, {this.props.name} !</h1>;}
}
/*
const children2=[
  ['Вася',100,101+55],
  ['Петя',100,102+64],
  ['Жора',100,103+73],
  ['Коля',100,104+82],
  ['Лёша',100,105+91]
]
*/
function WelcomeF(props) {return <h1>Hello, {props.name}!</h1>;}
class App extends Component {
  render () {
    return (
      <div className='App'>
        <WelcomeF name="Kitty"/>
        <Table data = {data}
          header = {["№","Счёт","Имя","Пользователь"]}
          total = {{
            entityId: '*'.repeat(0), 
            number: '*'.repeat(1),
            displayName: '*'.repeat(2), 
            userName: '*'.repeat(3), 
          }}
        />
      </div>
    )
  }
}

export default App