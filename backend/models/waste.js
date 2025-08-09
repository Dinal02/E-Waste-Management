import mongoose from 'mongoose';

const wasteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  address: { type: String, required: true },
  wasteType: { type: String, required: true },
  quantity: { type: String },
  note: { type: String },
  images: [String],
  status: { type: String, default: 'Pending', enum: ['Pending', 'Assigned', 'Collected', 'Rejected'] },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Waste', wasteSchema);