import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.js';
import wasteRoutes from './routes/waste.js';
import Staff from './models/Staff.js';
import bcrypt from 'bcrypt';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/waste', wasteRoutes);

// Seed route (temporary) - creates admin/admin123
app.post('/api/seed-staff', async (req, res) => {
  try {
    const existing = await Staff.findOne({ username: 'admin' });
    if (existing) return res.json({ message: 'already' });
    const hashed = await bcrypt.hash('admin123', 10);
    const s = new Staff({ username: 'admin', password: hashed });
    await s.save();
    res.json({ message: 'seeded' });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/', (req, res) => res.send('E-waste backend running'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));