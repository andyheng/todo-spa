const express = require("express");
const router = express.Router();
const db = require("../models"); 
// Requires the models folder which has our database configuation along with the schema. When we require the folder, express looks for an index.js file automatically.
// In our db's index.js file, we've exported the Todo model under module.exports, which means we now have access to the model in our routes.

//Routes
router.get("/", (req, res) => {
    db.Todo.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
        })
})

module.exports = router;