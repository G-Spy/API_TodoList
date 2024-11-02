const router = require('express').Router();
const todoController = require("../controllers/todo.controller.js");


// get all todos
router.get('/', todoController.getTodos);

// create todo
router.post('/add', todoController.addTodo);

// get a specific todo item
router.get('/:index', todoController.getTodoAtIndex );

// edit a specific todo item
router.put('/:index' );

// delete a specific todo item
router.delete('/:index');

module.exports = router;