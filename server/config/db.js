
import mongoose from "mongoose";

// MongoDB database connection function
const connectDB = async () => {
  try {
    // Connect to MongoDB Atlas
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);

    // Stop application if database connection fails
    process.exit(1);
  }
};

export default connectDB;
