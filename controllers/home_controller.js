const Todo = require("../models/todo");
module.exports.homeC = (req, res) => {
  Todo.find()
    .then((showtodo) => {
      console.log(showtodo);
      return res.render("Home", {
        title: "Todo List",
        todos: showtodo,
      });
    })
    .catch((error) => {
      console.error(error);
    });
};
