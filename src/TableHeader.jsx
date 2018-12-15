import React, { Component } from 'react'

class TableHeader extends Component {
  render () {
    return (
      <thead>
        <tr>
          {this.props.head.map((item,index) => <th key={index}>{item}</th>)}
        </tr>
      </thead>
    )
  }
}

export default TableHeader