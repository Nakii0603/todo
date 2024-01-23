import mongoose from "mongoose";

const UserScheme = new mongoose.Schema({
  username: String,
  password: String,
  avatarImage: String,
});

const UserModel = mongoose.model("User", UserScheme);
export { UserScheme };