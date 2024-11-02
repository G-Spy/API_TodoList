const  express = require('express');
const app = express();
const PORT = 8080;


//import custom middleware
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");

// use middleware in the application
app.use(express.json());
app.use(cors());
app.use(helmet());

//to connect to the Routes
const todoRouter = require("./routes/todo.routes.js");
app.use("/todos", todoRouter);




// Start the application at PORT 8080
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});