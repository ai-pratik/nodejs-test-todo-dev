const express = require("express");
const router = express.Router();
const DeleteTodo = require("../controllers/deleteTodo_controller");

router.post("/", DeleteTodo.deleteTodo);

module.exports = router;
