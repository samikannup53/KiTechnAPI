// MongoDB Connection Configuration
const mongoose = require("mongoose");

// Function to Create Connection with MongoDB
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_ATLAS_URL);
    console.log("MongoDB Connected Successfully ...");
  } catch (error) {
    console.log("Error in DB Connection :", error.message);
  }
}

// Exporting MongoDB Connection Function
module.exports = connectDB;
