import express from 'express';
import { submitAbstract, getSubmissions } from '../controllers/abstractController.js';

const router = express.Router();

// Route for submitting an abstract
router.post('/submit', submitAbstract);

// Optional route to get all submissions (can be used for admin purposes)
router.get('/submissions', getSubmissions);

export default router;
