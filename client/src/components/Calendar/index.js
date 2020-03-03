import React, { Component } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class MyCalendar extends Component {
    constructor() {
      super();
      const formats = {
        dateFormat: "DD",
        dayRangeHeaderFormat: ({ start, end }, culture, localizer) =>
          localizer.format(start, { date: "YYYY-MM-DD" }, culture) + ' — ' +
          localizer.format(end, { date: "YYYY-MM-DD" }, culture)
      };
      const events = [
        {
          id: 0,
          title: "Stephen - Unavailable",
          allDay: true,
          start: new Date("2020-03-01"),
          end: new Date("2020-03-25"),
        },
        {
          id: 0,
          title: "Stephen - Available",
          allDay: true,
          start: new Date("2020-03-25"),
          end: new Date("2020-03-31")
        },
        {
          id: 1,
          title: "Bessy - Available",
          allDay: true,
          start: new Date("2020-03-15"),
          end: new Date("2020-03-15")
        },
        {
          id: 2,
          title: "Paola - Available",
          allDay: true,
          start: new Date("2020-03-25"),
          end: new Date("2020-03-25")
        },
        {
          id: 3,
          title: "Paola - Available",
          allDay: true,
          start: new Date("2020-04-04"),
          end: new Date("2020-04-04")
        }
      ]
      this.state = {
        name: 'React',
        events,
        formats
      };
    }
  
    render() {
      return (
        <div>
          <div style={{ height: "500px", width: "1000px" }}>
            <Calendar
              selectable
              events={this.state.events}
              formats={this.state.formats}
              startAccessor="start"
              endAccessor="end"
              views={["week", "month"]}
              defaultDate={moment().toDate()}
              localizer={localizer}
              onSelectEvent={event => alert(event.title)}
              onSelectSlot={this.handleSelect}
            />
          </div>
        </div>
      );
    }
}
export default MyCalendar;


