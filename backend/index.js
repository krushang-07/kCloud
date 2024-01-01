const express = require("express");
const app = express();
require('./db');
//dbconnection()

app.get("/", (req, res) => {
  res.send("hello krushang");
});

app.listen(5000, () => {
  console.log("port connected");
});
