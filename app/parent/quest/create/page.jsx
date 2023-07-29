'use client'

import React from 'react'
import SWR from 'swr'
import * as z from 'zod'
import Navbar from '@components/navbar'
import AutoForm from '@/components/ui/auto-form'
export default function CreateQuest() {
  // const {data:quest, error} = SWR('/')
  const createQuestForm = z.object({
    judul_quest: z.string({
      required_error: 'Judul quest is required.',
    }),
    tengat_waktu_tanggal: z.coerce.date({
      required_error: 'Tengat waktu tanggal is required.',
    }),
    tengat_waktu_jam: z.string({
      required_error: 'Tengat waktu is a time',
    }),
    hadiah: z.string({
      required_error: 'Hadiah must be a string',
    }),
  })
  const formatRupiah = (amount) => {
    return `Rp. ${amount}`;
  };
  const fieldConfig = {
    hadiah: {
      inputProps: {
        formatValue: formatRupiah,
      },
    }
  }
  return (
    <>
    <Navbar name="Buat Quest" action={()=>{router.back()}}/>
    <AutoForm formSchema={createQuestForm}
      fieldConfig={fieldConfig}
      onSubmit = {async (form) => {
        console.log(form)
      }}
      className="max-w-sm mx-auto mt-16 container"
    >
        <button className='signIn'>Buat Quest</button>
    </AutoForm>
    </>
  )
}
