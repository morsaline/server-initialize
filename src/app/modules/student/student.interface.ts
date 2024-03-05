export type UserName = {
  firstName: string
  middleName: string
  lastName: string
}

export type LocalGuardian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}
export type Student = {
  id: string
  name: UserName
  gender: 'male' | 'female'
  dateOfBirth: string
  email: string
  contactNum: string
  localGuardian?: LocalGuardian
  profileImg?: string
  isActive: 'active' | 'inactive'
}
