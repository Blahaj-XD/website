'use client'
import React from 'react'
import Navbar from '@/components/navbar'
import { useRouter } from 'next/navigation'
import SWR from 'swr'
import Image from 'next/image'
export default function Approval() {
  const router = useRouter()
  // const {data,err} = SWR()
  const approvalData=[
    {
      user:'kevin',
      balance:'10000'
    },
    {
      user:'kevin',
      balance:'10000'
    }
    ,
    {
      user:'kevin',
      balance:'10000'
    },
    {
      user:'kevin',
      balance:'10000'
    },
    {
      user:'kevin',
      balance:'10000'
    },
    {
      user:'kevin',
      balance:'10000'
    }

  ]
  return (
    <div className="__container">
      <Navbar name="Approval" action={()=>router.back()} />
      <div className="overflow-y-auto">
        {approvalData.map((data,index)=>{
          return (<div className="px-5 py-8 mt-5 rounded-xl border-2 shadow-lg" key={index}>
          <div className="header flex items-center justify-between space-x-2">
            <div className="flex space-x-2">
              <Image src="/assets/icons/target.svg" alt='target' width={40} height={40}/>
              <div className="flex-col">
                <h3 className="text-md font-medium">Night Party</h3>
                <p className="text-sm">Sudah mencapai target - {data.user}</p>
              </div>
            </div>
            <div className="status text-Shade-Pinkl">Pending</div>
          </div>
          <div className="flex mt-2 space-x-2 ">
            <button className="bg-white border-2  px-3 py-2 rounded-xl w-full" >Batalkan</button>
            <button className="bg-Shade-Pinkl text-white px-3 py-2 rounded-xl w-full" >Menyetujui</button>
          </div>
        </div>)
        })}
      </div>
    </div>
  )
}
