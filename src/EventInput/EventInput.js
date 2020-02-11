import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "./EventInput.css";
import "react-datepicker/dist/react-datepicker.css";

class EventInput extends Component {
  state = {
    startDate: new Date()
  };

  handleChangeDate = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div className="eventInputContainter">
        <input type="text" />
        <DatePicker
          selected={this.state.startDate}
          onChange={this.state.handleChangeDate}
        />
      </div>
    );
  }
}

export default EventInput;
