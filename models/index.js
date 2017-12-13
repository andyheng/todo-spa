// Mongoose dependencies go here
const mongoose = require("mongoose");

// Configuring Mongoose
mongoose.Promise = Promise; // Use the promise library with mongoose;
mongoose.connect("mongodb://localhost/todo-api", {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useMongoClient: true
  });

// Export the todoSchema as Todo so it can be used by app.js
module.exports.Todo = require("./todoSchema.js");