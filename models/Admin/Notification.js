// models/Notification.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const NotificationSchema = new Schema(
  {
    to: { type: Schema.Types.ObjectId, ref: "User", required: true },
    from: { type: Schema.Types.ObjectId, ref: "User" }, // optional
    type: { type: String, required: true }, // e.g. "leave.request", "task.assigned"
    title: { type: String },
    message: { type: String },
    link: { type: String }, // URL / route in front-end
    seen: { type: Boolean, default: false },
    readAt: { type: Date },
    meta: { type: Schema.Types.Mixed },
  },
  { timestamps: true },
);

NotificationSchema.index({ to: 1, seen: 1 });

export default mongoose.models.Notification ||
  mongoose.model("Notification", NotificationSchema);
