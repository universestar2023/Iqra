import mongoose from "mongoose";

const connectDB = async () => {
  const connectionParams = {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
  };
  try {
    await mongoose.connect(process.env.ATLAS_URI, connectionParams);
    console.log("Connected to database successfully");
  } catch (error) {
    console.log(error);
    console.log("Could not connect to the database!");
  }
};

export default connectDB;
