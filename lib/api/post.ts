import client from './client'

export const postToken = async (
  token: string,
  social: 'google' | 'naver' | 'kakao'
): Promise<string> => {
  const body = {
    social,
    token,
  }
  try {
    const response = await client.post('/api/login', body)
    console.log('[SUCCESS] POST TOKEN', response)
  } catch (e) {
    console.log('[FAIL] POST TOKEN', e)
  }
}
