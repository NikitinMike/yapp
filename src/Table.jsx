import React, { Component } from 'react'
class Table extends Component {
  render () {
    // console.log(this.props.data)
    return (
      <table rules='all' frame='border'>
        <Header head={[]}/>
        <Body data={[]} />
        <Footer foot={[]}/>
      </table>
    )
  }
}

export default Table