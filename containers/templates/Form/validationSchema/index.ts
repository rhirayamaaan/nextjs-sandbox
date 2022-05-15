import { object, string } from 'yup'

export const schema = object({
  firstName: string()
    .required('First name is required')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed'),
  lastName: string()
    .required('Last name is required')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed'),
})
