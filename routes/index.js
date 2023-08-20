const express = require("express");
const router = express.Router();
const HomeController = require("../controllers/home_controller");

router.get("/", HomeController.homeC);

//using the route
router.use("/create-todo", require("./create-todo"));

router.use("/delete-todo", require("./delete-todo"));
module.exports = router;
