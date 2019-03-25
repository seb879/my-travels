import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Quote
          quote= "Montreal, Canada, 5843km"
          image="https://zupimages.net/up/19/13/pijz.jpg"
        />
        <Quote
          quote= "Los Angeles, USA, 9954km"
          image="https://zupimages.net/up/19/13/dvvp.jpg"
        />
      </div>
    );
  }
}

export default App;
