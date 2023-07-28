'use client'
import React from 'react'
import SWR from 'swr'
import Api from '@/utils/api'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from 'boring-avatars'

const fetcher = (url) => Axios.get(url).then((r) => r.json())

const Children = ({name, img}) => {
  console.log(name)
  return (
    <div className="bg-white rounded-lg text-center">
      {img ? (
        <Avatar
          size={40}
          name="Maria Mitchell"
          variant="marble"
          colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
        />
      ) : (
        <Avatar
          size={40}
          name="Maria Mitchell"
          variant="marble"
          colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
        />
      )}
      <h3 className="text-lg font-semibold">{name}</h3>
    </div>
  )
}
export default function ListOfChildren() {
  // const {data,error} = SWR('',fetcher)
  //lakukan logic
  const data = [
    {
      id: 1,
      name: 'Aldi',
    },
  ]
  return (
    <>
      <div className="wrapper flex flex-wrap">
        {data.map((element, index) => {
          return <Children {...element} />
        })}
        <Link href={`/registerChildren`}>
          <Children name='Tambah' />
        </Link>
      </div>
    </>
  )
}
