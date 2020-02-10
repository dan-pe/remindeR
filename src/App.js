import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import TimeCard from "./TimeCard/TimeCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TimeCard />
      </div>
    );
  }
}

export default App;
