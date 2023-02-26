import React, { ComponentProps } from 'react'

import { render, waitFor, act } from '@testing-library/react'
import { useTopService } from '@/services/templates/hooks/useTopService'
import { Top } from '@/components/templates/Top'

import { testComponentProps } from '@/jest/utils/testComponentProps'
import { TopContainer } from '.'

jest.mock('@/services/templates/hooks/useTopService', () => ({
  useTopService: jest.fn(),
}))

jest.mock('@/components/templates/Top', () => ({
  Top: jest.fn().mockImplementation(() => 'Top Component'),
}))

const useTopServiceMock = useTopService as jest.Mock
const TopMock = Top as jest.Mock

describe('Top Container', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render Top Component on success', async () => {
    useTopServiceMock.mockReturnValue({
      data: {},
      loading: false,
      error: undefined,
    })

    render(<TopContainer />)

    testComponentProps(TopMock, async (props: ComponentProps<typeof Top>) => {
      expect(props.isClicked).toBe(false)
      expect(TopMock).toBeCalledTimes(1)

      act(() => {
        props.onClick()
      })

      await waitFor(() => [props.isClicked])

      expect(TopMock).toBeCalledTimes(2)
      expect(props.isClicked).toBe(true)
    })
  })

  it('should throw errors that occur in useTopService', () => {
    useTopServiceMock.mockReturnValue({
      data: undefined,
      loading: false,
      errors: [new Error('useTopService Error')],
    })

    try {
      render(<TopContainer />)
    } catch (error) {
      expect(error).toEqual([new Error('useTopService Error')])
      expect(TopMock).toBeCalledTimes(0)
    }
  })
})
