import express from 'express';
import { signInUser } from '../controllers/authController.js'; 

const router = express.Router();


router.post('/signin', signInUser);

export default router;
