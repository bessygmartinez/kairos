const mongoose = require("mongoose");
const key = require("../config/keys").mongoURI;
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(key);

const createWorkdaysSeed = function (id, event) {
  return db.Workday.create(event).then(docEvent => {
    console.log("\n>> Created event:\n", docEvent);
    return db.User.findByIdAndUpdate("5e6811825efe94704c7ef80b", { $push: { workday: docEvent._id }}, { new: true, useFindAndModify: false});
  })
}

createWorkdaysSeed("5e6811825efe94704c7ef80b", 
  {
    title: "Dre",
    availability: false,
    start: "2020-03-02",
    end: "2020-03-02",
    allDay: true
  }
)

createWorkdaysSeed("5e6811825efe94704c7ef80b", 
  {
    title: "Dre",
    availability: false,
    start: "2020-03-02",
    end: "2020-03-02",
    allDay: true
  }
)

createWorkdaysSeed("5e6811825efe94704c7ef80b", 
  {
    title: "Dre",
    availability: false,
    start: "2020-03-02",
    end: "2020-03-02",
    allDay: true
  }
)