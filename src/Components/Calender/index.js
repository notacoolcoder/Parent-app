import React, { Component } from "react";
import "./index.css";
import Calendar from "react-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import BigCalendar from "react-big-calendar";
import moment from "moment";
var localizer = BigCalendar.momentLocalizer(moment);
export default class extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const dummyEvents = [
      {
        allDay: false,
        end: new Date("October 25, 2018"),
        start: new Date("October 25, 2018"),
        title: "hi"
      }
    ];

    return (
      <div className="calendar">
        <BigCalendar
          localizer={localizer}
          events={dummyEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100%" }}
        />
      </div>
    );
  }
}
