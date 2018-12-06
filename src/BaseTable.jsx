import React from 'react'

class BaseTable extends React.Component {

  state = {data:[]} // as is constructor

  componentDidMount() {
    this.request();
  }

  request = () => {
    fetch(this.props.site+this.props.dataSrc) // , {mode:'cors'}
      .then(response => { return response.text(); })
      .then(msg => { const data = JSON.parse(msg).data; this.setState({data});})
      .catch(error => { console.log('Failed', error) });
  }

}

export default BaseTable
