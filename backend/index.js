//jshint esversion6

const express = require("express");

const connectToMongo = require("./db");
const app = express();

connectToMongo();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("Server is up at http://localhost:3000");
});
