const express = require("express");
const { handleCreateRecipe } = require("../controllers/recipeController");
const router = express.Router();

router.post("/", handleCreateRecipe);

module.exports = router;
