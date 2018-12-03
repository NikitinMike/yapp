import React, { Component } from 'react'

function Cell(props){return(<td>{props.item}</td>)}

class BaseRow extends Component {

    onMouse = (e) => {
        e.preventDefault();
        const parent=e.target.parentElement
        if(parent.id!==0)
            if(parent.tagName==='TD')
                parent.parentElement.style.backgroundColor = (e.type==='mouseover') ? 'red':'';
            else parent.style.backgroundColor = (e.type==='mouseover') ? 'red':'';
    }

    handleClick = (e) => {
        e.preventDefault();
        if(e.target.tagName==='BUTTON')
          e.target.parentElement.parentElement.remove()
        //   window.location.href = `https://licensesvc.trusted.ru/license/account/license/`;
    }

    render () {
        const row = this.props.row
        // console.log(row)
        return (
            <tr>
                {row.map(item => <Cell key={item} item={item} />)}
            </tr>
        )
    }
}

export default BaseRow