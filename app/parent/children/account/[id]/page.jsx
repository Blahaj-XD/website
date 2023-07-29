import React from 'react'
import Balance from '@/components/balance'
import Image from 'next/image'
import Lihat_lainnya from '@/components/lihat_lainnya'
import Deposit from '@components/deposit'

export default function ChildrenDashboard() {
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
  ]

  return (
    <div className="__container relative">
      {/* <div className="__dashboard-background"></div> */}
      <div className="container header flex justify-between rounded-b-lg z-10 mt-10">
        <h1 className="text-xl">Hi, Oppie</h1>
        <Image width={45} height={45} src="/assets/icons/user.svg" alt="user" />
      </div>
      <div className="content-wrapper">
        <Balance balance={1000000}>
          <div className="flex flex-row items-center flex-nowrap space-x-2 shadow-lg p-2 rounded-2xl">
            <div className="flex items-center space-x-2">
              <Image
                width={45}
                height={45}
                src="/assets/images/piggy-mission.svg"
                alt="user"
              />
              <div className="flex flex-col">
                <h5 className="text-2xs">Kerjakan Quest Sekarang</h5>
                <h4 className="text-xs">Untuk Mendapatkan Uang!</h4>
                <h3></h3>
              </div>
            </div>
            <Image
              width={30}
              height={30}
              src="/assets/icons/view-task.svg"
              alt="user"
              className="mt-2"
            />
          </div>
        </Balance>
        <div className="container rounded-t-lg">
          <div className="flex justify-between">
            <h3>Aktivitas</h3>
            <Lihat_lainnya deposits={deposits} />
          </div>
          {deposits.map((deposit, index) => (
            <Deposit key={index} {...deposit} />
          ))}
        </div>
      </div>
    </div>
  )
}
