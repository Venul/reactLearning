import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Car.css'
import withClass from '../hoc/withClass'

class Car extends Component {
constructor(props) {
  super(props)

  this.inputRef = React.createRef()
}

  componentDidMount() {
    if (this.props.index ===1) {
      this.inputRef.current.focus()
    }
  }

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
          ref={this.inputRef}
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

Car.propTypes = {
  name: PropTypes.string.isRequired, 
  year: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func
}

export default withClass(Car, 'car')