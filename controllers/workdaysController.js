const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findById: function(req, res) {
    // const id = window.document.cookie.match(new RegExp('userId=([^;]+)'));
    db.User
      .findById(id)
      .then(dbModel => res.json(dbModel))
      console.group(dbModel)
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    // let token = JSON.parse(localStorage.getItem("jwtToken"));
    // const user = token.data.id;
    db.User
      .findOneAndUpdate(token, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
