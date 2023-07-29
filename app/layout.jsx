import '@styles/globals.css'
import localFont from 'next/font/local'
import { NextAuthProvider } from './providers'

export const metadata = {
  title: 'Hackathon',
  description: 'Hackathon',
}

const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Light.otf',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
})

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={satoshi.className}>
      <head>
        <link rel="icon" href="/assets/images/website-icon.svg" />
      </head>
      <body className="w-screen mx-auto overflow-x-hidden">
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}
