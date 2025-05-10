// Importing Mongoose ORM
const mongoose = require("mongoose");

// Schema for Recipe Model
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

// Model Creation
const Recipe = mongoose.model("Recipe", recipeSchema);

// Model Export
module.exports = Recipe;
