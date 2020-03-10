const mongoose = require("mongoose");
const key = require("../config/keys").mongoURI;
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(key);

const workdaysSeed = [
  {  
    title: "Dre",
    start: "2020-03-02",
    end: "2020-03-02",
    allDay: true,
    availability: false
  },
  {
    title: "Dre",
    start: "2020-03-31",
    end: "2020-03-31",
    allDay: true,
    availability: true
  },
  {
    title: "Dre",
    start: "2020-03-18",
    end: "2020-03-18",
    allDay: true,
    availability: false
  }
]

db.User
  .then(() => db.User.findByIdAndUpdate(("5e56c9317bd8760db89acae0", workdaysSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
