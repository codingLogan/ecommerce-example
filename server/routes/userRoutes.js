import express from 'express'
import {
  authenticateUser,
  deleteUser,
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
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
router.route('/:id').delete(protect, admin, deleteUser)

export default router
