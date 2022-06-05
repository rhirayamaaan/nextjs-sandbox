import { Button, TextField } from '@mui/material'

import React, { ComponentProps } from 'react'
import { useTranslation } from 'react-i18next'
import { i18nLanguageKeys as i18nKeys } from '../../../i18n/resources/languages/keys'
import { i18nLanguageInterpolations as i18nInterpolations } from '../../../i18n/resources/languages/interpolations'

import styles from './styles.module.scss'
import { ValueOf } from '../../../types'

type InputFieldProps = Pick<
  ComponentProps<typeof TextField>,
  'name' | 'onBlur' | 'onChange' | 'error' | 'disabled' | 'ref'
> & {
  helperText?: ValueOf<typeof i18nKeys>
}

type Props = {
  onSubmit: React.FormEventHandler
  firstName: InputFieldProps
  lastName: InputFieldProps
  resultName?: {
    firstName?: string
    lastName?: string
    isTemporary: boolean
  }
  onSave?: React.MouseEventHandler
  onTemporarySave?: React.MouseEventHandler
}

export const Form: React.VFC<Props> = ({
  onSubmit,
  firstName: { helperText: firstNameHelperText, ...firstName },
  lastName: { helperText: lastNameHelperText, ...lastName },
  resultName,
  onSave,
  onTemporarySave,
}) => {
  const { t } = useTranslation()

  const resultNameInterporation = {
    [i18nInterpolations[i18nKeys.FORM_GREETING].firstName]:
      resultName?.firstName,
    [i18nInterpolations[i18nKeys.FORM_GREETING].lastName]: resultName?.lastName,
  }

  return (
    <div className={styles.form}>
      {resultName && (
        <div className={styles.form__result}>
          <p>
            {t(i18nKeys.FORM_GREETING, resultNameInterporation)}
            {resultName.isTemporary && t(i18nKeys.FORM_GREETING_TEMPORARY)}
          </p>
        </div>
      )}
      <div className={styles.form__main}>
        <form onSubmit={onSubmit} action="*">
          <div className={styles.form__mainHeading}>
            <h2 className={styles.form__heading}>{t(i18nKeys.FORM_TITLE)}</h2>
          </div>
          <div className={styles.form__mainBody}>
            <ul className={styles.form__name}>
              <li className={styles.form__nameItem}>
                <TextField
                  label={t(i18nKeys.FORM_FIRST_NAME)}
                  {...firstName}
                  helperText={firstNameHelperText && t(firstNameHelperText)}
                />
              </li>
              <li className={styles.form__nameItem}>
                <TextField
                  label={t(i18nKeys.FORM_LAST_NAME)}
                  {...lastName}
                  helperText={lastNameHelperText && t(lastNameHelperText)}
                />
              </li>
            </ul>
          </div>
          <div className={styles.form__mainFooter}>
            <div className={styles.form__submit}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                size="large"
                onClick={onTemporarySave}
              >
                {t(i18nKeys.FORM_TEMPORARY_SUBMIT)}
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                onClick={onSave}
              >
                {t(i18nKeys.FORM_SUBMIT)}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
