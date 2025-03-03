import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/jobdetails", {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log('MongoDB (local) connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};


export default connectDB;
