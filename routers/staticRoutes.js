const express = require("express");
const router = express.Router();

// Importing Handler Functions From Controller
const { handleHome, handleDocs } = require("../controllers/staticController");

// Register Routers with Handller Functions
router.get("/", handleHome);
router.get("/docs", handleDocs);

module.exports = router;
