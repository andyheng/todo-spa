// Mongoose dependencies go here
const mongoose = require("mongoose");

// Configuring Mongoose
mongoose.connect("mongodb://localhost/todo-api");
mongoose.Promise = Promise; // Use the promise library with mongoose;

// Export the todoSchema as Todo so it can be used by app.js
module.exports.Todo = require("./todoSchema.js");