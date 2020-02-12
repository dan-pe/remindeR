import React, { Component } from "react";
import "./TimeCard.css";

class TimeCard extends Component {
  render() {
    let cardValue = this.props.value;
    let cardDateTime = new Date(cardValue.time);

    return (
      <div className="classNameContainer">
        <p className="timeCardName"> {cardValue.name}</p>
        <p>Time: {cardDateTime.toLocaleTimeString()}</p>
        <p>Date: {cardDateTime.toLocaleDateString()}</p>
        <p onClick={this.props.click} style={{ color: "red" }}>
          Delete
        </p>
      </div>
    );
  }
}

export default TimeCard;
