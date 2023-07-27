'use client'
import { SessionProvider as BaseSessionProvider } from 'next-auth/react'

export default function SessionProvider({ children, session }) {
  return <BaseSessionProvider session={session}>{children}</BaseSessionProvider>
}
