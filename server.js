const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
