import React, { Component } from 'react'

class TableComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {data:[]};
  }

  componentDidMount() {
    fetch(this.props.getDataFrom) // , {mode:'cors'}
      .then(response => { return response.text(); })
      .then(msg => { const data = JSON.parse(msg).data; this.setState({data});})
      .catch(function(error) { console.log('Failed', error) });
  }

}

export default TableComponent
