import React, { Component } from 'react'
  
class TableFooter extends Component {
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
  
export default TableFooter