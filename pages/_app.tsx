import type { AppProps } from 'next/app'
import { ReactElement, useEffect, useState } from 'react'
import axios from 'axios'
import { Global } from '@emotion/react'
import globalStyle from 'styles/globalStyle'
import router from 'next/router'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.response.status === 401) {
        router.push('/login')
      }
      return error
    }
  )
  return (
    <div>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
