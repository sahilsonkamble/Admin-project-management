// models/User.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const AddressSchema = new Schema(
  {
    houseNo: { type: String },
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String }, // pin/zip
    country: { type: String },
  },
  { _id: false },
);

const UserSchema = new Schema(
  {
    empId: { type: String, unique: true, sparse: true }, // "Emp-Id"
    name: {
      first: { type: String },
      last: { type: String },
    },
    email: { type: String, required: true, unique: true, index: true },
    mobile: { type: String },
    position: { type: String },
    gender: { type: String, enum: ["M", "F", "O"], default: "O" },
    dob: { type: Date },
    summary: { type: String }, // short bio/summary
    role: { type: String, enum: ["user", "manager", "admin"], default: "user" },
    address: AddressSchema,
    // convenience relations (optional denormalization)
    teams: [{ type: Schema.Types.ObjectId, ref: "Team" }],
    projects: [{ type: Schema.Types.ObjectId, ref: "Project" }],
  },
  {
    timestamps: true,
  },
);

// virtual for full name
UserSchema.virtual("name.full").get(function () {
  if (!this.name) return "";
  return `${this.name.first || ""} ${this.name.last || ""}`.trim();
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
