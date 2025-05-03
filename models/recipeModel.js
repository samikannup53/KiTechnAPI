const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  recipeID: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  prepTime: { type: Number },
  cookingTime: { type: Number },
  ingredients: { type: [String] },
  process: { type: [String] },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
