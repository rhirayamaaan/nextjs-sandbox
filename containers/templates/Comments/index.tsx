import React from 'react'
import { useCommentService } from '../../../services/templates/hooks/useCommentsService'
import { useCommentsData } from './hooks/useCommentsData'

export const CommentsContainer: React.VFC = () => {
  const data = useCommentService()

  const { items } = useCommentsData(data)

  if (errors?.length) {
    throw errors
  }

  return <>comments</>
}
