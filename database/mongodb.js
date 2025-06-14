import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env";

// Check if DB_URI is defined
if (!DB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.<development/production>.local'
  );
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`✅ Connected to MongoDB in ${NODE_ENV} mode`);
  } catch (error) {
    console.error("❌ Error connecting to database:", error);
    process.exit(1); // ❗️ This is the correct function to stop the app
  }
};

export default connectToDatabase;
