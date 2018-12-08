import React from 'react'

class MenuItem extends React.Component {

    click = (e) => {
        e.preventDefault();
        // alert(e.target.innerText)
    }

    render () {
        return (
            <button className="flex-itm" onClick={this.click}>{this.props.item}</button>
        )
    }

}

class MyMenu extends React.Component {

    render () {
        return (
            <div className="flex">
                {this.props.menu.map(item => <MenuItem key={item} item={item} />)}
            </div>
        )
    }
}

export default MyMenu