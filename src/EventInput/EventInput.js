import React, { Component } from "react";
import DateTimePicker from "react-datetime-picker";

import "./EventInput.css";

class EventInput extends Component {
  state = {
    startDate: new Date(),
    eventName: "Type in an event name!"
  };

  handleChangeDate = date => {
    this.setState({
      startDate: date
    });
  };

  handleEventNameChange = event => {
    this.setState({
      eventName: event.target.value
    });
  };

  isInputValid() {
    if (this.state.eventName.length < 1) {
      return true;
    } else return false;
  }

  render() {
    return (
      <div className="eventInputContainter">
        <input
          className="eventNameInput"
          type="text"
          onChange={this.handleEventNameChange}
          value={this.state.eventName}
        />
        <br />
        <DateTimePicker
          className="eventTimeInput"
          onChange={this.handleChangeDate}
          value={this.state.startDate}
        />
        <br />
        <button
          className="eventInputButton"
          onClick={() => this.props.click(this.state)}
          disabled={this.isInputValid()}
        >
          Add Event
        </button>
      </div>
    );
  }
}

export default EventInput;
