import React, { Component } from "react";
import DateTimePicker from "react-datetime-picker";
// import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';

import "./EventInput.css";

class EventInput extends Component {
  state = {
    startDate: new Date(),
    eventName: ""
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

  render() {
    return (
      <div className="eventInputContainter">
        <input
          className="eventNameInput"
          type="text"
          onChange={this.handleEventNameChange}
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
        >
          Add Event
        </button>
      </div>
    );
  }
}

export default EventInput;
