import LanguageIcon from '@mui/icons-material/Language'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { i18nLanguageKeys } from '../../../i18n/resources/languages/keys'
import { Link } from '../../helpers/Link'

import styles from './styles.module.scss'

type Props = {
  onChangeLanguage: React.MouseEventHandler
}

export const Header: React.VFC<Props> = ({ onChangeLanguage }) => {
  const { t } = useTranslation()
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <Link href="/">NEXTJS-SANDBOX</Link>
        </div>
        <div className={styles.header__language}>
          <button
            className={styles.header__languageButton}
            type="button"
            onClick={onChangeLanguage}
          >
            <span className={styles.header__languageButtonIcon}>
              <LanguageIcon />
            </span>
            <span className={styles.header__languageButtonText}>
              {t(i18nLanguageKeys.HEADER_LANGUAGE)}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
