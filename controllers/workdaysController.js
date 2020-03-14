const db = require("../models");

// Defining methods for the workdaysController
module.exports = {
  findAll: function(req, res) {
    db.Workday
    .find(req.query)
    .populate("User")
    .sort({ "name": 1 })
    .then(dbModel => res.json(dbModel))
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
    return db.Workday
      .create(req.body)
      .then((docEvent) => {
        res.json(docEvent)
        console.log("\n>> Created event:\n", docEvent);
        return db.User.findByIdAndUpdate(
          req.params.id, 
          { $push: { workday: docEvent._id }}, 
          { new: true, useFindAndModify: false}
        );
    })
  },
  update: function(req, res) {
    // let token = JSON.parse(localStorage.getItem("jwtToken"));
    // const user = token.data.id;
    db.User
      .findOneAndUpdate(req.body)
      .populate('workday')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .populate('workday')
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
