import React, { Component } from 'react'
import Radium from 'radium'
import './Car.css'

const Car = props => {
  const inputClasses = ['input']

  // управление классами через добавление стилей в массив, потом join

  if (props.name !== '') {
    inputClasses.push('green')
  } else {
    inputClasses.push('red')
  }

  if (props.name.length > 4) {
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
      <h2>Car name: {props.name}</h2>
      <p>Car year: {props.year}</p>
      <input 
        type="text" 
        onChange={props.onChangeName}
        defaultValue={props.name} 
        className={inputClasses.join(' ')}
      />
      <button onClick={props.onDelete}>Delete</button>
  </div>
  )
}

export default Radium(Car)