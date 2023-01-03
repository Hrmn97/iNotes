//jshint esversion6

const mongoose = require("mongoose");

const connectToMongo = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect("mongodb://localhost:27017/inotes", {
      useNewUrlParser: true,
    })

    .then(() => {
      console.log("connection successful");
    })
    .catch((err) => console.log(err));
};

module.exports = connectToMongo;
