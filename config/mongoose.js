const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/todolist_dev");

const db = mongoose.connection;

db.on("error", console.error.bind("error"));
db.once("open", (open) => {
  console.log(`Database is Connected`);
});
