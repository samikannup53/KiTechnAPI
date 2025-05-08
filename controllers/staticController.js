const handleHome = (req, res) => {
  res.render("home");
};

const handleDocs = (req, res) => {
  res.render("docs");
};

module.exports = { handleHome, handleDocs };
