import React from 'react'
import Header from './TableHeader';
import Footer from './TableFooter';
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
        <Cell item = {data.name}/>
        <Cell item = {data.options}/>
        <Cell item = {data.uuid}/>
      </tr>
    )
  }
}

class Products extends BaseTable {

  render () {
    // !this.state.data && this.request();
    // console.log(this.state.data)
    return (
      <form>
        <table rules='all' frame='border'>
          <caption> {this.props.title} </caption>
          <Header head={["[№]","Название","Параметры","Идентификатор"]}/>
          <tbody>
            {this.state.data.map(item => !item.disabled && <Row site={this.props.site} key={item.entityId} data={item}/>)}
          </tbody>
          <Footer foot={["","","",""]}/>
        </table>
      </form>
    )
  }
  
}

export default Products