const express = require("express");

const hobbits = require("./hobbitsModel");

const router = express.Router();

//get all hobbits
router.get("/", (req, res) => {
  hobbits
    .find()
    .then((hobbits) => res.status(200).json(hobbits))
    .catch((err) =>
      res
        .status(500)
        .json({ error: "The hobbits information could not be retrieved." })
    );
});

// get a hobbit by id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  hobbits
    .findById(id)
    .then((hobbit) => {
      if (hobbit) {
        res.json(hobbit);
      } else {
        res
          .status(404)
          .json({ message: "Could not find the hobbit with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get hobbit" });
    });
});

// add a hobbit
router.post("/", (req, res) => {
  const newHobbit = req.body;
  //console.log(newCar);
  hobbits
    .insert(newHobbit)
    .then((result) => res.status(201).json(result))
    .catch((err) =>
      res.status(400).json({
        errorMessage: "Please provide a name for hobbit",
      })
    );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  hobbits
    .findById(id)
    .then((hobbit) => {
      if (hobbit) {
        hobbits.update(changes, id).then((updatedHobbit) => {
          res.json({ updated: updatedHobbit });
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find the hobbit with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update hobbit" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  hobbits
    .remove(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find hobbit with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete hobbit" });
    });
});

module.exports = router;
