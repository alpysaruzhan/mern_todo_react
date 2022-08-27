const express = require("express");
const router = express.Router();

const {
  createTodo,
  readTodos,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").post(protect, createTodo).get(protect, readTodos);
router.route("/:id").put(protect, updateTodo).delete(protect, deleteTodo);

module.exports = router;
