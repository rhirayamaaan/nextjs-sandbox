import type { NextPageWithLayout } from 'next'
import { useRouter } from 'next/router'
import { LayoutContainer } from '../../containers/layouts'

const Id: NextPageWithLayout = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>UserId: {id}</p>
}

Id.getLayout = (page) => <LayoutContainer>{page}</LayoutContainer>

export default Id
