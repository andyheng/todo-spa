const mongoose = require("mongoose");

//Creating the todo schema
const todoSchema = new mongoose.Schema({
    todoName: {
        type: String,
        required: "Field cannot be blank"
    },
    completed: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now
    }
})

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;