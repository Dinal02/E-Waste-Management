import express from 'express';
import WasteDB from '../models/WasteDB.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// public submit
router.post('/submit', async (req, res) => {
  try {
    const doc = new Waste(req.body);
    await doc.save();
    res.json({ message: 'Request submitted' });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// auth middleware
function auth(req, res, next) {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ error: 'Unauthorized' });
  const token = header.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Invalid token' });
    req.staffId = decoded.id;
    next();
  });
}

// get requests
router.get('/', auth, async (req, res) => {
  try {
    const list = await Waste.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// update status
router.put('/:id/status', auth, async (req, res) => {
  try {
    const { status } = req.body;
    await Waste.findByIdAndUpdate(req.params.id, { status });
    res.json({ message: 'Status updated' });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

export default router;