import React, { Component } from 'react'
// import './App.css'

// function Row(props) {
class Row extends Component {
  render () {
    const row = this.props.row;
    // console.log(this.props.row);
    return (
      row &&
      <tr>
        <td>{row.entityId}</td>
        <td>{row.number}</td>
        <td>{row.displayName}</td>
        <td>{row.userName}</td>
      </tr>
    )
  }
}

class Table extends Component {
  render () {
    return (
      <table rules='all' frame='border'>
        <Head header={this.props.header}/>
        <Body table={this.props.data}/>
        <Footer total={['*'.repeat(1),'*'.repeat(1),'*'.repeat(1),'*'.repeat(1)]}/>
      </table>
    )
  }
}

class Head extends Component {
  render () {
    // const head = this.props.header
    return (
      <thead>
        <tr>
          {this.props.header.map(item => <th key={item}>{item}</th>)}
        </tr>
      </thead>
    )
  }
}

class Body extends Component {  
  render () {
    // const table=this.props.table;
    // console.log(table);
    return (
      <tbody>
        {this.props.table.map(item => <Row key={item.entityId} row={item}/>)}
      </tbody>
    )
  }
}

class Footer extends Component {
  render () {
    const total = this.props.total
    return (
      <tfoot>
        <Row key={0} row={{
          entityId: total[0], 
          userName: total[1], 
          displayName: total[2], 
          number: total[3]
        }}/>
      </tfoot>
    )
  }
}

export default Table