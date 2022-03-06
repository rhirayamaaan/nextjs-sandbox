import { QueryClient, useQuery } from 'react-query'
import { ValueOf } from '../../../types'
import { get } from '../../methods/get'
import { getEndpointPaths } from '../../methods/get/constants'
import {
  GetEndpointParametersType,
  GetResponsesType,
} from '../../methods/get/types'

export class GetClient<T extends ValueOf<typeof getEndpointPaths>> {
  private _getQuery

  private _prefetchQuery

  private _useGetQuery

  get prefetchQuery() {
    return this._prefetchQuery
  }

  get useGetQuery() {
    return this._useGetQuery
  }

  constructor(path: T, parameters: GetEndpointParametersType[T] = undefined) {
    this._getQuery = get(path, parameters)

    this._prefetchQuery = async (queryClient: QueryClient) => {
      const result = await queryClient.prefetchQuery(path, this._getQuery)
      return result
    }

    const useGetQuery = () =>
      useQuery<GetResponsesType[T], Error>(path, this._getQuery)

    this._useGetQuery = useGetQuery
  }
}
