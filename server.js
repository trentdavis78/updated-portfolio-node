require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const mongoose = require('mongoose');
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/portfolioDb";
var PORT = process.env.PORT || 3000;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
let db = mongoose.connection;

// Check connection
db.once('open', () => {
  console.log("Connected to MongoDB")
});
// Check for db errors
db.on('error', err => {
  console.log(err);
});

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/htmlRoutes")(app);

// Starting the server, ------------------------------------/

  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });


module.exports = app;