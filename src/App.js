import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Saludo from "./Component/Saludo";

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */




export default class App extends Component{

  constructor(){
    super();
    this.state = {
      nombre: "ORT Belgrano"
    }
  }


  render(){
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Este es mi estado nombre: {this.state.nombre}</p>

        <Saludo name={this.state.nombre} />

        <button onClick={() => { this.alerta() }}> Clickeame </button>
      </div>
    )
  }

  alerta(){
    const nuevo_nombre = prompt("Cual es tu nombre?");

    this.setState({nombre: nuevo_nombre})

  }

}

