

const mongoose = require("mongoose");
//dbconnection = () => {
mongoose
  .connect("mongodb://127.0.0.1:27017/krushang")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed to connect");
  });