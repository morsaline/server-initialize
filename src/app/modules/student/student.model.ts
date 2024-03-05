import { Schema, model, connect } from 'mongoose'
import { Student, UserName } from './student.interface'

const userSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
})

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userSchema,
  gender: ['male', 'female'],

  dateOfBirth: String,
  email: {
    type: String,
    required: true,
  },

  contactNum: {
    type: String,
    required: true,
  },
  isActive: ['active', 'inactive'],
})

export const StudentMOdel = model<Student>('Student', studentSchema)
