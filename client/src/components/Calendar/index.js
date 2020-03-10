import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux"
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)

class MyCalendar extends Component {
    constructor() {
      super()
      const events = []
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

MyCalendar.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps) (MyCalendar);


