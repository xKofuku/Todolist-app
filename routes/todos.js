const express = require("express");
const router = express.Router();
const db = require("../models");
let helpers = require("../helpers/todos");

router.get("/").get(helpers.getTodos).post(helpers.getTodos);

router
	.route("/:todoId")
	.get(helpers.getTodo)
	.put(helpers.updateTodo)
	.delete(helpers.deleteTodo);


module.exports = router;
