import React, { ComponentProps } from 'react'
import { Header } from '../modules/Header'

import styles from './styles.module.scss'

type Props = {
  header: ComponentProps<typeof Header>
  children: React.ReactNode
}

export const Layout: React.VFC<Props> = ({ header, children }) => (
  <div className={styles.layout}>
    <div className={styles.layout__header}>
      <Header onChangeLanguage={header.onChangeLanguage} />
    </div>
    <main className={styles.layout__main}>{children}</main>
  </div>
)
