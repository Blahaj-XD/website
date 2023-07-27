import Footer from '@components/footer'
import Navbar from '@components/navbar'
import SessionProvider from '@components/session-provider'
import '@styles/globals.css'

export const metadata = {
  title: 'Hackathon',
  description: 'Hackathon',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <head>
        <link rel="icon" href="/assets/images/website-icon.svg" />
      </head>
      <body className="w-screen mx-auto overflow-x-hidden bg-[#0F172A]">
        <SessionProvider>
          <Navbar />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  )
}
