import express from 'express'
import {
  authenticateUser,
  getUserProfile,
  getUsers,
  registerUser,
  updateUserProfile,
} from '../controllers/userController.js'
import { admin, protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').post(registerUser)
router.route('/').get(protect, admin, getUsers)
router.post('/login', authenticateUser)
router.route('/profile').get(protect, getUserProfile)
router.route('/profile').put(protect, updateUserProfile)

export default router
