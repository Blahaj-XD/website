'use client'
import React from 'react'
import Navbar from '@/components/navbar'
import { useRouter } from 'next/navigation'
export default function Approval() {
  const router = useRouter()
  return (
    <>
      <Navbar name="Approval" action={()=>router.back()} />
      <div>Approval</div>
    </>
  )
}
