// models/Invite.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const InviteSchema = new Schema(
  {
    token: { type: String, required: true, index: true, unique: true },
    email: { type: String, required: true },
    invitedBy: { type: Schema.Types.ObjectId, ref: "User" },
    role: { type: Schema.Types.ObjectId, ref: "Role" }, // optional role on accept
    team: { type: Schema.Types.ObjectId, ref: "Team" }, // optional
    project: { type: Schema.Types.ObjectId, ref: "Project" }, // optional
    status: {
      type: String,
      enum: ["pending", "accepted", "revoked", "expired"],
      default: "pending",
    },
    expiresAt: { type: Date },
    acceptedBy: { type: Schema.Types.ObjectId, ref: "User" },
    acceptedAt: { type: Date },
  },
  { timestamps: true },
);

export default mongoose.models.Invite || mongoose.model("Invite", InviteSchema);
