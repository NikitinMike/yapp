import React, { Component } from 'react'
// import './App.css'

class Tab extends Component {
  render () {
    const table = this.props.table
    return (
      <table rules='all' frame='border'>
        <Head/>
        <Body row={[]}/>
        {table.map(item => <Body row={item}/>)}
        <Footer/>
      </table>
    )
  }
}

class Head extends Component {
  render () {
    // ['заголовок 1', 'заголовок 2', 'заголовок 3']
    const head = ['Мия','Вес','Рост']
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
    // const text = 'текст'
    const row = this.props.row
    return (
      <tbody>
        <tr>
          <td>{row[0]}</td>
          <td>{row[1]}</td>
          <td>{row[2]}</td>
        </tr>
      </tbody>
    )
  }
}

class Footer extends Component {
  render () {
    const total = '*'.repeat(33)
    return (
      <tfoot>
        <tr>
          <td>{total}</td>
          <td>{total}</td>
          <td>{total}</td>
        </tr>
      </tfoot>
    )
  }
}

export default Tab