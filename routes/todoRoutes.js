const express = require("express");
const router = express.Router();
const db = require("../models");
// Requires the models folder which has our database configuation along with the schema. When we require the folder, express looks for an index.js file automatically.
// In our db's index.js file, we've exported the Todo model under module.exports, which means we now have access to the model in our routes.

//Routes

//Get all
router.get("/", (req, res) => {
    db.Todo.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
        })
})

//Create
router.post("/", (req, res) => {
    db.Todo.create({
        item: req.body
    })
      .then(created => {
        res.json(created);
      })
      .catch(err => {
        console.log(err);
      })
})

//Show One
router.get("/:id", (req, res) => {
  db.Todo.findById(req.params.id)
    .then(found => {
      res.json(found);
    })
    .catch(err => {
      console.log(err);
    })
})

router.put("/:id", (req, res) => {
  db.Todo.findByIdAndUpdate(req.params.id, {
    item: req.body
  }, {new: true})
    .then(updated => {
      res.json(updated)
    })
    .catch(err => {
      console.log(err);
    })
})

router.delete("/:id", (req, res) => {
  db.Todo.findByIdAndRemove(req.params.id)
    .then(deleted => {
      console.log(deleted);
    })
    .catch(err => {
      console.log(err);
    })
})

module.exports = router;