import express from 'express';
import { logoutUser, registerUser , signInUser} from '../controllers/authController.js';

const router = express.Router();


router.post('/register', registerUser)
router.post('/signin', signInUser);
router.post("/logout", logoutUser)

export default router;
