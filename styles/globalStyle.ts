import { css } from '@emotion/react'
import palette from './palette'

const globalStyle = css`
  ${palette}
  body {
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`
export default globalStyle
