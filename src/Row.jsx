import React, { Component } from 'react'

// function Row(props) {
class Row extends Component {
    render () {
        const row = this.props.row
        console.log(row)
        return (
            <tr>
                {row.map(item => <td key={item}>{item}</td>)}
            </tr>
        )
    }
}   

export default Row