import { Student } from './student.interface'
import { StudentMOdel } from './student.model'

const createStudentToDb = async (student: Student) => {
  const result = await StudentMOdel.create(student)
  return result
}

const getAllStudentToDb = async () => {
  const result = await StudentMOdel.find()
  return result
}
const getSingleStudentToDb = async (id: string) => {
  const result = await StudentMOdel.findOne({ id })
  return result
}

export const StudentServices = {
  createStudentToDb,
  getAllStudentToDb,
  getSingleStudentToDb,
}
