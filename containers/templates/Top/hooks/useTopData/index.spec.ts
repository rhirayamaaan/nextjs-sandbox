import { renderHook } from '@testing-library/react-hooks'
import { useTopData } from '.'

const stub = {
  data: {
    users: [
      {
        id: 1,
        name: 'dummy user name',
        username: 'dummy user username',
        email: 'dummy user email',
        address: {
          street: 'dummy user address street',
          suite: 'dummy user address suite',
          city: 'dummy user address city',
          zipcode: 'dummy user address zipcode',
          geo: {
            lat: 'dummy user address geo lat',
            lng: 'dummy user address geo lng',
          },
        },
        phone: 'dummy user phone',
        website: 'dummy user website',
        company: {
          name: 'dummy user company name',
          catchPhrase: 'dummy user company catch phrase',
          bs: 'dummy user company bs',
        },
      },
    ],
    photos: [
      {
        albumId: 1,
        id: 1,
        title: 'dummy photo title',
        url: 'dummy photo url',
        thumbnailUrl: 'dummy photo thumbnail url',
      },
    ],
  },
  isLoading: false,
  errors: undefined,
}

describe('useTopData', () => {
  it('returns a correct members object', () => {
    const { result } = renderHook(() => useTopData(stub))

    expect(result.current).toEqual({
      members: [
        {
          id: 1,
          username: 'dummy user username',
        },
      ],
      photos: [
        {
          id: 1,
          title: 'dummy photo title',
          url: 'dummy photo url',
          thumbnailUrl: 'dummy photo thumbnail url',
        },
      ],
    })
  })

  it('returns an empty array of members when users is an empty array', () => {
    const { result } = renderHook(() =>
      useTopData({
        ...stub,
        data: {
          ...stub.data,
          users: [],
        },
      })
    )

    expect(result.current.members).toEqual([])
  })

  it('returns an empty array of photos when photos is an empty array', () => {
    const { result } = renderHook(() =>
      useTopData({
        ...stub,
        data: {
          ...stub.data,
          photos: [],
        },
      })
    )

    expect(result.current.photos).toEqual([])
  })
})
