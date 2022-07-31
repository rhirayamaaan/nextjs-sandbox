import React from 'react'
import { useCommentsService } from '@/services/templates/hooks/useCommentsService'
import { useCommentsData } from './hooks/useCommentsData'

export const CommentsContainer: React.VFC = () => {
  const data = useCommentsService()

  const items = useCommentsData(data)

  if (data.errors?.length) {
    throw data.errors
  }

  console.log(items)

  return <>comments</>
}
