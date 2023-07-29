'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'

export default function Footer() {
  const params = useParams()
  const routes = [
    {
      href: `/parent/children/account/${params.id}`,
      icon: '/assets/icons/footer/home.svg',
      icon_active: '/assets/icons/footer/home-active.svg',
      label: 'Home',
    },
    {
      href: `/parent/children/account/${params.id}/money`,
      icon: '/assets/icons/footer/parent/money.svg',
      icon_active: '/assets/icons/footer/parent/money-active.svg',
      label: 'Money',
    },
    {
      href: `/parent/children/account/${params.id}/learning`,
      icon: '/assets/icons/footer/parent/book.svg',
      icon_active: '/assets/icons/footer/parent/book-active.svg',
      label: 'Learning',
    },
    {
      href: `/parent/children/account/${params.id}/quest-list`,
      icon: '/assets/icons/footer/quest.svg',
      icon_active: '/assets/icons/footer/quest-active.svg',
      label: 'Quests',
    },
  ]
  return (
    <div className="fixed bottom-0 flex justify-evenly p-4 bg-Secondary-White-1 shadow-xl w-full items-center z-50">
      {routes.map(({ href, icon, label }, index) => (
        <Link
          key={index}
          href={href}
          className="flex flex-col items-center cursor-pointer"
        >
          <Image
            className="fill-current text-green-600"
            src={icon}
            width={24}
            height={24}
            alt={label}
          />
          <label>{label}</label>
        </Link>
      ))}
    </div>
  )
}
