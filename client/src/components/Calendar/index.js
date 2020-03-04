import React, { Component } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const propTypes = {}

const localizer = momentLocalizer(moment)

class MyCalendar extends Component {
    constructor() {
      super()
      const events = [
        { 
            id: 0,
            title: "Stephen - Unavailable",
            allDay: true,
            start: new Date("2020-03-02"),
            end: new Date("2020-03-25")
        },
        {
          id: 1,
          title: "Stephen - Available",
          allDay: true,
          start: new Date("2020-04-01"),
          end: new Date("2020-04-04")
        }
      ]
      const handleSelect = ({ start, end }) => {
        const title = window.prompt('New Event name')
        if (title)
          this.setState({
            events: [
              ...this.state.events,
              {
                start,
                end,
                title,
              },
            ],
          })
      }    
      this.state = {
        events,
        handleSelect
      };
    }

    render() {
      return (
        <div>
          <div style={{ height: "500px", width: "1000px" }}>
            <Calendar
              popup
              selectable
              localizer={localizer}
              events={this.state.events}
              views={["week", "month"]}
              defaultDate={moment().toDate()}
              onSelectEvent={event => alert(event.title)}
              onSelectSlot={this.state.handleSelect}
            />
          </div>
        </div>
      );
    }
}

MyCalendar.propTypes = propTypes

export default MyCalendar;


