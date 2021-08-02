import express from 'express'
import {
  authenticateUser,
  getUserProfile,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.post('/login', authenticateUser)
router.route('/profile').get(protect, getUserProfile)

export default router
