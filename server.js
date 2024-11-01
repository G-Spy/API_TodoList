const  express = require('express');
const app = express();
const PORT = 8080;


//custom middleware
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());
app.use(helmet());


app.get("/", (req, res) => {
    console.log("Her");
    res.status(200).json({message: "Hello"});
});


app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});