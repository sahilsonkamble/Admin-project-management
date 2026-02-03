// models/Role.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const RoleSchema = new Schema(
  {
    name: { type: String, required: true, unique: true }, // e.g. "project_manager"
    displayName: { type: String },
    description: { type: String },
    permissions: [{ type: Schema.Types.ObjectId, ref: "Permission" }],
    defaultForNewUsers: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.models.Role || mongoose.model("Role", RoleSchema);
