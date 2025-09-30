require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// Health
app.get('/api/health', (req, res) => {
  const dbStatus = db && db.threadId ? 'connected' : 'initialized';
  res.json({ status: 'ok', db: dbStatus, time: new Date().toISOString() });
});

// already shown above, just make sure that  the code below is in the server.js:
//const authRoutes = require('./routes/authRoutes');
//app.use('/api', authRoutes);

// Routes
app.use('/api', authRoutes);

 const reportRoutes = require('./routes/reportRoutes');
// // Mount after auth routes:
 app.use('/api', reportRoutes);
 
const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

