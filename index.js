const express = require("express");
//Created The Express Server
const app = express();
const port = 8500;
//app.use(express.urlencoded());
//setting ejs view engine
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DB config
const todoDb = require("./config/mongoose.js");

//model call
const todo = require("./models/todo.js");

//use Express Router
app.use("/", require("./routes"));

app.use(express.static("./assets"));

//Server Created Succesfully
app.listen(port, function (err) {
  if (err) {
    return console.log(err);
  }

  return console.log(`Server Created Succesfully at ${port}`);
});
