//Require
const express = require("express");
const app = express();

//Require: router
const todoRoutes = require("./routes/todoRoutes.js");

//Routes
app.get("/", (req, res) => {
    res.send("fuck you")
})

//Routes: Router
//Pass in a prefix, and then the required routes const
app.use("api/todos", todoRoutes);


//Listen
app.listen(3000 || process.env.PORT, () => {
    console.log("App started on port 3000")
})