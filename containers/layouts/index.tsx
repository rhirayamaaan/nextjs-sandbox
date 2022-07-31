import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Layout } from '@/components/layouts'
import { switchLocale, toLocale } from '@/i18n/functions'

type Props = {
  children: React.ReactNode
}

export const LayoutContainer: React.VFC<Props> = ({ children }) => {
  const { i18n } = useTranslation()

  const onChangeLanguage = useCallback<React.MouseEventHandler>(() => {
    const nextLocale = switchLocale(toLocale(i18n.language))
    i18n.changeLanguage(nextLocale)
  }, [i18n])

  return <Layout header={{ onChangeLanguage }}>{children}</Layout>
}
