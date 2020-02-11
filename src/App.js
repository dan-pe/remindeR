import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import Clock from "./Clock/Clock";
import EventInput from "./EventInput/EventInput";
import TimeCard from "./TimeCard/TimeCard";

class App extends Component {
  timeCardsName = "timeCards";

  state = {
    timeCards: JSON.parse(localStorage.getItem(this.timeCardsName))
  };

  constructor(props) {
    super(props);
    console.log(JSON.parse(localStorage.getItem(this.timeCardsName)));
  }

  eventSubmittedCallback = eventArgs => {
    let storedTimeCards = JSON.parse(localStorage.getItem(this.timeCardsName));
    let timeCard = eventArgs;

    if (!storedTimeCards) {
      storedTimeCards = [
        {
          name: timeCard.eventName,
          time: timeCard.startDate.toLocaleTimeString()
        }
      ];
    } else {
      storedTimeCards.push({
        name: timeCard.eventName,
        time: timeCard.startDate.toLocaleTimeString()
      });
    }

    localStorage.setItem(this.timeCardsName, JSON.stringify(storedTimeCards));

    this.setState({
      timeCards: storedTimeCards
    });
  };

  deleteCardCallback = index => {
    let storedTimeCards = [...this.state.timeCards];
    storedTimeCards.splice(index, 1);
    localStorage.setItem(this.timeCardsName, JSON.stringify(storedTimeCards));
    this.setState({
      timeCards: storedTimeCards
    });
  };

  render() {
    let timeCardsNew = null;

    if (this.state.timeCards) {
      timeCardsNew = (
        <div>
          {this.state.timeCards.map((card, index) => {
            return (
              <TimeCard
                value={card}
                key={index}
                click={() => this.deleteCardCallback(index)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <Header />
        <Clock />
        <EventInput click={this.eventSubmittedCallback} />
        {timeCardsNew}
      </div>
    );
  }
}

export default App;
