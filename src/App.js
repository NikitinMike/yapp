import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Tab/>
      </div>
    )
  }
}

class Head extends Component {
  render () {
    const head = ['заголовок 1', 'заголовок 2', 'заголовок 3']
    return (
      <thead>
        <th>{head[0]}</th>
        <th>{head[1]}</th>
        <th>{head[2]}</th>
      </thead>
    )
  }
}

class Body extends Component {
  render () {
    const text = 'текст'
    return (
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{text}</td>
          <td>{text}</td>
        </tr>
      </tbody>
    )
  }
}

class Footer extends Component {
  render () {
    const text = '*'.repeat(33)
    return (
      <tfoot>
        <tr>
          <td>{text}</td>
          <td>{text}</td>
          <td>{text}</td>
        </tr>
      </tfoot>
    )
  }
}

class Tab extends Component {
  render () {
    return (
      <table rules='all' frame='border'>
        <Head/>
        <Body/>
        <Footer/>
      </table>
    )
  }
}

export default App