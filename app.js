const express = require("express");
const app = express();
const homeRoutes = require("./routers/homeRoutes");

// Routes
app.use("/", homeRoutes);

module.exports = app;
