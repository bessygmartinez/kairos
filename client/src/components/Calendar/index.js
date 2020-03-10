import React, { Component } from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "../Modal";
 
import "./calendar.css";

const propTypes = {};

const localizer = momentLocalizer(moment);

class MyCalendar extends Component {
  constructor() {
    super();

    const events = [];

    const handleSelect = event => {
      let startDate = moment(event.start).format("dddd, MMMM DD, YYYY");
      console.log(startDate);

      let endDate = moment(event.end).format("dddd, MMMM DD, YYYY");
      console.log(endDate);

      console.log(event);

      if (event.slots) {
        this.showModal(event, startDate, endDate);
      }


      if (event.allDay) {
        this.showModal(event, startDate, endDate);
      }
    };
    
    this.state = {
      events,
      event: null,
      handleSelect,
      show: false
      };
    
  }

  showModal = (event, startDate, endDate) => {
    this.setState({
      show: !this.state.show,
      event: event,
      start: startDate,
      end: endDate
    });
  };

  render() {
    return (
      <div>
        <div style={{ height: "500px", width: "1000px" }}>
          <Modal
            onClose={this.showModal}
            show={this.state.show}
            event={this.state.event}
            start={this.state.start}
            availability={event => this.state.event.availability}
          />

          <Calendar
            popup
            selectable
            localizer={localizer}
            events={this.state.events}
            views={["week", "month"]}
            defaultDate={moment().toDate()}
            onSelectEvent={event => this.state.handleSelect(event)}
            onSelectSlot={slotInfo => this.state.handleSelect(slotInfo)}
            id="TheCalendar"
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
