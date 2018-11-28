import React, { Component } from 'react'

// function Row(props) {
class AccountRow extends Component {
    render () {
        const data = this.props.data;
        const row = 
            <tr>
                <td>{data.entityId}</td>
                <td>{data.number}</td>
                <td>{data.displayName}</td>
                <td>{data.userName}</td>
            </tr>
        console.log(row);
        return (row)
    }
}

export default AccountRow