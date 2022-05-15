import React, { useCallback, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form } from '../../../components/templates/Form'
import { schema } from './validationSchema'
import { FormValuesType } from './types'
import { useFormValue } from './hooks/useFormValue'

export const FormContainer: React.VFC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValuesType>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const [resultName, setResultName] = useState<string>()

  const onSubmit = useCallback<SubmitHandler<FormValuesType>>(
    (data) => {
      setResultName(`${data.firstName} ${data.lastName}`)
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur()
      }
      reset()
    },
    [reset]
  )

  const firstName = useFormValue('firstName', register, errors)
  const lastName = useFormValue('lastName', register, errors)

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      firstName={firstName}
      lastName={lastName}
      resultName={resultName}
    />
  )
}
