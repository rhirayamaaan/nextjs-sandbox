import { Button, TextField } from '@mui/material'

import React from 'react'
import { ValueOf } from '../../../types'
import { Link } from '../../helpers/Link'

const fieldNames = {
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
} as const

type Props = {
  onSubmit: React.FormEventHandler
  firstName: string
  lastName: string
  onFieldChange: (name: ValueOf<typeof fieldNames>) => React.ChangeEventHandler
  onClick: React.MouseEventHandler
}

export const Form: React.VFC<Props> = ({
  onSubmit,
  firstName,
  lastName,
  onFieldChange,
}) => (
  <form onSubmit={onSubmit}>
    <p>
      <TextField
        label="first name"
        name={fieldNames.FIRST_NAME}
        value={firstName}
        onChange={onFieldChange('firstName')}
      />
      <TextField
        label="last name"
        name={fieldNames.LAST_NAME}
        value={lastName}
        onChange={onFieldChange('lastName')}
      />
    </p>
    <p>
      <Button>Submit</Button>
    </p>
    <p>
      <Link href="/">link</Link>
    </p>
  </form>
)
