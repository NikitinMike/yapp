import React from 'react'
import Header from './TableHeader';
import Footer from './TableFooter';
import BaseTable from './BaseTable';
import BaseRow from './BaseRow';
import { baseUrl } from './App';

function edit(e){
  const tgt = e.target
  const value = tgt.value
  tgt.id && value && (value!==tgt.defaultValue) &&
    fetch(`${baseUrl}/editProduct/${tgt.id}/?product=${value}`,{mode:'cors'})
      .then(response => { console.log(value) })
      .catch(error => { console.log('Failed', error) });
}

function Input(cell) {
  return(<td><input type="text" size={cell.size} defaultValue= {cell.item} onBlur={edit} id={cell.id} /></td>)
}

function Cell(cell){return(<td>{cell.item}</td>)}

class Row extends BaseRow {
  render(){
    const data = this.props.data
    // console.log(data)
    return (
      <tr id={data.entityId} onMouseOver={this.onMouse} onMouseOut={this.onMouse}>
        <Cell item = {data.entityId} size={"3"} edit={false}/>
        <Input item = {data.name} size={"40"} id={data.entityId} />
        <Cell item = {data.options} size={"10"} edit={false}/>
        <Cell item = {data.uuid} size={"80"} edit={false}/>
      </tr>
    )
  }
}

class Products extends BaseTable {

  newProduct = (e) => {
    e.preventDefault();
    fetch(`${baseUrl}/newProduct`,{mode:'cors'})
      .then(response => { this.request() })
      .catch(error => { console.log('Failed', error) });
    this.render ();
  }

  render () {
    // !this.state.data && this.request();
    // console.log(this.state.data)
    return (
      <form>
        <table rules='all' frame='border'>
          <caption><button className="flex-itm" onClick={this.newProduct}>{this.props.title}</button></caption>
          <Header head={["[№]","Название","Параметры","Идентификатор"]}/>
          <tbody>
            {this.state.data.map(item => !item.disabled && <Row key={item.entityId} data={item}/>)}
          </tbody>
          <Footer foot={["","","",""]}/>
        </table>
      </form>
    )
  }
  
}

export default Products