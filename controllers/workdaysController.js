const db = require("../models");

// Defining methods for the workdaysController
module.exports = {
  findAll: function(req, res) {
    db.Workday
      .find(req.query)
      .populate("User")
      .sort({ "name": 1 })
      .then(dbModel => res.json(dbModel))
      console.log("\n>> Grabbing all events:\n", dbModel)
      .catch(err=>res.status(422).json(err));
  },
  findAllById: function(req, res) {
    db.User
      .findById(req.params.id)
      .populate("workday")
      .then(docEvent => {
        res.json(docEvent)
      console.log("\n>> Grabbing all events:\n", docEvent);
        return db.User.find(
          { workday: docEvent }, 
        );
    })
  },
  findByIdAndInsertWorkday: function(req, res) {
    db.Workday
      .create(req.body)
      .then((docEvent) => {
        res.json(docEvent)
        console.log("\n>> Created event:\n", docEvent)
        db.User.findByIdAndUpdate(
          req.params.id, 
          { $push: { workday: docEvent._id }}, 
          { new: true, useFindAndModify: false}
        )
      .catch(err=>res.status(422).json(err));
    })
    .catch(err=>res.status(422).json(err));
  },
  findByIdAndUpdate: function(req, res) {
    db.Workday
      .findByIdAndUpdate(req.params.id, req.body)
      .then((docEvent) => {
        res.json(docEvent)
        console.log("\n>> Updated event:\n", docEvent)
      })
      .catch(err => res.status(422).json(err));
  }
};
