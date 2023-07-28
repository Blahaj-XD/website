import axios from 'axios'

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
  timeout: 20000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
})
