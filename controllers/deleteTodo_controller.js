const todo = require("../models/todo");

module.exports.deleteTodo = (req, res) => {
  let selectedIds = req.body.ids;
  todo
    .deleteMany({ _id: { $in: selectedIds } })
    .then((success) => {
      console.log("Deleted successfully", success);
      // Reload the page after successful deletion
      return res.redirect("back");
    })
    .catch((err) => {
      console.log("Error:", err);
    });
};
