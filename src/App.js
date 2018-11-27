import React, { Component } from 'react'
import Tab from './Table';
import './App.css'

function WelcomeF(props) {
  return <h1>Hello, {props.name}</h1>;
}
class WelcomeC extends React.Component {
  render() {
    return <h1> Hello, {this.props.name} </h1>;
  }
}
class App extends Component {
  render () {
    return (
      <div className='App'>
        <WelcomeC name="MikeN"/>
        <Tab header= {['Мия','Вес','Рост']}
            data={[['Вася',100,110],['Петя',100,120],['Жора',100,130],['Коля',100,140],['Лёша',100,150]]} 
        />
      </div>
    )
  }
}

export default App