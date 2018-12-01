import React, { Component } from 'react'

function Item(props){
    return(<td>{props.item}</td>)
}

class BaseRow extends Component {

    onMouse = (e) => {
        e.preventDefault();
        const parent=e.target.parentElement
        if(parent.id!==0)
            parent.style.backgroundColor = (e.type==='mouseover') ? 'red':'';
    }

    handleClick = (e) => {
        e.preventDefault();
        if(e.target.tagName==='BUTTON')
          e.target.parentElement.parentElement.remove()
    }

    render () {
        const row = this.props.row
        // console.log(row)
        return (
            <tr>
                {row.map(item => <Item key={item} item={item} />)}
            </tr>
        )
    }
}

export default BaseRow