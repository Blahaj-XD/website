'use client'
import ChildrenFooter from '@components/children/footer'
import ParentFooter from '@components/parent/footer'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
export default function RootLayout({ children }) {
  // check if we're inside children
  const pathname = usePathname()
  const [isChildren, setIsChildren] = useState(false)

  useEffect(() => {
    if (pathname.includes('/children')) {
      setIsChildren(true)
    }
  }, [pathname])

  return (
    <>
      {children}
      {isChildren ? <ChildrenFooter /> : <ParentFooter />}
    </>
  )
}
