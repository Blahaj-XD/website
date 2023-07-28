import Image from 'next/image'
export default function Spashscreen({children}){
  return <div className="w-screen h-screen flex items-center justify-center bg-white">
        <Image src="/assets/images/logo.svg" width={200} height={200} />
  </div>
}