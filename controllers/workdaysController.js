const db = require("../models");

// Defining methods for the workdaysController
module.exports = {
  findById: function(req, res) {
    db.User
      .findById(id)
      .populate('workday')
      .then(dbModel => res.json(dbModel))
      console.group(dbModel)
      .catch(err => res.status(422).json(err));
  },
  findByIdAndInsertWorkday: function(req, res) {
    return db.Workday
      .create(req.body).then((docEvent) => {
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
