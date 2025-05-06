const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const visitRoute = require('./routes/visitRoute');
const cors = require('cors');

dotenv.config();  // Load environment variables

const app = express();

// Enable CORS for frontend calls
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());  // Add this line to ensure the backend can parse JSON requests

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', visitRoute);

// Ensure PORT from environment variable or fallback to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
