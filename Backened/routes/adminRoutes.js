import express from 'express';
import { adminProtect } from '../middleware/adminauth.js';
import { getAllAbstract, getAllUser } from '../controllers/adminController.js';
const router = express.Router();
router.use(adminProtect)

// Route for submitting an abstract
router.get('/allUser', getAllUser);

router.get('/allAbstract', getAllAbstract);
// Optional route to get all submissions (can be used for admin purposes)

export default router;
