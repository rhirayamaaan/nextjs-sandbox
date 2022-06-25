import { REST_HOST } from '../../constants'
import { ValueOf } from '../../../types'
import { getEndpointPaths } from './constants'
import { GetEndpointParametersType, GetResponsesType } from './types'

export const get =
  <T extends ValueOf<typeof getEndpointPaths>>(
    path: T,
    parameters: GetEndpointParametersType[T] = undefined
  ) =>
  async (): Promise<GetResponsesType[T]> => {
    const url = new URL(`${REST_HOST}${path}`)

    if (parameters) {
      const parameterEntries = Object.entries(parameters).map((parameter) => [
        parameter[0],
        String(parameter[1]),
      ])
      url.search = new URLSearchParams(parameterEntries).toString()
    }

    const data = await fetch(url.href, {
      method: 'GET',
    }).catch((error) => {
      throw error
    })

    const result = (await data.json()) as Promise<GetResponsesType[T]>

    return result
  }
