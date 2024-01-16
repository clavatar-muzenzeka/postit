import { MONGODB_URI } from "@/config/global";
import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "post-it",
    });

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
