const todo = require("../models/todo");

module.exports.createTodo = (req, res) => {
    todo
      .create(req.body)
      .then((newtodo) => {
        console.log("*********", newtodo);
        return res.redirect("back");
      })
      .catch((error) => {
        console.log(`Error Produced ${error}`);
      });
  };

