import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "./EventInput.css";
import "react-datepicker/dist/react-datepicker.css";

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

  render(props) {
    return (
      <div className="eventInputContainter">
        <input
          className="eventNameInput"
          type="text"
          onChange={this.handleEventNameChange}
        />
        <DatePicker
          className="eventTimeInput"
          selected={this.state.startDate}
          onChange={this.state.handleChangeDate}
        />
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
