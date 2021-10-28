import React, { Component } from 'react'
import classes from './Car.css'
import withClass from '../hoc/withClass'

class Car extends Component {
  render() {
    const inputClasses = ['input']

    if (this.props.name !== '') {
      inputClasses.push('green')
    } else {
      inputClasses.push('red')
    }
  
    if (this.props.name.length > 4) {
      inputClasses.push('bold')
    }

    return (
      <>
        <h2>Car name: {this.props.name}</h2>
        <p>Car year: {this.props.year}</p>
        <input 
          type="text" 
          onChange={this.props.onChangeName}
          defaultValue={this.props.name} 
          className={inputClasses.join(' ')}
        />
        <button onClick={this.props.onDelete}>Delete</button>
        </>
    )
  }
}

export default withClass(Car, classes.Car)