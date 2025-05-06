const express = require('express');
const router = express.Router();
const Visit = require('./Visit');

// No extra "/visits" here — it's already included in server.js
router.get('/', async (req, res) => {
  try {
    const visit = await Visit.findOneAndUpdate(
      {},
      { $inc: { count: 1 } },
      { upsert: true, new: true }
    );
    res.json({ count: visit.count });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
