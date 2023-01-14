//jshint esversion6

const express = require("express");
var cors = require("cors");

const connectToMongo = require("./db");
const app = express();

connectToMongo();
app.use(cors());
app.use(express.json());

//Access Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(5000, () => {
  console.log("iNotes server running at http://localhost:5000");
});
