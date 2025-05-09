import express from 'express';
import { getAllUsers } from '../controllers/userController';
import { protect, isAdmin } from '../middlewares/authMiddleware';

const router = express.Router();
router.get('/', protect, isAdmin, getAllUsers);

export default router;
