import { useQuery } from 'react-query'
import { ValueOf } from '../../../types'
import { get } from '../../methods/get'
import { getEndpointPaths } from '../../methods/get/constants'
import {
  GetEndpointParametersType,
  GetResponsesType,
} from '../../methods/get/types'

export const useGetQuery = <T extends ValueOf<typeof getEndpointPaths>>(
  path: T,
  parameters: GetEndpointParametersType[T] = undefined
) => {
  const result = useQuery<GetResponsesType[T], Error>(
    path,
    get(path, parameters)
  )

  return result
}
