import React, { useCallback, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form } from '../../../components/templates/Form'
import { buildSchema } from './validationSchema'
import { FormValuesType } from './types'
import { useFormValue } from './hooks/useFormValue'

export const FormContainer: React.VFC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValuesType>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(buildSchema(isSubmitting)),
  })

  const [resultName, setResultName] = useState<string>()

  const onSubmit = useCallback<SubmitHandler<FormValuesType>>(
    (data) => {
      setResultName(
        `${data.firstName} ${data.lastName}${
          !isSubmitting ? ' (Temporary)' : ''
        }`
      )
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur()
      }
      reset()
      setIsSubmitting(false)
    },
    [reset, isSubmitting, setIsSubmitting]
  )

  const firstName = useFormValue('firstName', register, errors)
  const lastName = useFormValue('lastName', register, errors)

  return (
    <Form
      onSubmit={(event) => handleSubmit(onSubmit)(event)}
      firstName={firstName}
      lastName={lastName}
      resultName={resultName}
      onSave={() => {
        setIsSubmitting(true)
      }}
      onTemporarySave={() => {
        setIsSubmitting(false)
      }}
    />
  )
}
