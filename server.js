const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const drawingRoutes = require('./routes/drawings');
const { protect } = require('./middleware/auth');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/drawings', protect, drawingRoutes);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/drawing-app', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});