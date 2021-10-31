import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from './Counter/Counter';

export const ClickedContext = React.createContext(false)

class App extends Component {

  state = {
    clicked: false,
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
  }

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({cars})
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null;

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car 
              name={car.name}
              year={car.year}
              index={index}
              onDelete={ this.deleteHandler.bind(this, index)}
              onChangeName={event => this.onChangeName(event.target.value, index)}
            />
          </ErrorBoundary>
        )
      })
    }

    return (
      <div style = {divStyle}>
        <h1>{this.state.pageTitle}</h1>
        
        <ClickedContext.Provider value = {this.state.clicked} >
          <Counter />
        </ClickedContext.Provider>

        <button onClick={()=> this.setState({clicked: true})}>Change clicked</button>
        <button 
          style={{marginTop: 20}}
          onClick={this.toggleCarHandler}
        >
          Toggle cars
        </button>
        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: '20px'
        }}>
          {cars}
        </div>
        
    </div>
    );
  }
}

export default App;
