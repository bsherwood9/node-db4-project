exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        { recipe_id: 1, description: "Buy an onion" },
        { recipe_id: 1, description: "Boil that onion" },
        { recipe_id: 1, description: "Eat boiled onion with arugula" },
        { recipe_id: 2, description: "Deep fat fry onion" },
        { recipe_id: 3, description: "Cook udon noodles" },
        { recipe_id: 3, description: "Create and simmer dashi broth" },
        { recipe_id: 3, description: "Mix dashi with udon" }
      ]);
    });
};
