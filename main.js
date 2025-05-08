// Importing Necessary Files and Modules
require("dotenv").config(); // To get env variable from .env file
const connectDB = require("./config/dbConfig"); // DB Connection Function form dbConfig file
const app = require("./app");
const port = process.env.PORT || 8000;

// Connecting Application with Database (MongoDB)
connectDB();

// Server Listener
app.listen(port, () => {
  console.log(
    `App Started at Port:${port} and the URL is : http://localhost:${port}`
  );
});
