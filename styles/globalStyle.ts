import { css } from '@emotion/react'
import palette from './palette'

const globalStyle = css`
  ${palette}
  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 10px;
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
