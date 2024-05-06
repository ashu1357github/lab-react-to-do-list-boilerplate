import React, { Component } from 'react'


export default class List extends Component {
  render() {
    return (
        <div className="list">
        {
          this.props.data.map((item, index) => {
            return (
              <div className='flex' key={index}>
                <h3>{item}</h3>
                <button onClick={()=>{this.props.handleDelete(index)}}>Delete</button>
                <button onClick={()=>{this.props.handleUpdate(index)}}>Update</button>
              </div>
              
            )})
        }
        </div>
    )
  }
}