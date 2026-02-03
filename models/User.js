// models/User.js
import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema(
  {
    street: String,
    city: String,
    state: String,
    country: String,
    zip: String,
  },
  { _id: false },
);

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },

    department: String,
    photo: String,

    address: AddressSchema,

    links: {
      github: String,
      linkedin: String,
      leetcode: String,
    },

    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
    applications: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Application" },
    ],

    role: { type: String, default: "user" },
  },
  { timestamps: true },
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
