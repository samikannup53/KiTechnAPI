// Middlware to Handle 404 Not Found Errors
function handleInvalidRoutes(req, res, next) {
  res.status(404).json({
    error: "The requested route does not exist. Please check the URL.",
  });
}

module.exports = handleInvalidRoutes;
