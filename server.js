const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const visitRoute = require('./visitRoute');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors()); // enable CORS for frontend calls

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// Routes
app.use('/api', visitRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
