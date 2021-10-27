import type { AppProps } from 'next/app'
import { ReactElement, useEffect, useState } from 'react'
import { Global } from '@emotion/react'
import globalStyle from 'styles/globalStyle'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <div>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
