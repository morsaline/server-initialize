import { Request, Response } from 'express'
import { StudentServices } from './student.service'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body

    // will call service function to send this data

    const result = await StudentServices.createStudentToDb(studentData)
    // send Response

    res.status(200).json({
      success: true,
      message: 'student created successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

const getStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentToDb()
    res.status(200).json({
      success: true,
      message: 'students get successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    const result = await StudentServices.getSingleStudentToDb(studentId)
    res.status(200).json({
      success: true,
      message: 'students get one successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

export const StudentControllers = {
  createStudent,
  getStudents,
  getSingleStudent,
}
