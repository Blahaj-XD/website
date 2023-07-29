import Image from 'next/image'

export default function Balance({ name, children }) {
  return (
    <div className="my-4 px-2 py-4 w-5/6 mx-auto rounded-[10px] text-black flex flex-col items-center bg-Secondary-White-1">
      <h2>{name}</h2>
      {children}
    </div>
  )
}
