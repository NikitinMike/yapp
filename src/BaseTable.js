import React from 'react'

class BaseTable extends React.Component {

  state = {data:[]} // as is constructor

  componentDidMount() {
    this.request();
  }

  request = () => {
    // console.log(this.props.dataSrc)
    this.props.dataSrc &&
    fetch(this.props.dataSrc) // ,{mode:'cors'}
      .then(response => { return response.text(); })
      .then(msg => { const data = JSON.parse(msg).data; this.setState({data});})
      .catch(error => { console.log('Failed', error) });
  }

}

export default BaseTable
