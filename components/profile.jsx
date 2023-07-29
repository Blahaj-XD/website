import Image from 'next/image'

export default function Profile({ name,image, children }) {
  return (
    <div className="relative z-50 my-4 px-2 py-4 w-5/6 mx-auto rounded-[10px] text-black flex flex-col items-center bg-Secondary-White-1">
      <Image width={45} height={45} src="/assets/icons/user.svg" alt="user" />
      <h1 className="text-2xl text-Shade-Pinkl font-bold">{name}</h1>
      {children}
    </div>
  )
}
