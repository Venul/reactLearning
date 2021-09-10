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
    pageTitle: 'Hell world'
  }

  render() {
    const cars = this.state.cars;

    return (
      <div>
        <h1>{this.state.pageTitle}</h1>
        <Car name={cars[0].name} year={cars[0].year}/>
        <Car name={cars[1].name} year={cars[1].year}/>
    </div>
    );
  }
}

export default App;
