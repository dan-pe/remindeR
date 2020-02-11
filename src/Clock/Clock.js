import React, { Component } from "react";
import "./Clock.css";

class Clock extends Component {
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
    let secondsStyle = null;

    if (timePieces[2] > 50) {
      secondsStyle = { color: "red" };
    }

    return (
      <div className="clockContainter">
        <p className="clock">{timePieces[0]}</p>
        <p className="clock">{timePieces[1]}</p>
        <p className="clock" style={secondsStyle}>
          {timePieces[2]}
        </p>
      </div>
    );
  }
}

export default Clock;
