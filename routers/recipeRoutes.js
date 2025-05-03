const express = require("express");

// Importing Handler Functions From Controller
const {
  handleCreateRecipe,
  handleGetAllRecipes,
  handleGetRecipeByRecibeID,
  handleUpdateRecipeByRecipeID,
  handleDeleteRecipeByRecipeID,
} = require("../controllers/recipeController");

const router = express.Router();

// Routers & Handller Functions
router.post("/", handleCreateRecipe);
router.get("/", handleGetAllRecipes);
router.get("/:recipeID", handleGetRecipeByRecibeID);
router.put("/:recipeID", handleUpdateRecipeByRecipeID);
router.delete("/:recipeID", handleDeleteRecipeByRecipeID);

module.exports = router;
