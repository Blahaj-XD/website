
'use client'
import { useRouter } from 'next/navigation'
import Navbar from '@components/navbar'
import React from 'react'
import * as z from 'zod'
import AutoForm from '@components/ui/auto-form'
import Image from 'next/image'
export default function TambahSaldo() {
  const router = useRouter()
  const data = z.object({
    jumlah_saldo: z.string()
  })
  const provider = React.useMemo(() => {
    return [
      {
        id: 1,
        uri: '/assets/icons/plus.svg',
        uri_active: '/assets/icons/plus.svg',
        title: 'Dana',
      },
      {
        id: 2,
        uri: '/assets/icons/plus.svg',
        uri_active: '/assets/icons/plus.svg',
        title: 'BCA',
      },
      {
        id: 3,
        uri: '/assets/icons/plus.svg',
        uri_active: '/assets/icons/plus.svg',
        title: 'GoPay',
      },
    ]
  }, [])
  return (
    <>
      <Navbar name="Tambah Saldo" action={router.back()} />
      <AutoForm>
        <h3>Pilih metode pembayaran</h3>
        <div className="max-w-sm">
          <div className="flex">
            {provider.map((element, index) => {
              return (
                <div
                  className="flex flex-col items-center space-y-2"
                  key={index}
                >
                  <Image src={element.uri} alt="plus" width={32} height={32} />
                  <h4>{element.title}</h4>
                </div>
              )
            })}
          </div>
          <button className="signIn">Lanjutkan</button>
        </div>
      </AutoForm>
    </>
  )
}
