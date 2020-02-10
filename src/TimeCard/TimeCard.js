import React, { Component } from "react";
import "./TimeCard.css";

class TimeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      currentTime: new Date().toLocaleTimeString()
    });
  }

  render() {
    let timePieces = this.state.currentTime.slice().split(":");
    return (
      <div>
        <p className="timeCard">{timePieces[0]}</p>
        <p className="timeCard">{timePieces[1]}</p>
        <p className="timeCard">{timePieces[2]}</p>
      </div>
    );
  }
}

export default TimeCard;
