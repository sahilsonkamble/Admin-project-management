// models/Permission.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const PermissionSchema = new Schema(
  {
    code: { type: String, required: true, unique: true }, // e.g. "projects.create"
    name: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true },
);

export default mongoose.models.Permission ||
  mongoose.model("Permission", PermissionSchema);
