'use client'
import Navbar from '@components/navbar'
import { Skeleton } from '@components/ui/skeleton'
import { fetcher } from '@utils/api'
import Avatar from 'boring-avatars'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'

const Children = ({ fullName, img }) => {
  const SIZE = 94
  return (
    <div className="w-full h-full text-center">
      <div className="mx-auto overflow-hidden rounded-[10px]">
        {img ? (
          <div className="flex place-content-center w-[94px] h-[94px] bg-Shade-Pinkl">
            <Image
              src={img}
              alt="Picture of the author"
              width={SIZE / 2.5}
              height={SIZE / 2.5}
            />
          </div>
        ) : (
          <Avatar
            size={SIZE}
            name={fullName}
            variant="beam"
            colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
            square
          />
        )}
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
    <div>
      <Navbar action={() => router.back()} name="List Children" />
      <div className="container mt-6 grid grid-cols-3 gap-5">
        {isLoading && (
          <Skeleton className="rounded-[10px] w-32 h-32 bg-Secondary-Grey-3"></Skeleton>
        )}
        {!isLoading &&
          data.items.map((item, index) => (
            <Link href={`/parent/children/account/${item['id']}/`} key={index}>
              <Children fullName={item['full_name']} key={index} />
            </Link>
          ))}
        <Link href={`/parent/children/register`}>
          <Children name="Tambah" img="/assets/icons/plus.svg" />
        </Link>
      </div>
    </div>
  )
}
