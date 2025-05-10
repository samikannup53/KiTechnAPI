// Controllers for State Pages

// Home Page
const handleHome = (req, res) => {
  res.render("home");
};

// Documentation Page
const handleDocs = (req, res) => {
  res.render("docs");
};

// Exporting Controller Functions
module.exports = { handleHome, handleDocs };
