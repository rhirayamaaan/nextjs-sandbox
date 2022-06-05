import type { NextPageWithLayout } from 'next'
import { dehydrate, QueryClient } from 'react-query'
import { LayoutContainer } from '../containers/layouts'
import { TopContainer } from '../containers/templates/Top'
import {
  prefetchPhotosQuery,
  prefetchUserQuery,
} from '../services/templates/hooks/useTopService'

export const getServerSideProps = async () => {
  const queryClient = new QueryClient()
  await prefetchUserQuery(queryClient)
  await prefetchPhotosQuery(queryClient)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const Home: NextPageWithLayout = () => (
  <LayoutContainer>
    <TopContainer />
  </LayoutContainer>
)

export default Home
