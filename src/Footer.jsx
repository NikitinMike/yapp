import React, { Component } from 'react'
  
class Footer extends Component {
  render () {
    return (
      <tfoot>
        <tr>
          {this.props.foot.map((item,index) => <td key={index}>{item}</td>)}
        </tr>
      </tfoot>
    )
  }
}
  
export default Footer