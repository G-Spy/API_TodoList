const router = require('express').Router();
const todoController = require("../controllers/todo.controller.js");
const {updateTodoAtIndex} = require("../controllers/todo.controller");


// get all todos
router.get('/', todoController.getTodos);

// create todo
router.post('/add', todoController.addTodo);

// get a specific todo item
router.get('/:index', todoController.getTodoAtIndex );

// edit a specific todo item
router.put('/:index', todoController.updateTodoAtIndex );

// delete a specific todo item
router.delete('/:index', todoController.deleteTodo);

module.exports = router;