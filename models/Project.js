import mongoose from "mongoose";
const { Schema } = mongoose;

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    // 👇 link tasks to project
    tasks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Task",
      },
    ],

    status: {
      type: String,
      enum: ["active", "completed", "archived"],
      default: "active",
    },
  },
  { timestamps: true },
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
