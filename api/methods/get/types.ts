import { getEndpointPaths } from './constants'
import { CommentInterface } from './interfaces/comment'
import { PhotoInterface } from './interfaces/photos'
import { TodoInterface } from './interfaces/todo'
import { UserInterface } from './interfaces/user'

export type GetResponsesType = {
  [getEndpointPaths.USERS]: (UserInterface | undefined)[]
  [getEndpointPaths.TODOS]: (TodoInterface | undefined)[]
  [getEndpointPaths.PHOTOS]: (PhotoInterface | undefined)[]
  [getEndpointPaths.COMMENTS]: (CommentInterface | undefined)[]
}

type DefaultParameterType = {
  _limit?: number
}

export type GetEndpointParametersType = {
  [getEndpointPaths.USERS]?: {
    id?: string
  } & DefaultParameterType
  [getEndpointPaths.TODOS]?: {
    userId?: string
  } & DefaultParameterType
  [getEndpointPaths.PHOTOS]?: {
    id?: string
  } & DefaultParameterType
  [getEndpointPaths.COMMENTS]?: DefaultParameterType
}
