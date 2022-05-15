import { InferType } from 'yup'
import { schema } from '../validationSchema'

export type FormValuesType = InferType<typeof schema>
