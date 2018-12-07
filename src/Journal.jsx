import React from 'react'
import Header from './Header';
import Footer from './Footer';
import BaseTable from './BaseTable';
import BaseRow from './BaseRow';

function Cell(cell){return(<td>{cell.item}</td>)}

class Row extends BaseRow {

  render(){
    const data = this.props.data
    // console.log(data)
    return (
      <tr id={data.entityId} onMouseOver={this.onMouse} onMouseOut={this.onMouse}>
        <Cell item = {data.entityId}/>
        <Cell item = {data.userIP}/>
        <Cell item = {data.timestamp}/>
        <td>{data.operation}</td>
      </tr>
    )
  }
}

class Journal extends BaseTable {
  render () {
    console.log(this.state.data)
    return (
      <form>
        <table rules='all' frame='border'>
          <caption>{this.props.title}</caption>
          <Header head={["№","Адрес","Время","Операция"]}/>
          <tbody>
            {this.state.data.map(item => <Row site={this.props.site} key={item.entityId} data={item}/>)}
          </tbody>
          <Footer foot={["","","",""]}/>
        </table>
      </form>
    )
  }
}

export default Journal