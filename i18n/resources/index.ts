import { i18nResourceNamespaces, locales } from '../constants'
import { i18nLanguageEnResource } from './languages/en'
import { i18nLanguageJaResource } from './languages/ja'

export const i18nResources = {
  [locales.en]: {
    [i18nResourceNamespaces.TRANSLATION]: i18nLanguageEnResource,
  },
  [locales.ja]: {
    [i18nResourceNamespaces.TRANSLATION]: i18nLanguageJaResource,
  },
} as const
