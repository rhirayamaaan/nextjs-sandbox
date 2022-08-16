import { ComponentProps } from 'react'
import { Story } from '@storybook/react'
import { i18nLanguageKeys } from '@/i18n/resources/languages/keys'
import { Form } from '.'

export default {
  title: 'templates/Form',
  component: Form,
}

type Props = ComponentProps<typeof Form>

type ControlProps = {
  'firstName.helperText': Props['firstName']['helperText']
  'lastName.helperText': Props['firstName']['helperText']
  hasResultName?: boolean
  'resultName.firstName': NonNullable<Props['resultName']>['firstName']
  'resultName.lastName': NonNullable<Props['resultName']>['lastName']
  'resultName.isTemporary': NonNullable<Props['resultName']>['isTemporary']
}

const Template: Story<Props & ControlProps> = ({
  onSubmit,
  firstName,
  lastName,
  'firstName.helperText': firstNameHelperText,
  'lastName.helperText': lastNameHelperText,
  resultName,
  hasResultName,
  'resultName.firstName': resultFirstName,
  'resultName.lastName': resultLastName,
  'resultName.isTemporary': resultIsTemporary,
  ...props
}) => {
  const withPreventDefault: typeof onSubmit = (event) => {
    event.preventDefault()
    onSubmit(event)
  }

  return (
    <Form
      {...props}
      onSubmit={withPreventDefault}
      firstName={{ ...firstName, helperText: firstNameHelperText }}
      lastName={{ ...lastName, helperText: lastNameHelperText }}
      resultName={
        hasResultName
          ? {
              ...(resultName ?? {}),
              firstName: resultFirstName,
              lastName: resultLastName,
              isTemporary: resultIsTemporary,
            }
          : undefined
      }
    />
  )
}

export const Default = Template.bind({})

Default.args = {
  firstName: {},
  lastName: {},
}

Default.argTypes = {
  firstName: {
    control: {
      type: null,
    },
  },
  lastName: {
    control: {
      type: null,
    },
  },
  onSubmit: {
    control: {
      type: null,
    },
  },
  onSave: {
    control: {
      type: null,
    },
  },
  onTemporarySave: {
    control: {
      type: null,
    },
  },
  resultName: {
    control: {
      type: null,
    },
  },
  'firstName.helperText': {
    control: 'select',
    defaultValue: undefined,
    options: [
      undefined,
      i18nLanguageKeys.FORM_VALIDATION_REQUIRED,
      i18nLanguageKeys.FORM_VALIDATION_ALPHABET,
    ],
  },
  'lastName.helperText': {
    control: 'select',
    defaultValue: undefined,
    options: [
      undefined,
      i18nLanguageKeys.FORM_VALIDATION_REQUIRED,
      i18nLanguageKeys.FORM_VALIDATION_ALPHABET,
    ],
  },
  hasResultName: {
    control: 'boolean',
    defaultValue: false,
  },
  'resultName.firstName': {
    control: 'text',
    defaultValue: '',
  },
  'resultName.lastName': {
    control: 'text',
    defaultValue: '',
  },
  'resultName.isTemporary': {
    control: 'boolean',
    defaultValue: false,
  },
}
