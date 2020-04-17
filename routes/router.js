const express = require("express");

const Recipes = require("../recipes/recipes-model");

const router = express.Router();

router.get("/recipes", (req, res) => {
  Recipes.getRecipes()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get data" });
    });
});

router.get("/recipes/:id", (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res
          .status(404)
          .json({ message: "Could not find recipe with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get recipe" });
    });
});

router.get("/recipes/:id/instructions", (req, res) => {
  const { id } = req.params;

  Recipes.getInstructions(id)
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res
          .status(404)
          .json({ message: "Could not find directions for given recipe" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get directions" });
    });
});

module.exports = router;
