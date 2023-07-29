'use client'
import React from 'react'
import SWR from 'swr'
import Api from '@/utils/api'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from 'boring-avatars'
import { useRouter } from 'next/navigation'
import Navbar from '@components/navbar'
const fetcher = (url) => Axios.get(url).then((r) => r.json())

const Children = ({name, img}) => {
  const SIZE = 40
  return (
    <div className="bg-white rounded-lg text-center">
      <div className="mx-auto">
      {img ? (
        <Image src={img} alt="plus" className="p-5 rounded-xl" width={SIZE} height={SIZE}/>
        ) : (
          <Avatar
          size={SIZE}
          name="Maria Mitchell"
          variant="marble"
          colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
        />
      )}
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
    </div>
  )
}
export default function ListOfChildren() {
  const router = useRouter()
  // const {data,error} = SWR('',fetcher)
  //lakukan logic
  const data = [
    {
      id: 1,
      name: 'Aldi',
    },
  ]
  return (
    <div className="">
      <Navbar action={()=>router.back()} name="List Children"/>
      <div className="wrapper flex flex-wrap p-2 space-x-5">
        {data.map((element, index) => {
          return <Children {...element} key={index}/>
        })}
        <Link href={`/parent/children/register`}>
          <Children name='Tambah' img="/assets/icons/plus.svg"/>
        </Link>
      </div>
    </div>
  )
}
