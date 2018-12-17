import React from 'react'

class BaseTable extends React.Component {

  state = {data:[],dataSrc:""} // as is constructor

  componentDidMount() {
    this.request();
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.dataSrc!==this.state.dataSrc) this.request();
  }

  // componentWillUpdate(nextProps, nextState, nextContext){
  //   // console.log(nextProps)
  //   // console.log(nextState)
  // }

  request = () => {
    // console.log(this.props.dataSrc)
    this.props.dataSrc && fetch(this.props.dataSrc) // ,{mode:'cors'}
      .then(response => { return response.text(); })
      .then(msg => { 
          const data = JSON.parse(msg).data; 
          this.setState({data});
          const dataSrc = this.props.dataSrc;
          this.setState({dataSrc});
        })
      .catch(error => { console.log('Failed', error) });
  }

}

export default BaseTable
