import express from 'express';
import { connectDB } from "./config/db.js";
import cors from 'cors';
import abstractRoutes from './routes/abstractRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

// Middleware
app.use(express.json()); 
app.use(cors());

// Database Connection
connectDB();

// Routes
app.use('/api/abstracts', abstractRoutes);
app.use('/api/auth', authRoutes);

// Server Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
