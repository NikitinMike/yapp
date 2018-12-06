import React from 'react'

class BaseTable extends React.Component {

  state = {data:[],refresh:false} // as is constructor

  componentDidMount() {
    this.request();
  }

  request = () => {
    fetch(this.props.getDataFrom) // , {mode:'cors'}
      .then(response => { return response.text(); })
      .then(msg => { const data = JSON.parse(msg).data; this.setState({data});})
      .catch(error => { console.log('Failed', error) });
  }

}

export default BaseTable
