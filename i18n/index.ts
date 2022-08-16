import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { i18nCookieKey, i18nResourceNamespaces, locales } from './constants'
import { i18nResources } from './resources'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: i18nResources,
    fallbackLng: locales.en,
    detection: {
      lookupCookie: i18nCookieKey,
      order: ['cookie', 'navigator'],
      caches: ['cookie'],
      cookieOptions: {
        maxAge: 60 * 60 * 24 * 365 * 5, // 5 years
      },
    },
    defaultNS: i18nResourceNamespaces.TRANSLATION,
    keySeparator: false,
    interpolation: {
      escapeValue: false, // not needed for react
    },
  })

export default i18n
