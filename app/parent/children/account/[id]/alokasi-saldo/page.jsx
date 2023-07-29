'use client'
import { alokasiSaldo } from '../goalSchema'
import * as z from 'zod'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import AutoForm from '@/components/ui/auto-form'
import { useRouter } from 'next/navigation'

export default function AlokasiSaldo() {
  const router = useRouter()
  return (
    <div className="__container">
      <Navbar name="Alokasi Saldo" action={() => router.back()} />
      <div>
        <Image
          src="/assets/images/children/alokasi-goal-background.png"
          alt="alokasi-goal-background"
          width={250}
          height={250}
          className="w-full "
        />
        <AutoForm formSchema={alokasiSaldo} className="px-5 my-2">
          <button className="signIn">Konfirmasi</button>
        </AutoForm>
      </div>
    </div>
  )
}
