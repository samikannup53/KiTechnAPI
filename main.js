require("dotenv").config();
const connectDB = require("./config/dbConfig");
const app = require("./app");
const port = process.env.PORT|| 8000;

connectDB();

app.listen(port, () => {
  console.log(
    `App Started at Port:${port} and the URL is : http://localhost:${port}`
  );
});
