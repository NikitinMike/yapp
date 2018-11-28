import React, { Component } from 'react'

// function Row(props) {
class Row extends Component {
    render () {
        const row = this.props.row;
        // console.log(this.props.row);
        return (
            row &&
            <tr>
                <td>{row.entityId}</td>
                <td>{row.number}</td>
                <td>{row.displayName}</td>
                <td>{row.userName}</td>
            </tr>
        )
    }
}
        
export default Row