const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  workday: [{
    type: Schema.Types.Mixed,
    ref: "workdays"
  }],
  schedule: [{
    type: Schema.Types.Mixed,
    ref: "schedules"
  }]
});

module.exports = User = mongoose.model("users", UserSchema);
