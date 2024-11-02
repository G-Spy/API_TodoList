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

// edit a specific todo item


// delete a specific todo item


module.exports = {
    getTodos,
    addTodo,
    getTodoAtIndex,






};




