import React, { Component } from 'react'


export default class Input extends Component {
  render() {
    return (
        <>
        <div className='input'>
            <input type="text" placeholder='Your Tasks' 
            value={this.props.inputValue} 
            onChange={(e)=>this.props.handleChange(e.target.value)}/>
        </div>
        <button onClick={this.props.handleSubmit}>Add Task</button>
      </>
    )
  }
}