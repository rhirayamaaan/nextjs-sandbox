import { lazy, object, string } from 'yup'

const temporarySubmitSchema = object({
  firstName: string(),
  lastName: string(),
})

const submitSchema = object({
  firstName: string()
    .required('First name is required')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed'),
  lastName: string()
    .required('Last name is required')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed'),
})

export const buildSchema = (isSubmitting: boolean) =>
  lazy(() => (isSubmitting ? submitSchema : temporarySubmitSchema))
