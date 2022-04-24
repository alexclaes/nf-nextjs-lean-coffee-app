import mongoose from "mongoose";

const { MONGODB_URL } = process.env;

export const dbConnect = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    onsole.error("ERROR: could not connect.", error.message);
  }
};
