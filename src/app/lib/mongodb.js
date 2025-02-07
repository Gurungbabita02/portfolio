import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_URI = "mongodb://135.181.160.154:27017";
if (!MONGODB_URI) throw new Error("Missing MONGODB_URI");


const connectDB=async()=> {
  try{

   await mongoose
      .connect(MONGODB_URI)
      .then(() => console.log(" MongoDB Connected"))
      .catch((err) => console.error(" MongoDB Connection Error:", err));
  }catch (err){
    console.log(err,"error while connecting DB")
    process.exit(1);
  }
}

export default connectDB;
