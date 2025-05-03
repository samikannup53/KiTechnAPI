const express = require("express");
const {
  handleCreateRecipe,
  handleGetAllRecipes,
} = require("../controllers/recipeController");
const router = express.Router();

router.post("/", handleCreateRecipe);
router.get("/", handleGetAllRecipes);

module.exports = router;
