
'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Footer() {
  // const router = useRouter()
  // console.log(router.asPath == '/parent/children/account/2')
  // const href = '/parent/children/account/2'
  // const style = {
  //   marginRight: 10,
  //   color: router.asPath === href ? 'red' : 'black',
  // }
  const routes=[
    {
      href:'/parent/children/account/2',
      icon:'/assets/icons/footer/home.svg',
      icon_active:'/assets/icons/footer/home-active.svg',
      label:'Home'
    },
    {
      href:'/parent/children/account/2',
      icon:'/assets/icons/footer/parent/approval.svg',
      icon_active:'/assets/icons/footer/parent/approval-active.svg',
      label:'Approval'
    },
    {
      href:'/parent/children/account/2',
      icon:'/assets/icons/footer/parent/anak-anak.svg',
      icon_active:'/assets/icons/footer/parent/anak-anak-active.svg',
      label:'Anak-anak'
    },
    {
      href:'/parent/children/account/2',
      icon:'/assets/icons/footer/quest.svg',
      icon_active:'/assets/icons/footer/quest-active.svg',
      label:'Quests'
    },
  ]
  return (
    <div className="fixed bottom-0 flex justify-evenly p-4 bg-Secondary-White-1 shadow-xl w-full items-center">
      {routes.map(({href,icon,label},index)=>(
        <Link key={index} href={href} className="flex flex-col items-center cursor-pointer" style={style}>
          <Image className="fill-current text-green-600" src={icon} width={24} height={24} alt={label}/>
          <label>{label}</label>
        </Link>
      ))}
    </div>
  )
}
