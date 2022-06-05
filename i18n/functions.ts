import { ValueOf } from '../types'
import { locales } from './constants'
import { i18nLanguageKeys } from './resources/languages/keys'

export const checkI18nKey = (
  key?: string
): key is ValueOf<typeof i18nLanguageKeys> =>
  key ? Object.values(i18nLanguageKeys).some((value) => value === key) : false

export const toLocale = (locale?: string) => {
  if (locale === locales.en) {
    return locales.en
  }

  if (locale === locales.ja) {
    return locales.ja
  }

  return locales.en
}

export const switchLocale = (locale: ValueOf<typeof locales>) => {
  if (locale === locales.en) {
    return locales.ja
  }

  if (locale === locales.ja) {
    return locales.en
  }

  return locales.en
}
