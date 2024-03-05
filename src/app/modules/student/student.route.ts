import express from 'express'
import { StudentControllers } from './student.controller'

const router = express.Router()

// will call controller file
router.post('/create-student', StudentControllers.createStudent)
router.get('/', StudentControllers.getStudents)
router.get('/:studentId', StudentControllers.getSingleStudent)

export const studentRoutes = router
