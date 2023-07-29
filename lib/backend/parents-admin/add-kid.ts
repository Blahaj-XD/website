import api from '@utils/api'
import { AxiosResponse } from 'axios'
export type ParentsAdminAddKid = {
  nik: string
  full_name: string
  domisili: string
  tanggal_lahir: string
  jenis_kelamin: 0 | 1
}

export type ParentsAdminAddKidResponse = {
  id: number
  parent_id: number
  account_number: string
  nik: string
  full_name: string
  domisili: string
  tanggal_lahir: string
  jenis_kelamin: number
  created_at: string
}

export async function parentsAdminAddKid(
  body: ParentsAdminAddKid
): Promise<AxiosResponse<ParentsAdminAddKidResponse, any>> {
  const response = await api.post<ParentsAdminAddKidResponse>(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/parent-admin/kids/`,
    body,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  return response
}
