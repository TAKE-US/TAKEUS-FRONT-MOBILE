import type { AppProps } from 'next/app'
import { ReactElement } from 'react'
import { Header } from '../components/common'
import { Global } from '@emotion/react'
import globalStyle from '@styles/globalStyle'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <div>
      <Global styles={globalStyle} />
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
