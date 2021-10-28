import axios from 'axios'

const client = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/' : 'https://takeus.shop',
  headers: {
    'Content-Type': 'application/json',
    'x-auth-token': localStorage.getItem('token') || '',
  },
})

export default client
