import type { AppProps } from 'next/app'
import { ReactElement, useEffect, useState } from 'react'
import { Header } from '../components/common'
import { Global } from '@emotion/react'
import globalStyle from 'styles/globalStyle'
import styled from '@emotion/styled'
import router from 'next/router'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const [isLoginPage, setIsLoginPage] = useState<boolean>(false)

  useEffect(() => {
    setIsLoginPage(router.pathname === '/login')
  }, [router.pathname])
  return (
    <div>
      <Global styles={globalStyle} />
      {!isLoginPage && <Header />}
      <Layout isLoginPage={isLoginPage}>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
export default MyApp

type LayoutProps = {
  isLoginPage: boolean
}
const Layout = styled.div<LayoutProps>`
  padding-top: ${({ isLoginPage }) => (isLoginPage ? '0' : '5rem')};
`
