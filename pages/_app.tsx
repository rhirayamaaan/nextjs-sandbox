import 'destyle.css'
import '../styles/globals.css'
import type { AppPropsWithLayout } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { useMemo, useState } from 'react'
import '../i18n'

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = useMemo(
    () => Component.getLayout ?? ((page: React.ReactNode) => page),
    [Component]
  )
  const [queryClient] = useState(() => new QueryClient())
  return getLayout(
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
