import express from 'express';
import Staff from '/models/Staff.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

// register (optional - use seed route or remove in production)
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const existing = await Staff.findOne({ username });
    if (existing) return res.status(400).json({ error: 'Already exists' });
    const hashed = await bcrypt.hash(password, 10);
    const staff = new Staff({ username, password: hashed });
    await staff.save();
    res.json({ message: 'ok' });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const staff = await Staff.findOne({ username });
    if (!staff) return res.status(401).json({ error: 'Invalid credentials' });
    const valid = await bcrypt.compare(password, staff.password);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });
    const token = jwt.sign({ id: staff._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

export default router;