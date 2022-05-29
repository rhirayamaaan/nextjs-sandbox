import { InferType } from 'yup'
import { buildSchema } from '../validationSchema'

export type FormValuesType = InferType<ReturnType<typeof buildSchema>>
