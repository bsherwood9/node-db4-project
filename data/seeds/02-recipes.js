exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "Johnny's Cooked Onions" },
        { recipe_name: "Soggy Onion" },
        { recipe_name: "Spicy Udon Noodle Soup" }
      ]);
    });
};
