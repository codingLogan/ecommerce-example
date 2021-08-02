import express from 'express'
import { authenticateUser } from '../controllers/userController.js'
const router = express.Router()

router.post('/login', authenticateUser)

export default router
