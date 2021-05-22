const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
// const db = require("./backend/models");
const dbConfig = require("./backend/config/db.config");
const mongoose = require('mongoose')



var corsOptions = {
  origin: "http://localhost:3000"
};



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions))
//parses json
app.use(bodyParser.json());
//parses urlencoded
app.use(bodyParser.urlencoded({ extended: true }));




mongoose
  .connect(process.env.MONGODB_URI || `mongodb://${dbConfig.HOST}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    // initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};
// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
