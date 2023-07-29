'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar({ action,name }) {

  return (
    <nav className="w-full shadow-xl px-2 py-4 relative">
      <Image width={32} height={32} src="/assets/icons/back.svg" alt="back" onClick={action} className="absolute top-1/2 -translate-y-1/2"/>
      <h3 className="text-center font-bold">{name}</h3>
      <div></div>
    </nav>
  )
}
