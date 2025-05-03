const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_ATLAS_URL);
    console.log("MongoDB Connected Successfully ...");
  } catch (error) {
    console.log("Error in DB Connection :", error.message);
  }
}

module.exports = connectDB;
