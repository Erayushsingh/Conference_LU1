import express from 'express';
import { signInUser } from '../controllers/authController.js'; // Import sign-in controller

const router = express.Router();

// POST route for user sign-in (authentication)
router.post('/signin', signInUser);

export default router;
