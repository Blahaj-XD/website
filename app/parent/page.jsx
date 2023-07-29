import React from 'react'
import Balance from '@/components/balance'
import Image from 'next/image'
import Lihat_lainnya from '@/components/lihat_lainnya'
import Deposit from '@components/deposit'

export default function ParentDashboard() {
  const deposits = [
    {
      type: 'in',
      task: 'Salary',
      information: 'Monthly income',
      amount: 2500,
    },
    {
      type: 'out',
      task: 'Shopping',
      information: 'Groceries',
      amount: 150,
    },
    {
      type: 'in',
      task: 'Bonus',
      information: 'Year-end bonus',
      amount: 1000,
    },
    {
      type: 'in',
      task: 'Bonus',
      information: 'Year-end bonus',
      amount: 1000,
    },
    {
      type: 'in',
      task: 'Bonus',
      information: 'Year-end bonus',
      amount: 1000,
    },
    {
      type: 'in',
      task: 'Bonus',
      information: 'Year-end bonus',
      amount: 1000,
    },
  ]

  return (
    <div className="__container relative">
      <Image
        src="/assets/images/parent/dashboard-background.png"
        alt="dashboard-background"
        height={600}
        width={300}
        className="absolute top-0 left-0 w-full z-0"
      />
      <div className="container header relative flex justify-between rounded-b-lg z-10 mt-10">
        <h1 className="text-2xl text-white">Hi, Oppie</h1>
        <Image width={45} height={45} src="/assets/icons/user.svg" alt="user" />
      </div>
      <div className="content-wrapper h-full relative z-20">
        <Balance balance={1000000}>
        <div className="flex space-x-2">
            <button className="p-3 flex items-center rounded-xl text-Secondary-White-1 bg-Secondary-Black-1 space-x-3">
              Tambah Saldo{' '}
              <Image
                src="/assets/icons/tambah-saldo.svg"
                className='-mb-1'
                width={28}
                height={28}
                alt="tambah"
              />
            </button>
            <button className="p-3 flex items-center rounded-xl border-2 text-Secondary-Black-1 border-Secondary-Black-1 space-x-2">
              Penarikan Saldo{' '}
              <Image
                src="/assets/icons/tarik-saldo.svg"
                className='-mb-1'
                width={28}
                height={28}
                alt="kirim"
              />
            </button>
          </div>
        </Balance>
        <div className="container  relative bg-white h-1/2 pt-5 pb-5 pb-16 rounded-t-2xl z-50 overflow-y-auto">
          <div className="flex justify-between">
            <h3>Aktivitas</h3>
            <Lihat_lainnya className="relative"deposits={deposits} />
          </div>
          {deposits.map((deposit, index) => (
            <Deposit key={index} {...deposit} />
          ))}
        </div>
      </div>
    </div>
  )
}
