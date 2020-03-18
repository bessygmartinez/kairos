import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "../Modal";

import workdaysAPI from "../../utils/workdaysAPI";
import { toast } from "react-toastify";

import "./calendar.css";

const localizer = momentLocalizer(moment);

class MyCalendar extends Component {
  componentDidMount() {
    if (this.props.auth.user.role === "manager") {
      workdaysAPI
        .getAllEmployeesWorkdays()
        .then(dbModel => {
          this.setState({
            events: dbModel.data
          });
        });
    } else {
      workdaysAPI
      .getAllThisEmployeeWorkdays(this.props.auth.user.id)
      .then(dbModel => {
        this.setState({
          events: dbModel.data.workday
        });
      });
    }
  }

  constructor() {
    super();

    const events = [];
    
    this.state = {
      events,
      event: null,
      show: false
    };
  };

  showModal = (event, startDate, endDate, startView, endView, modalAvail) => {
    this.setState({
      show: !this.state.show,
      event: event,
      startView: startView,
      endView: endView,
      startDate: startDate,
      endDate: endDate,
      switch: modalAvail
    });
  };

  handleSelect = event => {
    let startView = moment(event.start).format("dddd, MMMM DD, YYYY");
    let startDate = moment(event.start).format("YYYY/MM/DD");

    let endView = moment(event.end).format("dddd, MMMM DD, YYYY");
    let endDate = moment(event.end).format("YYYY/MM/DD");

    let modalAvail;

    if (event.slots) {
      modalAvail = true;
      this.showModal(event, startDate, endDate, startView, endView, modalAvail);
    }

    if (event.allDay) {
      if (event.availability === false) {
        modalAvail = false;
        this.showModal(event, startDate, endDate, startView, endView, modalAvail);
      } else {
        modalAvail = true;
        this.showModal(event, startDate, endDate, startView, endView, modalAvail);
      }
    }
  };

  onClose = e => {
    this.onClose() && this.onClose(e);
  };

  onChange = e => {
    this.setState({ switch: !this.state.switch });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let workdaysUpdate = {};


    if (this.props.auth.user.role === "manager") {
      workdaysUpdate = {
        title: this.state.event.title,
        availability: this.state.switch,
        start: this.state.startDate,
        end: this.state.endDate,
        allDay: true
      };
    } else {
      workdaysUpdate = {
        title: this.props.auth.user.name,
        availability: this.state.switch,
        start: this.state.startDate,
        end: this.state.endDate,
        allDay: true
      };
    };

    let eventExists = this.state.events.indexOf(this.state.event)

    if (eventExists === -1) {
      workdaysAPI
      .saveWorkday(this.props.auth.user.id, workdaysUpdate)
      .then(response => {
        this.setState(prevState => {
          return {
            events: [...prevState.events, response.data]
          }
        })
        toast.success("Schedule has been saved")
      })
    } else {
      workdaysAPI
      .updateWorkday(this.state.event._id, workdaysUpdate)
      .then(toast.success("Schedule has been updated"))
      .then(
        workdaysAPI
          .getAllEmployeesWorkdays()
          .then(dbModel => {
            this.setState({
              events: dbModel.data
            });
        }))
    }
  };

  render() {
    return (
      <div>
        <div style={{ height: "500px", width: "100%" }}>
          {this.state.show ? (
            <Modal
              onClose={this.showModal}
              onSubmit={this.onSubmit}
              show={this.state.show}
              event={this.state.event}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              startView={this.state.startView}
              endView={this.state.endView}
              switch={this.state.switch}
              onChange={this.onChange}
            />
          ) : null}

          <Calendar
            popup
            selectable
            localizer={localizer}
            events={this.state.events}
            views={["week", "month"]}
            defaultDate={moment().toDate()}
            onSelectEvent={event => this.handleSelect(event)}
            onSelectSlot={slotInfo => this.handleSelect(slotInfo)}
            eventPropGetter={event => ({
              style: {
                backgroundColor: event.availability === false ? "#a13a1a" : "#009688"
              }
            })}
            id="TheCalendar"
          />
        </div>
      </div>
    );
  }
}

MyCalendar.propTypes = {};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(MyCalendar);
