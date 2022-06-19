import type { NextPageWithLayout } from 'next'
import { LayoutContainer } from '../containers/layouts'
import { TopContainer } from '../containers/templates/Top'

const Home: NextPageWithLayout = () => (
  <LayoutContainer>
    <TopContainer />
  </LayoutContainer>
)

export default Home
