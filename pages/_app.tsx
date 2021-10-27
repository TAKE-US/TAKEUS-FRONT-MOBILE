import type { AppProps } from 'next/app'
import { ReactElement } from 'react'
import { Header } from '../components/common'
import { Global } from '@emotion/react'
import globalStyle from 'styles/globalStyle'
import styled from '@emotion/styled'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <div>
      <Global styles={globalStyle} />
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
export default MyApp

const Layout = styled.div`
  padding-top: 5rem;
`
