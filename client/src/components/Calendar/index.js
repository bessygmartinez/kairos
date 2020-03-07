import React, { Component } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "../Modal";
import "./calendar.css"

const propTypes = {}

const localizer = momentLocalizer(moment);

class MyCalendar extends Component {
    constructor() {
      super();

      const events = [
        { 
        id: 0,
        title: "",
        start: "2020-03-02",
        end: "2020-03-25",
        allDay: true,
        availability: true
        }
      ];
      
      const handleSelect = (event) => {
        console.log(event.start)
        let startDate = moment(event.start).format("dddd, MM-DD");
        console.log(startDate);
        let endDate = moment(event.end).format("dddd, MM-DD");
        console.log(endDate)

        this.showModal(startDate, endDate, true)

          this.setState({
            events: [
              ...this.state.events,
              {
                ...this.event,
                availability: this.state.events.availability
              },
            ],
          })
      }    
      this.state = {
        events,
        event: null,
        handleSelect,
        show: false,
      };

    }

    formatDate = (event) => {
      console.log(event)
      // this.showModal(event)

    }

    showModal = (startDate, endDate, availability) => {
      this.setState({
        show: !this.state.show,
        start: startDate,
        end: endDate,
        availability: availability
      })
      };

    render() {

      return (
        <div>
          <div style={{ height: "500px", width: "1000px" }}>

            <Modal onClose={this.showModal} show={this.state.show} event={this.state.event} start={this.state.start}
            availability={this.state.events.availability} />

            <Calendar
              popup
              selectable
              localizer={localizer}
              events={this.state.events}
              views={["week", "month"]}
              defaultDate={moment().toDate()}
              onSelectEvent={event => this.formatDate(event)}
              onSelectSlot={event => this.state.handleSelect(event)}
              modalAvailability={this.state.modalAvailability}
            />
          </div>
          
        </div>
      );
    }
}

MyCalendar.propTypes = propTypes

export default MyCalendar;


