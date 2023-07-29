'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const routes = [
    {
      href: `/parent/`,
      icon: '/assets/icons/footer/home.svg',
      icon_active: '/assets/icons/footer/home-active.svg',
      label: 'Home',
    },
    {
      href: `/parent/approval`,
      icon: '/assets/icons/footer/children/approval.svg',
      icon_active: '/assets/icons/footer/children/approval-active.svg',
      label: 'Approval',
    },
    {
      href: `/parent/children/list-of-accounts`,
      icon: '/assets/icons/footer/children/anak-anak.svg',
      icon_active: '/assets/icons/footer/children/anak-anak-active.svg',
      label: 'Anak-anak',
    },
    {
      href: `/parent/quest`,
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
