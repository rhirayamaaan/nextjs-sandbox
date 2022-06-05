import { lazy, object, string } from 'yup'
import { i18nLanguageKeys } from '../../../../i18n/resources/languages/keys'

const temporarySubmitSchema = object({
  firstName: string(),
  lastName: string(),
})

const submitSchema = object({
  firstName: string()
    .required(i18nLanguageKeys.FORM_VALIDATION_REQUIRED)
    .matches(/^[aA-zZ\s]+$/, i18nLanguageKeys.FORM_VALIDATION_ALPHABET),
  lastName: string()
    .required(i18nLanguageKeys.FORM_VALIDATION_REQUIRED)
    .matches(/^[aA-zZ\s]+$/, i18nLanguageKeys.FORM_VALIDATION_ALPHABET),
})

export const buildSchema = (isTemporary: boolean) =>
  lazy(() => (!isTemporary ? submitSchema : temporarySubmitSchema))
