import { renderHook } from '@testing-library/react'
import { useCommentsData } from '.'

const stub = {
  data: {
    comments: [
      {
        id: 1,
        postId: 1,
        name: 'name',
        email: 'email',
        body: 'body',
      },
    ],
  },
  isLoading: false,
  errors: undefined,
}

describe('useCommentsData', () => {
  it('return correct data', () => {
    const { result } = renderHook(() => useCommentsData({ ...stub }))

    expect(result.current).toEqual([
      {
        id: 1,
        name: 'name',
        body: 'body',
      },
    ])
  })
})
