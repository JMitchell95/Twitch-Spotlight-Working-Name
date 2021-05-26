  
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/spotlight_db");

const dummyUser = [
    {
        username: "admin",
        email: "admin@admin.com",
        password: "password",
        
    },

];


db.User.remove({})
  .then(() => db.User.collection.insertMany(dummyUser))
  .then(data => {
    console.log(data.result.n + "Dummy Users Created");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });