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

    return (
      <div style = {divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button 
          onClick={this.changeTitleHandler.bind(this, 'ololo')}
        >Change title</button>

        { this.state.cars.map((car, index) => {
          return (
            <Car 
              key={index}
              // key remove error in console (unique elem)
              name={car.name}
              year={car.year}
              onChangeTitle={ () => this.changeTitleHandler(car.name)
              }
            />
          )
        }) }
    </div>
    );
  }
}

export default App;
