import express from 'express';
import { registerUser } from '../controllers/registerController.js';

const router = express.Router();

// POST route for user registration
router.post('/', registerUser);

export default router;
