import * as z from 'zod'
export const goalSchema = z.object({
  judul: z.string(),
  tanggal_tengat: z.coerce.date(),
  target: z.string(),
})

export const alokasiSaldo = z.object({
  alokasi_goal: z.enum(['Belanja sabtu']).describe('Alokasi ke Goal'),
  jumlah_saldo: z.string().describe('Jumlah saldo yang ingin dialokasikan'),
})

export const requestSaldo = z.object({
  request_goal: z.enum(['Belanja sabtu']).describe('Request Goal'),
  jumlah_saldo: z.string().describe('Jumlah saldo yang ingin dialokasikan'),
  tujuan_request: z.string().describe('Tujuan request saldo'),
})
