'use client'

import Balance from '@components/balance'
import Deposit from '@components/deposit'
import Lihat_lainnya from '@components/lihat_lainnya'
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

const Goal = ({ Title, tanggal_tengat, status, balance, target }) => {
  return (
    <div className="flex flex-row items-center flex-nowrap space-x-2 shadow-lg p-2 rounded-2xl bg-white"></div>
  )
}
export default function ChildrenGoalDashboard() {
  const params = useParams()
  const deposits = [
    {
      type: 'goal',
      task: 'Top up roblox',
      target: 'Monthly income',
      amount: 2500,
    },
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

            {/* <Lihat_lainnya className="relative" deposits={deposits} /> */}
          </div>
          <div className="overflow-y-auto h-screen">
            { /* <Goal/> */}


          </div>
        </div>
      </div>
    </div>
  )
}
