import { useGetQuery } from '../../../../api/hooks/useGetQuery'
import { getEndpointPaths } from '../../../../api/methods/get/constants'
import { GetResponsesType } from '../../../../api/methods/get/types'
import { ServiceHookType } from '../../../types'

type ReturnDataType = {
  users: GetResponsesType[typeof getEndpointPaths.USERS]
  photos: GetResponsesType[typeof getEndpointPaths.PHOTOS]
}

export const useTopService: ServiceHookType<ReturnDataType> = () => {
  const {
    data: usersData,
    isLoading: isUsersLoading,
    error: usersError,
  } = useGetQuery(getEndpointPaths.USERS)

  const {
    data: photosData,
    isLoading: isPhotosLoading,
    error: photosError,
  } = useGetQuery(getEndpointPaths.PHOTOS, { _limit: 20 })

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
