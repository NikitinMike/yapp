import React, { Component } from 'react'
import Row from './Row';

class Table extends Component {
  render () {
    return (
      <table rules='all' frame='border'>
        <Head header={this.props.header}/>
        <Body table={this.props.data}/>
        <Footer total={this.props.total}/>
      </table>
    )
  }
}

class Head extends Component {
  render () {
    // const head = this.props.header
    return (
      <thead><tr>
        {this.props.header.map(item => <th key={item}>{item}</th>)}
      </tr></thead>
    )
  }
}

class Body extends Component {  
  render () {
    // const table=this.props.table;
    // console.log(table);
    return (
      <tbody>
        {this.props.table.map(item => <Row key={item.entityId} data={item}/>)}
      </tbody>
    )
  }
}

class Footer extends Component {
  render () {
    const total = this.props.total
    return (
      <tfoot>
        <Row key={0} data={total}/>
      </tfoot>
    )
  }
}

export default Table