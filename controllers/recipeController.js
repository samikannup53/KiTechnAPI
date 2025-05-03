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
    if (recipes.length !== 0) {
      res.json({ message: "Found All Recipes", recipes });
    } else {
      res.json({ message: "No Recipes Found" });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
}

// Get Single Recipe by it's RecipeID
async function handleGetRecipeByRecibeID(req, res) {
  try {
    const recipeID = req.params.recipeID;
    const recipe = await Recipe.findOne({ recipeID });
    if (recipe) {
      res.json({
        message: `Recipe Found for given RecipeID : ${recipeID}`,
        recipe,
      });
    } else {
      res.json({
        message: `Recipe Not Found for given RecipeID : ${recipeID}`,
      });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
}

// Update Single Recipe by it's RecipeID
async function handleUpdateRecipeByRecipeID(req, res) {
  try {
    const recipeID = req.params.recipeID;
    const updatedData = req.body;
    const updatedRecipe = await Recipe.findOneAndUpdate(
      { recipeID },
      updatedData,
      { runValidators: true, new: true }
    );
    if (updatedRecipe) {
      res.json({
        message: `Recipe details Updated for given RecipeID : ${recipeID}`,
        updatedRecipe,
      });
    } else {
      res.json({
        message: `Recipe Not Found for given RecipeID : ${recipeID}`,
      });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
}

// Delete Single Recipe by it's RecipeID
async function handleDeleteRecipeByRecipeID(req, res) {
  try {
    const recipeID = req.params.recipeID;
    const deletedRecipe = await Recipe.findOneAndDelete({ recipeID });
    if (deletedRecipe) {
      res.json({
        message: `Recipe Deleted for given RecipeID : ${recipeID}`,
        deletedRecipe,
      });
    } else {
      res.json({
        message: `Recipe Not Found for given RecipeID : ${recipeID}`,
      });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
}

module.exports = {
  handleCreateRecipe,
  handleGetAllRecipes,
  handleGetRecipeByRecibeID,
  handleUpdateRecipeByRecipeID,
  handleDeleteRecipeByRecipeID,
};
