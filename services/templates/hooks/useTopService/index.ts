import { GetClient } from '../../../../api/client/GetClient'
import { getEndpointPaths } from '../../../../api/methods/get/constants'
import { GetResponsesType } from '../../../../api/methods/get/types'
import { ServiceHookType } from '../../../types'

type ReturnDataType = {
  users: GetResponsesType[typeof getEndpointPaths.USERS]
  photos: GetResponsesType[typeof getEndpointPaths.PHOTOS]
}

const { prefetchQuery: prefetchUserQuery, useGetQuery: useGetUsersQuery } =
  new GetClient(getEndpointPaths.USERS)

const { prefetchQuery: prefetchPhotosQuery, useGetQuery: useGetPhotosQuery } =
  new GetClient(getEndpointPaths.PHOTOS, { _limit: 20 })

export { prefetchUserQuery, prefetchPhotosQuery }

export const useTopService: ServiceHookType<ReturnDataType> = () => {
  const {
    data: usersData,
    isLoading: isUsersLoading,
    error: usersError,
  } = useGetUsersQuery()

  const {
    data: photosData,
    isLoading: isPhotosLoading,
    error: photosError,
  } = useGetPhotosQuery()

  return {
    data:
      usersData && photosData
        ? {
            users: usersData,
            photos: photosData,
          }
        : undefined,
    isLoading: (isUsersLoading || isPhotosLoading) ?? false,
    errors: usersError || photosError ? [usersError, photosError] : undefined,
  }
}
