const express = require("express");
const router = express.Router();
const CreateTodo = require("../controllers/createTodo_controller");

//post routing is here
router.post("/", CreateTodo.createTodo);

module.exports = router;
