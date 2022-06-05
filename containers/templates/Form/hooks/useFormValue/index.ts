import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { FormValuesType } from '../../types'
import { checkI18nKey } from '../../../../../i18n/functions'

export const useFormValue = (
  fieldName: keyof FormValuesType,
  register: UseFormRegister<FormValuesType>,
  errors: FieldErrors<FormValuesType>
) => {
  const { name, onBlur, onChange, ref } = register(fieldName)
  const message = errors?.[fieldName]?.message
  const helperText = checkI18nKey(message) ? message : undefined
  const error = !!helperText

  return { name, onBlur, onChange, error, helperText, ref }
}
