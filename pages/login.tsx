import LoginLayer from '@components/layer/LoginLayer'
import { useQuery } from 'react-query'
import { postToken } from 'lib/api/post'

const LoginPage = () => {
  const postAccessToken = (
    token: string,
    social: 'google' | 'naver' | 'kakao'
  ) => {}
  return <LoginLayer postAccessToken={postAccessToken} />
}

export default LoginPage
