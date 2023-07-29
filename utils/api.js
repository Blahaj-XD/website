import axios from 'axios'
import { getSession } from 'next-auth/react'

function createAPIClient() {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
    timeout: 20000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  })

  const isAccessTokenAttachedToAxiosDefaults = () => {
    const authHeader = instance.defaults.headers.common['Authorization']
    if (authHeader === null || authHeader === undefined || authHeader === '')
      return false
    else return true
  }

  const setAccessTokenOnRequestAndAsAxiosDefaults = async (request) => {
    const session = await getSession()
    if (session && session.token) {
      const AuthHeaderValue = `Bearer ${session.token.access_token}`
      const BankAuthHeaderValue = `Bearer ${session.token.bank_access_token}`
      if (!request.headers) request.headers = {}
      request.headers.Authorization = AuthHeaderValue
      request.headers['X-Bank-Authorization'] = BankAuthHeaderValue

      instance.defaults.headers.common['Authorization'] =
        AuthHeaderValue /* NOTE - This is to prevent calling getSession() again and again for each request.
                                    Because getSession() internally calls api/auth/session, which would be very expensive to do
                                    for each request to our backend [Call to this API was consuming around 10% of our bandwidth provided to us by vercel].

                                    It will not only lead to increase in costs but also increase time to perform each request as
                                    we have to every-time make a remote call to /api/auth/session. */
      instance.defaults.headers.common['X-Bank-Authorization'] =
        BankAuthHeaderValue
    }
  }

  instance.interceptors.request.use(async (request) => {
    if (!isAccessTokenAttachedToAxiosDefaults())
      await setAccessTokenOnRequestAndAsAxiosDefaults(request)
    return request
  })

  return instance
}

export const api = createAPIClient()

export const unsetAccessTokenAttachedToAxiosDefaults = () => {
  delete api.defaults.headers.common['Authorization']
}

export const fetcher = (url) => api.get(url).then((res) => res.data)
export default api
