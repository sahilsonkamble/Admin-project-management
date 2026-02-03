// models/Team.js
import mongoose from "mongoose";
const { Schema } = mongoose;

// store per-member role inside team
const TeamMemberSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    role: { type: String }, // e.g. "developer", "qa", "owner"
    joinedAt: { type: Date, default: Date.now },
  },
  { _id: false },
);

const TeamSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    members: [TeamMemberSchema],
    // team head / lead
    head: { type: Schema.Types.ObjectId, ref: "User" },
    projects: [{ type: Schema.Types.ObjectId, ref: "Project" }],
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Team || mongoose.model("Team", TeamSchema);
