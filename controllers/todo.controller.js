const todos = [];


//get all todos
const getTodos = (req, res) => {
    res.status(200).json(todos);
};

// create todo
const addTodo = (req, res) => {
    const {todo} = req.body; // we use {keyword} because we want to take only the value of the mention keyword not all value mentioned in body
    if (!todo) {
        res.status(400).json({error: "missing todo"});
    } else {
        todos.push(todo);
        res.status(200).json(todos);
    }

};


// get a specific todo item
const getTodoAtIndex = (req, res) =>{
    const {index} = req.params; // take the value as string

    const position = parseInt(index); //casting:  then convert to integer
    console.log(typeof index,position); //print the value

    if (isNaN(position) || position < 0 || position >= todos.length) {
        res.status(400).json({error: "invalid position"}); // condition for checking the input value

    }   else{
        res.status(200).json({ todo: todos[position]}); // key=todo
    }
};

// edit/update a specific todo item
const updateTodoAtIndex = (req, res) => {
    const {index} = req.params;
    const {todo} = req.body;

    const position = parseInt(index);
    console.log(typeof index,position);

    if (isNaN(position) || position < 0 || position >= todos.length) {
        res.status(400).json({error: "index should be a correct number"});
    }   else if (!todo){
        res.status(400).json({error: "missing todo"});
    }   else {
        todos[position] = todo;
        res.status(200).json(todos);
    }
}


// delete a specific todo item
const deleteTodo = (req, res) => {
    const {index} = req.params;


    const position = parseInt(index);
    console.log(typeof index,position);

    if (isNaN(position) || position < 0 || position >= todos.length) {
        res.status(400).json({error: "index should be a correct number"});
    }   else if (todos.length === 0){
        res.status(400).json({error: "cannot remove from empty array"});
    }   else {
        todos.splice(position,1); //splice is used to remove, replace or insert items starting at a chosen index
        res.status(200).json(todos);
    }
};




module.exports = {
    getTodos,
    addTodo,
    getTodoAtIndex,
    updateTodoAtIndex,
    deleteTodo,






};




