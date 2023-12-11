import mongoose, { model } from "mongoose";
import { IUser } from "../interfaces/user.interface";
const { Schema } = mongoose;

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  age: {
    type: Number,
    required: [true, "Please give your age"],
  },
  email: {
    type: String,
    required: [true, "Please give your email"],
    unique: true,
    lowercase: true,
  },
  photo: String,
  role: {
    type: String,
    enum: {
      values: ["user", "admin"],
      message: "Role is either: User or Admin. Your role is {VALUE}",
    },
    default: "user",
    required: true,
  },
  userStatus: {
    type: String,
    enum: {
      values: ["active", "inactive"],
      message: "You are currently {VALUE}",
    },
    default: "active",
  },
});

const User = model<IUser>("user", userSchema);

export default User;
