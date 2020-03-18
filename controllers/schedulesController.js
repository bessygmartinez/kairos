const db = require("../models");

// Defining methods for the workdaysController
module.exports = {
  findAll: function(req, res) {
    db.Schedule
      .find()
      .populate("user")
      .sort({ "name": 1 })
      .then(dbModel => {
        res.json(dbModel)
        console.log("\n>> Grabbing all events:\n", dbModel)
      })
      .catch(err=>res.status(422).json(err));
  },
  insertAll: function(req, res) {
    db.Schedule
      .create(req.body)
      .then((docEvent) => {
        res.json(docEvent)
        console.log("\n>> Created events:\n", docEvent)
        db.User.findByIdAndUpdate(
          req.params.id, 
          { $push: { workday: docEvent._id }}, 
          { new: true, useFindAndModify: false}
        )
      .catch(err=>res.status(422).json(err));
    })
    .catch(err=>res.status(422).json(err));
  }
};
