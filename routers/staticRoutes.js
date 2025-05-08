const express = require("express");
const router = express.Router();
const { handleHome, handleDocs } = require("../controllers/staticController");

router.get("/", handleHome);
router.get("/docs", handleDocs);

module.exports = router;
