exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "Onion", quantity: "1" },
        { ingredient_name: "Arugula", quantity: "1 cup diced" },
        { ingredient_name: "Udon", quantity: "1 packet" },
        { ingredient_name: "Dashi", quantity: "3 tbsp" }
      ]);
    });
};
