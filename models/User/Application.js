// models/Application.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const ApplicationSchema = new Schema(
  {
    appId: { type: String, unique: true, sparse: true }, // APP-id
    title: { type: String },
    subject: { type: String },
    from: { type: Schema.Types.ObjectId, ref: "User" }, // or string/email
    to: { type: Schema.Types.ObjectId, ref: "User" },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "closed"],
      default: "pending",
    },
    description: { type: String },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Application ||
  mongoose.model("Application", ApplicationSchema);
