import 'react-i18next'
import { i18nResourceNamespaces } from '../i18n/constants'
import { i18nResources } from '../i18n/resources'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof i18nResourceNamespaces.TRANSLATION
    // custom resources type
    resources: {
      [i18nResourceNamespaces.TRANSLATION]: typeof i18nResources.en.translation
    }
  }
}
