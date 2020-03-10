const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ScheduleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  availability: {
    type: Boolean,
    default: true
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  allDay: {
    type: Boolean,
    default: true
  }
});

module.exports = Schedule = mongoose.model("schedules", ScheduleSchema);