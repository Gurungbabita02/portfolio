import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  messages: { type: String, required: true },
  number: { type: Number, required: true },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
