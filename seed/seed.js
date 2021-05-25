const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const dummyUser = [
    {
        email: "admin@admin.com",
        password: "password",
        savedCategroies: "test"
    },
    {
      email: "test@admin.com",
      password: "password",
      savedCategroies: "test1"
  },
  {
    email: "testuser@admin.com",
    password: "testpassword",
    savedCategroies: "test3"
}
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
