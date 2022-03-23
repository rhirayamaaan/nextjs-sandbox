import { GetClient } from '../../../../api/client/GetClient'
import { getEndpointPaths } from '../../../../api/methods/get/constants'
import { GetResponsesType } from '../../../../api/methods/get/types'
import { ServiceHookType } from '../../../types'

type ReturnDataType = {
  comments: GetResponsesType[typeof getEndpointPaths.COMMENTS]
}

const {
  prefetchQuery: prefetchCommentsQuery,
  useGetQuery: useGetCommentsQuery,
} = new GetClient(getEndpointPaths.COMMENTS)

export { prefetchCommentsQuery }

export const useCommentsService: ServiceHookType<ReturnDataType> = () => {
  const { data, isLoading, error } = useGetCommentsQuery()

  return {
    data: {
      comments: data ?? [],
    },
    isLoading,
    errors: error ? [error] : undefined,
  }
}
