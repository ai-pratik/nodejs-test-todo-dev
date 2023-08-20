const mongoose = require("mongoose");
//Schema is imported for mongoose

const todoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

//converted into the model that can work
const todo = mongoose.model("Todo", todoSchema);

module.exports = todo;
