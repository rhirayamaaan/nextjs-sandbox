import { i18nLanguageInterpolations } from './interpolations'
import { i18nLanguageKeys } from './keys'

export const i18nLanguageEnResource = {
  [i18nLanguageKeys.HEADER_LANGUAGE]: 'English',
  [i18nLanguageKeys.FORM_GREETING]: `Hello! {{${
    i18nLanguageInterpolations[i18nLanguageKeys.FORM_GREETING].firstName
  }}} {{${
    i18nLanguageInterpolations[i18nLanguageKeys.FORM_GREETING].lastName
  }}}!!`,
  [i18nLanguageKeys.FORM_GREETING_TEMPORARY]: 'Temporary',
  [i18nLanguageKeys.FORM_TITLE]: 'Enter your name',
  [i18nLanguageKeys.FORM_FIRST_NAME]: 'First name',
  [i18nLanguageKeys.FORM_LAST_NAME]: 'Last name',
  [i18nLanguageKeys.FORM_VALIDATION_REQUIRED]: 'This field is required',
  [i18nLanguageKeys.FORM_VALIDATION_ALPHABET]: 'Only alphabets are allowed',
  [i18nLanguageKeys.FORM_SUBMIT]: 'Register',
  [i18nLanguageKeys.FORM_TEMPORARY_SUBMIT]: 'Temporary Save',
} as const
