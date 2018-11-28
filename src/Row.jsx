import React, { Component } from 'react'

// function Row(props) {
class Row extends Component {
    render () {
        const data = this.props.data;
        console.log(data);
        const row =
            <tr>
                <td>{data.entityId}</td>
                <td>{data.number}</td>
                <td>{data.displayName}</td>
                <td>{data.userName}</td>
            </tr>
        return (row)
    }
}

export default Row