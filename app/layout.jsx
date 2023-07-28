import Footer from '@components/footer'
import Navbar from '@components/navbar'

import '@styles/globals.css'

export const metadata = {
  title: 'Hackathon',
  description: 'Hackathon',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/assets/images/website-icon.svg" />
      </head>
      <body className="w-screen mx-auto overflow-x-hidden">
          <Navbar className="bg-[#0000]"/>
          {children}
          <Footer />
      </body>
    </html>
  )
}
