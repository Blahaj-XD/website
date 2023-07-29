'use client'

import Balance from '@components/balance'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

// KidID        int       `json:"kid_id"`
// 	ParentID     int       `json:"parent_id"`
// 	Title        string    `json:"title"`
// 	TargetAmount float64   `json:"target_amount"`
// 	EndDate      time.Time `json:"end_date"

// ID            int       `json:"id"`
// 	KidID         int       `json:"kid_id"`
// 	AccountNumber string    `json:"account_number"`
// 	Title         string    `json:"title"`
// 	TargetAmount  float64   `json:"target_amount"`
// 	Status        string    `json:"status"`
// 	StartDate     time.Time `json:"start_date"`
// 	EndDate       time.Time `json:"end_date"`
// 	CreatedAt     time.Time `json:"created_at"`

const NoGoals = () => {
  return (
    <div className="w-screen h-screen flex justify-content">
      <div className="bg-Secondary-White-1 p-5 w-64 h-72 mx-auto text-center border-2 shadow-xl space-y-3">
        <Image src="/assets/images/piggy/quest.svg" alt="noQuest" width={144} height={144} className="mx-auto" />
        <h4 className="text-center">Kamu belum punya goals. Ayo buat sekarang</h4>
        <Link href="/parent/quest/create">
          <Image src="/assets/icons/plus.svg" alt="addQuest" width={32} height={32} className="bg-Shade-Pinkl p-2 mx-auto"/>
        </Link>
      </div>
    </div>
  );
};
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


export default function ChildrenGoalDashboard() {
  const params = useParams()
  const goals=[
    {
      title:'Night Party',
      status:'On Going',
      name:'name',
      target:100000,
      balance:50000
    },
    {
      title:'Night Party',
      status:'Pending',
      name:'name',
      target:100000,
      balance:50000
    }
  ]

  return (
    <div className="__container relative">
      <Image
        src="/assets/images/children/dashboard-background.png"
        alt="dashboard-background"
        height={600}
        width={300}
        className="absolute top-0 left-0 w-full z-0"
      />
      <div className="content-wrapper h-full relative z-20">
        <Balance balance={1000000}>
          <div className="flex space-x-2">
            <Link href={`/account/${params.id}/request-saldo`}>
            <button className="p-3 flex flex-items-center rounded-xl text-Secondary-White-1 bg-Secondary-Black-1 space-x-3">
              Request Saldo{' '}
              <Image
                src="/assets/icons/tambah-saldo.svg"
                className="-mb-1"
                width={28}
                height={28}
                alt="tambah"
              />
            </button>
            </Link>

            <Link href={`/account/${params.id}/alokasi-saldo`}>
            <button className="p-3 flex items-center rounded-xl border-2 text-Secondary-Black-1 border-Secondary-Black-1 space-x-2">
              Alokasi Saldo{' '}
              <Image
                src="/assets/icons/tarik-saldo.svg"
                className="-mb-1"
                width={28}
                height={28}
                alt="kirim"
              />
            </button>
            </Link>
          </div>
        </Balance>
        <div className="container relative bg-white h-1/2 mt-5 pt-5 pb-16 rounded-t-2xl z-50">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg">Goals</h3>

            <Link href={`/parent/children/account/${params.id}/goal-detail`}>Lihat lainnya</Link>
          </div>
          <div className="overflow-y-auto h-screen">
            { /* <Goal/> */}
            {goals.length > 0 ? (<NoGoals/>):(<Goals/>)}
          </div>
        </div>
      </div>
    </div>
  )
}
