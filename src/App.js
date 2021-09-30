import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {

  state = {
    cars: [
      {name: 'Audi', year: 2018},
      {name: 'Ford', year: 2015},
      {name: 'Nissan', year: 2016}
    ],
    pageTitle: 'Hell world',
    showCars: true
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    });
  }

  toggleCarHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  }

  deleteHandler (index) {
    const cars = [...this.state.cars]
    cars.splice(index,1)
    this.setState({cars})
    // cars instead cars:cars
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null;

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car 
            key={index}
            name={car.name}
            year={car.year}
            onDelete={ this.deleteHandler.bind(this, index)}
            // bind need for correct this state
          />
        )
      })
    }

    return (
      <div style = {divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button 
          onClick={this.toggleCarHandler}
        >
          Toggle cars
        </button>
        {cars}
    </div>
    );
  }
}

export default App;
