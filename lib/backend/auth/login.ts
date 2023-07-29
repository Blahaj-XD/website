import api from '@utils/api'
import { GenericUser } from './../../types'
export type AuthLoginBody = {
  username: string
  password: string
}

export type AuthLoginResponse = {
  access_token: string
  bank_access_token: string
  user: GenericUser
}

export async function authLogin(
  body: AuthLoginBody
): Promise<AuthLoginResponse> {
  const response = await api.post<AuthLoginResponse, any, AuthLoginBody>(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/auth/login`,
    body
  )

  const data = response.data
  return data
}
