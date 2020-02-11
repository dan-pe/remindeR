import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import TimeCard from "./TimeCard/TimeCard";
import EventInput from "./EventInput/EventInput";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TimeCard />
        <EventInput />
      </div>
    );
  }
}

export default App;
