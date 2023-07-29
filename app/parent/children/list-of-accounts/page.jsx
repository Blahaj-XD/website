'use client'
import Navbar from '@components/navbar'
import { Skeleton } from '@components/ui/skeleton'
import { fetcher } from '@utils/api'
import Avatar from 'boring-avatars'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'

const Children = ({ fullName, img }) => {
  const SIZE = 94
  return (
    <div className="bg-white rounded-lg text-center">
      <div className="mx-auto rounded-[10px]">
        <Avatar
          size={SIZE}
          name={fullName}
          variant="beam"
          colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
          square
        />
      </div>
      <h3 className="text-lg font-semibold">{fullName}</h3>
    </div>
  )
}
export default function ListOfChildren() {
  const router = useRouter()
  const { data, error, isLoading } = useSWR('/parent-admin/kids/', fetcher)
  console.log(data)

  return (
    <div className="">
      <Navbar action={() => router.back()} name="List Children" />
      <div className="wrapper flex flex-wrap p-2 space-x-5">
        {isLoading && (
          <Skeleton className="rounded-[10px] w-32 h-32 bg-Secondary-Grey-3"></Skeleton>
        )}
        {!isLoading &&
          data.items.map((item, index) => {
            return <Children fullName={item['full_name']} key={index} />
          })}
        <Link href={`/parent/children/register`}>
          <Children name="Tambah" img="/assets/icons/plus.svg" />
        </Link>
      </div>
    </div>
  )
}
