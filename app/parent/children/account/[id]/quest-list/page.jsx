import React from 'react'
import Balance from '@/components/balance'
import Image from 'next/image'
import Lihat_lainnya from '@components/lihat_lainnya'
import Deposit from '@components/deposit'

export default function QuestList() {
  const user = {
    name: 'Oppie',
    balance: 1000,
    quest_done:3,
  }
  return (
    <div className="__container relative">
      <Image
        src="/assets/images/children/quest-background.png"
        alt="quest-background"
        height={600}
        width={300}
        className="absolute top-0 left-0 w-full z-0"
      />
      <div className="container header relative flex justify-between rounded-b-lg z-10 mt-10">
        <Image width={45} height={45} src="/assets/icons/user.svg" alt="user" />
        <h1 className="text-2xl text-white">Hi, Oppie</h1>
      </div>
      <div className="my-4 px-2 py-4 w-5/6 mx-auto border-2 text-black flex flex-col items-center rounded-xl bg-white">
        <div className="balance-icon border-2 rounded-full px-2 py-1 mx-auto space-x-2 inline-flex items-center">
          <Image src="/assets/icons/balance.svg" width={24} height={24} />
          <p>Balance</p>
        </div>
        <h1 className="text-center text-2xl px-1 bg-Shade-Pinkl">Pendapatan : Rp.{user.quest_done}</h1>
        <h1 className="text-center text-2xl px-1 bg-Shade-Pinkl">Pendapatan : Rp.{user.balance}</h1>
      </div>
      <div className="content-wrapper h-full relative z-20">
        <Balance balance={1000000}>
          <div className="flex flex-row items-center flex-nowrap space-x-2 shadow-lg p-2 rounded-2xl bg-white">
            <div className="flex items-center space-x-2">
              <Image
                width={45}
                height={45}
                src="/assets/images/piggy/mission.svg"
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
        <div className="container relative bg-white h-1/2 mt-5 pt-5 pb-16 rounded-t-2xl z-50">
          <div className="flex justify-between">
            <h3>Aktivitas</h3>
            <Lihat_lainnya className="relative" deposits={deposits} />
          </div>
          <div className="overflow-y-auto">
            {deposits.map((deposit, index) => (
              <Deposit key={index} {...deposit} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
