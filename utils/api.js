import axios from 'axios'

export default axios.create({
  baseURL: process.env.NEXTAUTH_URL,
  timeout: 20000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
  },
})