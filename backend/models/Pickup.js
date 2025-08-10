import mongoose from "mongoose";

const pickupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  status: { type: String, enum: ["pending", "completed"], default: "pending" }
}, { timestamps: true });

export default mongoose.model("Pickup", pickupSchema);
