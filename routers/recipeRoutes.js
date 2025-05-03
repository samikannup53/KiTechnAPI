const express = require("express");

const {
  handleCreateRecipe,
  handleGetAllRecipes,
  handleGetRecipeByRecibeID,
  handleUpdateRecipeByRecipeID,
  handleDeleteRecipeByRecipeID,
} = require("../controllers/recipeController");

const router = express.Router();

router.post("/", handleCreateRecipe);
router.get("/", handleGetAllRecipes);
router.get("/:recipeID", handleGetRecipeByRecibeID);
router.put("/:recipeID", handleUpdateRecipeByRecipeID);
router.delete("/:recipeID", handleDeleteRecipeByRecipeID);

module.exports = router;
