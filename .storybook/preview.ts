import i18n from '../i18n/index'

import 'destyle.css'
import { locales } from '../i18n/constants'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  i18n,
  locale: locales.en,
  locales: {
    [locales.en]: 'English',
    [locales.ja]: '日本語',
  },
}
