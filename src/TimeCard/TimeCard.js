import React, { Component } from "react";
import "./TimeCard.css";

class TimeCard extends Component {
  render() {
    let cardValue = this.props.value;

    return (
      <div className="classNameContainer">
        <p>Name: {cardValue.name}</p>
        <p>Time: {cardValue.time}</p>
        <p onClick={this.props.click} style={{ color: "red" }}>
          Delete
        </p>
      </div>
    );
  }
}

export default TimeCard;
