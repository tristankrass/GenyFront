export interface IPerson {
  id: string,
  firstName: string,
  lastName: string,
  middleName: null | string,
  dateOfBirth: Date,
  placeOfBirth: null | string,
  idCode: null | string,
  sex: number,
  appUserId: string
}