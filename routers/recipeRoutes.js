const express = require("express");

const {
  handleCreateRecipe,
  handleGetAllRecipes,
  handleGetRecipeByRecibeID,
  handleUpdateRecipeByRecipeID,
} = require("../controllers/recipeController");

const router = express.Router();

router.post("/", handleCreateRecipe);
router.get("/", handleGetAllRecipes);
router.get("/:recipeID", handleGetRecipeByRecibeID);
router.put("/:recipeID", handleUpdateRecipeByRecipeID);

module.exports = router;
