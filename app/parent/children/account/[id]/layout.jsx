import Footer from '@components/children/footer'
export default function RootLayout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
