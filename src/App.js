import React, { Component } from 'react'
import Tab from './Table';
import './App.css'

class WelcomeC extends React.Component {
  render() {return <h1> Hello, {this.props.name} !</h1>;}
}

const data=[
  ['Вася',100,101+55],
  ['Петя',100,102+64],
  ['Жора',100,103+73],
  ['Коля',100,104+82],
  ['Лёша',100,105+91]
]

function WelcomeF(props) {return <h1>Hello, {props.name}!</h1>;}
class App extends Component {
  render () {
    return (
      <div className='App'>
        <WelcomeF name="Kitty"/>
        <Tab header= {['Мия','Вес','Рост']} data={data}/>
      </div>
    )
  }
}

export default App