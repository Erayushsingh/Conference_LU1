import express from 'express';
import { connectDB } from "./config/db.js";
import cors from 'cors';
import registerRoute from './routes/registerRoute.js';
import abstractRoutes from './routes/abstractRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

// Middleware
app.use(express.json());  // Express's built-in JSON parser (no need for body-parser)
app.use(cors());

// Database Connection
connectDB();

// Routes
app.use('/register', registerRoute);
app.use('/api/abstracts', abstractRoutes);
app.use('/api/auth', authRoutes);

// Server Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
