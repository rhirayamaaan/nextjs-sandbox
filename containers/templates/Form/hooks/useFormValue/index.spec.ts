import { renderHook } from '@testing-library/react-hooks'
import { i18nLanguageKeys } from '@/i18n/resources/languages/keys'
import { useFormValue } from '.'

const onBlurMock = jest.fn()
const onChangeMock = jest.fn()
const refMock = jest.fn()

const registerMock = jest.fn().mockImplementation((name) => ({
  name,
  onBlur: onBlurMock,
  onChange: onChangeMock,
  ref: refMock,
}))

describe('useFormValue', () => {
  it('should return the correct object in case of firstName', () => {
    const { result } = renderHook(() =>
      useFormValue('firstName', registerMock, {})
    )
    expect(result.current).toEqual({
      name: 'firstName',
      onBlur: onBlurMock,
      onChange: onChangeMock,
      error: false,
      helperText: undefined,
      ref: refMock,
    })
  })

  it('should return the correct object in case of lastName', () => {
    const { result } = renderHook(() =>
      useFormValue('lastName', registerMock, {})
    )
    expect(result.current).toEqual({
      name: 'lastName',
      onBlur: onBlurMock,
      onChange: onChangeMock,
      error: false,
      helperText: undefined,
      ref: refMock,
    })
  })

  it('should return the correct error values', () => {
    const { result } = renderHook(() =>
      useFormValue('firstName', registerMock, {
        firstName: {
          message: i18nLanguageKeys.FORM_VALIDATION_REQUIRED,
          type: 'required',
        },
      })
    )
    expect(result.current.error).toBe(true)
    expect(result.current.helperText).toBe(
      i18nLanguageKeys.FORM_VALIDATION_REQUIRED
    )
  })
})
