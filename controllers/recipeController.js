const Recipe = require("../models/recipeModel");

// Create a new Recipe
async function handleCreateRecipe(req, res) {
  try {
    const recipe = await Recipe.create(req.body);
    res.json({ message: "New Recipe Created Successfully", recipe });
  } catch (error) {
    res.json({ error: error.message });
  }
}

// Get All Recipes
async function handleGetAllRecipes(req, res) {
  try {
    const recipes = await Recipe.find();
    res.json({ recipes });
  } catch (error) {
    res.json({ error: error.message });
  }
}

module.exports = { handleCreateRecipe, handleGetAllRecipes };
