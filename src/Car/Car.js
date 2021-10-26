import React, { Component } from 'react'
import Radium from 'radium'
import './Car.css'

class Car extends Component {
  render() {

    if (Math.random() > 0.7) {
      throw new Error('Magic number error!');
    }
    const inputClasses = ['input']

    if (this.props.name !== '') {
      inputClasses.push('green')
    } else {
      inputClasses.push('red')
    }
  
    if (this.props.name.length > 4) {
      inputClasses.push('bold')
    }
  
    const style = {
      border: '1px solid #ccc',
      boxShadow: '0 4px 5px 0 rgba(0,0,0, .14)',
      ':hover' : {
        border: '1px solid #aaa',
        boxShadow: '0 4px 14px 0 rgba(0,0,0, .25)',
        cursor: 'pointer'
      }
    }
  
    return (
      <div className='car' style={style}>
        <h2>Car name: {this.props.name}</h2>
        <p>Car year: {this.props.year}</p>
        <input 
          type="text" 
          onChange={this.props.onChangeName}
          defaultValue={this.props.name} 
          className={inputClasses.join(' ')}
        />
        <button onClick={this.props.onDelete}>Delete</button>
    </div>
    )
  }
}

export default Radium(Car)