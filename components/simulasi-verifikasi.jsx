'use client'
import Image from 'next/image'

export default function Spashscreen({ waitingText, finishedText }) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const loadingSimulation = () => {
      setTimeout(() => {
        setLoading(false)
      }, 4000)
    }
    loadingSimulation()
  }, [])

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      {loading ? (
        <div className="flex flex-col items-center">
          <Image src="/assets/icons/logo.svg" width={200} height={200} />
          <h3>{waitingText}</h3>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <Image src="/assets/icons/logo.svg" width={200} height={200} />
          <h3>{finishedText}</h3>
        </div>
      )}
    </div>
  )
}
