import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import ClockCard from "./ClockCard/ClockCard";
import EventInput from "./EventInput/EventInput";

class App extends Component {
  state = {
    timeCards: localStorage.getItem("timeCards")
  };

  render() {
    let timeCardsNew = null;

    if (this.state.timeCards) {
      timeCardsNew = (
        <div>
          {this.state.timeCards.map((card, index) => {
            return <p>Time card!: {card}</p>;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <Header />
        <ClockCard />
        <EventInput />
        {timeCardsNew}
      </div>
    );
  }
}

export default App;
