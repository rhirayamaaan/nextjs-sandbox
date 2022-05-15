import { renderHook } from '@testing-library/react-hooks'
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
          message: 'First name is required',
          type: 'required',
        },
      })
    )
    expect(result.current.error).toBe(true)
    expect(result.current.helperText).toBe('First name is required')
  })
})
