import { i18nLanguageInterpolations } from './interpolations'
import { i18nLanguageKeys } from './keys'

export const i18nLanguageJaResource = {
  [i18nLanguageKeys.HEADER_LANGUAGE]: '日本語',
  [i18nLanguageKeys.FORM_GREETING]: `こんにちは！{{${
    i18nLanguageInterpolations[i18nLanguageKeys.FORM_GREETING].firstName
  }}} {{${
    i18nLanguageInterpolations[i18nLanguageKeys.FORM_GREETING].lastName
  }}}さん！！`,
  [i18nLanguageKeys.FORM_GREETING_TEMPORARY]: '下書き',
  [i18nLanguageKeys.FORM_TITLE]: '名前を入力してください',
  [i18nLanguageKeys.FORM_FIRST_NAME]: '名',
  [i18nLanguageKeys.FORM_LAST_NAME]: '姓',
  [i18nLanguageKeys.FORM_VALIDATION_REQUIRED]: '必須項目です',
  [i18nLanguageKeys.FORM_VALIDATION_ALPHABET]:
    'アルファベットで入力してください',
  [i18nLanguageKeys.FORM_SUBMIT]: '登録',
  [i18nLanguageKeys.FORM_TEMPORARY_SUBMIT]: '下書き保存',
} as const
