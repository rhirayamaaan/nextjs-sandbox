import React from 'react'
import { Top } from '../../../components/templates/Top'
import { useTopService } from '../../../services/templates/hooks/useTopService'
import { useTopData } from './hooks/useTopData'

export const TopContainer: React.VFC = () => {
  const top = useTopService()

  if (top.errors) {
    throw top.errors
  }

  const data = useTopData(top)

  return <Top {...data} />
}
