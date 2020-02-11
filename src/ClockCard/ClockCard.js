import React, { Component } from "react";
import "./ClockCard.css";

class ClockCard extends Component {
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
      <div className="clockCardContainter">
        <p className="clockCard">{timePieces[0]}</p>
        <p className="clockCard">{timePieces[1]}</p>
        <p className="clockCard" style={secondsStyle}>
          {timePieces[2]}
        </p>
      </div>
    );
  }
}

export default ClockCard;
