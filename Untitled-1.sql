-- SQLite
select ingredient_name, quantity from ingredients join recipes_ingredients as ri on ingredients.id = ri.ingredient_id
join recipes as r on r.id = ri.recipe_id
where ri.recipe_id = "1"