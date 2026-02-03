// models/LeaveRequest.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const LeaveRequestSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    type: {
      type: String,
      enum: ["casual", "sick", "unpaid", "other"],
      default: "casual",
    },
    reason: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    days: { type: Number, required: true }, // convenience
    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "cancelled"],
      default: "pending",
    },
    requestedAt: { type: Date, default: Date.now },
    reviewedBy: { type: Schema.Types.ObjectId, ref: "User" }, // admin who reviewed
    reviewedAt: { type: Date },
    reviewComment: { type: String },
  },
  { timestamps: true },
);

LeaveRequestSchema.index({ user: 1, status: 1 });

export default mongoose.models.LeaveRequest ||
  mongoose.model("LeaveRequest", LeaveRequestSchema);
