const db = require("../data/db-config");

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("recipes_ingredients as ri")
    .join("ingredients as i", "i.id", "ri.ingredient_id")
    .join("recipes as r", "r.id", "ri.recipe_id")
    .select("i.ingredient_name", "i.quantity")
    .where({ recipe_id });
}

function getInstructions(recipe_id) {
  return db("steps").where({ recipe_id });
}

module.exports = {
  getRecipes,
  getInstructions,
  getShoppingList
};
