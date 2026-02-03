// models/Admin.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const AdminSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    title: { type: String }, // e.g. "Head of Engineering"
    permissions: [{ type: Schema.Types.ObjectId, ref: "Permission" }], // explicit perms
    roles: [{ type: Schema.Types.ObjectId, ref: "Role" }],
    active: { type: Boolean, default: true },
    notes: { type: String },
  },
  { timestamps: true },
);

export default mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
