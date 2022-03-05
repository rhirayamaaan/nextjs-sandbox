import type { NextPage } from 'next'
import { dehydrate, QueryClient } from 'react-query'
import { get } from '../api/methods/get'
import { getEndpointPaths } from '../api/methods/get/constants'
import { TopContainer } from '../containers/templates/Top'

export const getServerSideProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    getEndpointPaths.USERS,
    get(getEndpointPaths.USERS)
  )
  await queryClient.prefetchQuery(
    getEndpointPaths.PHOTOS,
    get(getEndpointPaths.PHOTOS, { _limit: 20 })
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const Home: NextPage = () => <TopContainer />

export default Home
