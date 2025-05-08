const express = require("express");
const app = express();
const path = require("path");

// Importing Routes
const staticRoutes = require("./routers/staticRoutes");
const recipeRoutes = require("./routers/recipeRoutes");

// Importing Middlewares
const jsonParser = require("./middlewares/inbuilt/jsonParser");
const handleInvalidRoutes = require("./middlewares/custom/error404");

// Using Middlewares
app.use(jsonParser);
app.use(express.static(path.join(__dirname, "public")));

// Configuring View Engines
app.set("view engine", "ejs");
app.set("views", "views");

// Registr Routers
app.use("/", staticRoutes);
app.use("/recipes", recipeRoutes);

// Middleware for 404 Error (Invalid Router)
app.use(handleInvalidRoutes);

module.exports = app;
