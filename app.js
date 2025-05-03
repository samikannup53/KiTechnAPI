const express = require("express");
const app = express();

// Importing Routes
const homeRoutes = require("./routers/homeRoutes");
const recipeRoutes = require("./routers/recipeRoutes");

// Importing Middlewares
const jsonParser = require("./middlewares/inbuilt/jsonParser");
const handleInvalidRoutes = require("./middlewares/custom/error404");

// Using Middlewares
app.use(jsonParser);

// Registr Routers
app.use("/", homeRoutes);
app.use("/recipes", recipeRoutes);

// Middleware for 404 Error (Invalid Router)
app.use(handleInvalidRoutes);

module.exports = app;
