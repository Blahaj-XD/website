import { GenericUser } from '@lib/types'
import api from '@utils/api'

type AuthRegisterBody = {
  nik: string
  username: string
  email: string
  pin: string
  password: string
  phone_number: string
  full_name: string
  domisili: string
  tanggal_lahir: string
  jenis_kelamin: 0 | 1
  alamat: string
  rt_rw: string
  kelurahan: string
  kecamatan: string
  pekerjaan: string
}

type AuthRegisterResponse = {
  user: GenericUser
  statusCode: number
}

export async function authRegister(
  body: AuthRegisterBody
): Promise<AuthRegisterResponse> {
  const response = await api.post<
    {
      user: GenericUser
    },
    any,
    AuthRegisterBody
  >(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/register`, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return {
    user: response.data,
    statusCode: response.status,
  }
}
