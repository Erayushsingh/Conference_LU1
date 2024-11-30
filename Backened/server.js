import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import abstractRoutes from './routes/abstractRoutes.js';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js'

const app = express();

// Middleware
app.use(express.json()); 
app.use(cookieParser()) 
app.use(cors());

// Database Connection


// Routes
app.use('/api/abstracts', abstractRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes)

// Server Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
