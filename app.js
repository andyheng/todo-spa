//Require
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Require: router
const todoRoutes = require("./routes/todoRoutes.js");

//Setup: bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Static
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

//Routes
app.get("/", (req, res) => {
    res.sendFile("index.html")
})

//Routes: Router
//Pass in a prefix, and then the required routes const
app.use("/api/todos", todoRoutes);

//Listen
app.listen(3000 || process.env.PORT, () => {
    console.log("App started on port 3000")
})