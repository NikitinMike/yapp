import React, { Component } from 'react'

class Body extends Component {
  render () {
    return (
      <tbody>
        {this.props.data.map(item => <Row key={item.entityId} data={item}/>)}
      </tbody>
    )
  }
}

export default Body