//jshint esversion6

const express = require("express");

const connectToMongo = require("./db");
const app = express();

connectToMongo();
app.use(express.json());

//Access Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(5000, () => {
  console.log("Server is up at http://localhost:5000");
});
