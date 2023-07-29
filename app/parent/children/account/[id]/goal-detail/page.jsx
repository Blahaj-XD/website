'use client'
import React from 'react'
import SWR from 'swr'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
const GoalItem = ({ title, status, user,target,balance }) => {
  return (
    <div className="mx-2 px-5 py-8 mt-5 rounded-xl border-2 shadow-lg">
      <div className="header flex items-center justify-between space-x-2">
        <div className="flex space-x-2">
          <Image
            src="/assets/icons/target.svg"
            alt="target"
            width={40}
            height={40}
          />
          <div className="flex-col">
            <h3 className="text-md font-medium">{title}</h3>
            <p className="text-sm">Sudah mencapai target - {user}</p>
          </div>
        </div>
        <div
          className={`status p-2 bg-${
            status === 'Pending' ? 'Shade-Pinkl' : 'Primary-Green'
          }`}
        >
          {status}
        </div>
      </div>
      <div className="flex w-full my-2 items-center justify-between">
          <h3 className="text-lg text-Shade-Pinkl">Rp: {balance}</h3>
          <h4 className="text-sm text-Secondary-Grey-2"> Target Rp:{target}</h4>
      </div>
      <div className="slider"></div>
      <div className="flex mt-2 space-x-2">
        <button className="bg-white border-2 px-3 py-2 rounded-xl w-full">
          Batalkan
        </button>
        <button className="bg-Shade-Pinkl text-white px-3 py-2 rounded-xl w-full">
          Tabung
        </button>
      </div>
    </div>
  )
}

const Goals = ({ data }) => {
  return data.map((elem, index) => (
    <GoalItem
      key={index}
      {...elem}
    />
  ))
}

export default function GoalDetail() {
  const params = useParams()
  // const {data:quest, error} = SWR('/')
  const data=[
    {
      title:'Night Party',
      status:'On Going',
      name:'name',
      target:100000,
      balance:50000
    }
  ]
  return (
    <>
      <div className="__container">
        <nav className="shadow-xl px-2 py-4 relative flex justify-between w-full items-center">
          <Image
            width={32}
            height={32}
            src="/assets/icons/back.svg"
            alt="back"
            onClick={() => router.back()}
            className=""
          />
          <h3 className="text-center font-bold w-full">Goals Details</h3>
          <Link href={`/parent/children/account/${params.id}/goal-detail`}>
            <Image
              width={28}
              height={28}
              src="/assets/icons/plus.svg"
              alt="back"
              className=" p-2 bg-Shade-Pinkl"
            />
          </Link>
          <h3 className="text-center font-bold">{name}</h3>
          <div></div>
        </nav>
        <div className="overflow-y-auto">
          <Goals data={data} />
        </div>
      </div>
    </>
  )
}
