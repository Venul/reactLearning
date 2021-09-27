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

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    });
  }


  render() {
    const divStyle = {
      textAlign: 'center'
    }

    const cars = this.state.cars;

    return (
      <div style = {divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button 
          onClick={this.changeTitleHandler.bind(this, 'ololo')}
        >Change title</button>

        <Car name={cars[0].name} year={cars[0].year} onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}/>
        <Car name={cars[1].name} year={cars[1].year} onChangeTitle={() => this.changeTitleHandler(cars[1].name)}/>
    </div>
    );
  }
}

export default App;
