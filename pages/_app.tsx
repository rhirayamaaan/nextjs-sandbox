import 'destyle.css'
import '../styles/globals.css'
import type { AppPropsWithLayout } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import React, { useEffect, useMemo, useState } from 'react'
import '../i18n'
import { useRouter } from 'next/router'
import Error from 'next/error'

const NotFoundHandler: React.VFC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter()

  // Check router is ready
  if (!router.isReady) {
    return <>{children}</>
  }

  // Allow Home Page
  if (router.route === '/' && router.asPath === '/') {
    return <>{children}</>
  }

  // Allow Pages in /pages Directory
  if (router.route !== '/') {
    return <>{children}</>
  }

  return <Error statusCode={404} />
}

const SafeHydrate: React.VFC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isRendered, setRendered] = useState(false)
  useEffect(() => {
    setRendered(true)
  }, [])
  return isRendered ? (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  ) : null
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = useMemo(
    () => Component.getLayout ?? ((page: React.ReactNode) => page),
    [Component]
  )
  const [queryClient] = useState(() => new QueryClient())

  return getLayout(
    <SafeHydrate>
      <NotFoundHandler>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </NotFoundHandler>
    </SafeHydrate>
  )
}

export default App
