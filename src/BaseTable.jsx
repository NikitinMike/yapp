import React from 'react'

class BaseTable extends React.Component {

  state = {data:[],dataSrc:""} // as is constructor

  componentWillMount() {
    this.request();
  }

  request = () => {
    const dataSrc = this.props.dataSrc
    // console.log(dataSrc)
    if(dataSrc && (this.state.dataSrc!==dataSrc))
      fetch(dataSrc) // ,{mode:'cors'}
        .then(response => { return response.text(); })
        .then(msg => { 
            this.setState({dataSrc});
            const data = JSON.parse(msg).data; 
            this.setState({data});
          })
        .catch(error => { console.log('Failed', error) });
  }

}

export default BaseTable
