const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/kitechnapi");
    console.log("MongoDB Connected Successfully ...");
  } catch (error) {
    console.log("Error in DB Connection :", error.message);
  }
}

module.exports = connectDB;
