import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "../Modal";

import "./calendar.css";

const localizer = momentLocalizer(moment);

class MyCalendar extends Component {
  constructor() {
    super();

    const events = [
      {
        _id: {
            "$oid": "5e69142f1ca218a600be2cab"
        },
        availability: false,
        allDay: true,
        title: "Dre",
        start: {
            "$date": "2020-03-02T00:00:00.000Z"
        },
        end: {
            "$date": "2020-03-02T00:00:00.000Z"
        },
        "__v": 0
    }
    ];

    const handleSelect = event => {
      let startView = moment(event.start).format("dddd, MMMM DD, YYYY");
      let startDate = moment(event.start).format("YYYY/MM/DD");

      let endView = moment(event.end).format("dddd, MMMM DD, YYYY");
      let endDate = moment(event.end).format("YYYY/MM/DD");

      if (event.slots) {
        this.showModal(event, startDate, endDate, startView, endView);
      }

      if (event.allDay) {
        this.showModal(event, startDate, endDate, startView, endView);
      }
    };
    
    this.state = {
      events,
      event: null,
      handleSelect,
      show: false,
    };
    
  }

  showModal = (event, startDate, endDate, startView, endView) => {
    this.setState({
      show: !this.state.show,
      event: event,
      startView: startView,
      endView: endView,
      startDate: startDate,
      endDate: endDate
    });
  };

  render() {
    return (
      <div>
        <div style={{ height: "500px", width: "1000px" }}>
          <Modal
            onClose={this.showModal}
            onSubmit={this.onSubmit}
            show={this.state.show}
            event={this.state.event}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            startView={this.state.startView}
            endView={this.state.endView}
            user={this.state.user}
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
};

const mapStateToProps = state => ({
  auth: state.auth,
  events: state.events,
  availability: state.availability
});

export default connect(mapStateToProps) (MyCalendar);
