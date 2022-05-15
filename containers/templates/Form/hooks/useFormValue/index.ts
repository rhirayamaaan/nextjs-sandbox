import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { FormValuesType } from '../../types'

export const useFormValue = (
  fieldName: keyof FormValuesType,
  register: UseFormRegister<FormValuesType>,
  errors: FieldErrors<FormValuesType>
) => {
  const { name, onBlur, onChange, ref } = register(fieldName)
  const helperText = errors?.[fieldName]?.message
  const error = !!helperText

  return { name, onBlur, onChange, error, helperText, ref }
}
