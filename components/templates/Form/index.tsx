import { Button, TextField } from '@mui/material'

import React, { ComponentProps } from 'react'

import styles from './styles.module.scss'

type InputFieldProps = Pick<
  ComponentProps<typeof TextField>,
  'name' | 'onBlur' | 'onChange' | 'error' | 'helperText' | 'disabled' | 'ref'
>

type Props = {
  onSubmit: React.FormEventHandler
  firstName: InputFieldProps
  lastName: InputFieldProps
  resultName?: string
}

export const Form: React.VFC<Props> = ({
  onSubmit,
  firstName,
  lastName,
  resultName,
}) => (
  <div className={styles.form}>
    {resultName && (
      <div className={styles.form__result}>
        <p>Hello! {resultName}!!</p>
      </div>
    )}
    <div className={styles.form__main}>
      <form onSubmit={onSubmit} action="*">
        <div className={styles.form__mainHeading}>
          <h2 className={styles.form__heading}>Enter your name</h2>
        </div>
        <div className={styles.form__mainBody}>
          <ul className={styles.form__name}>
            <li className={styles.form__nameItem}>
              <TextField label="first name" {...firstName} />
            </li>
            <li className={styles.form__nameItem}>
              <TextField label="last name" {...lastName} />
            </li>
          </ul>
        </div>
        <div className={styles.form__mainFooter}>
          <div className={styles.form__submit}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  </div>
)
