const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require('path');

const users = require("./routes/api/users");
const workdays = require("./routes/api/workdays");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
 
//Passport middleware
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  let protected = 'kairos_favicon.png';

  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function(req, res) {
    let path = req.params['0'].substring(1)
    
    if (protected.includes(path)) {
      res.sendFile(`${__dirname}/build${path}`);
    } else {
      res.sendFile(path.join(`${__dirname}/client/build/index.html`))
    }
    
  })
}

// Add routes, both API and view
app.use("/api/workdays", workdays);
app.use("/api/users", users);

//DB Config
const db = process.env.MONGODB_URI;

// Connect to the Mongo DB
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  mongoose.set("useFindAndModify", false);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
