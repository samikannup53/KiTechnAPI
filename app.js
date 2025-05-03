const express = require("express");
const app = express();

// Importing Routes
const homeRoutes = require("./routers/homeRoutes");
const recipeRoutes = require("./routers/recipeRoutes");

// Importing Middlewares
const jsonParser = require("./middlewares/inbuilt/jsonParser");

// Using Middlewares
app.use(jsonParser);

// Registr Routers
app.use("/", homeRoutes);
app.use("/recipe", recipeRoutes);

module.exports = app;
