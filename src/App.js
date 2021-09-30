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
    showCars: false
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
            onChangeTitle={ () => this.changeTitleHandler(car.name)
            }
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

        {/* { this.state.showCars 
          ? this.state.cars.map((car, index) => {
              return (
                <Car 
                  key={index}
                  name={car.name}
                  year={car.year}
                  onChangeTitle={ () => this.changeTitleHandler(car.name)
                  }
                />
              )
            }) 
          : null
        } */}
    </div>
    );
  }
}

export default App;
