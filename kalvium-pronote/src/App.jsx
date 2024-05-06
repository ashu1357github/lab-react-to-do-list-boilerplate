import '../src/App.css'
import React, { Component } from 'react'
import Input from './Components/Input'
import List from './Components/List'


export default class App extends Component {
  //To do list using class componenets 

  constructor(props) {
    super(props)
    this.state = {
      value: '',
      data: []
    }

  }

  handleChange = (text) => {
    this.setState({value: text})
  }
  handleSubmit = () => {
    this.state.data.push(this.state.value)
    this.setState({value: ''})
  }
  handleDelete = (index)=>{
    this.state.data.splice(index,1)
    this.setState({data: this.state.data})
  }
  handleUpdate = (index)=>{
    const datas = prompt()
    this.state.data[index] = datas
    this.setState({data: this.state.data})

  }

  render() {
    return (
          <>
          <div className="whole-wrapper">

            <h1>To Do List</h1>

            <Input handleSubmit={this.handleSubmit} handleChange = {this.handleChange} inputValue={this.state.value}/>  

            <div className="text">
              <h1>{this.state.value}</h1>
            </div>

            <List data={this.state.data} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
            

            </div>
          </>
    )
  }
}