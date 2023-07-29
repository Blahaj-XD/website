'use client'
import Balance from '@components/balance'
import Deposit from '@components/deposit'
import Lihat_lainnya from '@components/lihat_lainnya'
import { Skeleton } from '@components/ui/skeleton'
import { fetcher } from '@utils/api'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { useState } from 'react'
import useSWR from 'swr'

export const Activity = () => {
  const [empty, setEmpty] = useState(true)

  const {
    data: parentBankTransactions,
    error: parentBankTransactionsError,
    isLoading: parentBankTransactionsIsLoading,
  } = useSWR('/parent-admin/bank/transactions', fetcher, {
    onError: async (error) => {
      if (error.response && error.response.status === 404) {
        console.log('EMPTY!!')
        setEmpty(true)
        return
      }
      if (error.response && error.response.status === 503) {
        await signOut()
      }
    },
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error.status === 404) {
        setEmpty(true)
        return
      }
      if (retryCount >= 3) return
    },
    onSuccess: (data) => {
      if (data.items.length === 0) {
        setEmpty(true)
      } else {
        setEmpty(false)
      }
    },
  })
  return (
    <>
      {empty && parentBankTransactionsIsLoading && (
        <div className="container relative bg-Secondary-White-1 h-screen pt-8 pb-5 rounded-t-[30px] z-50 overflow-y-auto">
          <div className="flex justify-between">
            <h3 className="font-bold text-xl">Aktivitas</h3>
            <p className="text-lg font-bold text-Shade-Pinkl">Lihat Lainnya</p>
          </div>
          <Skeleton className="p-3 max-w-md h-16 bg-Secondary-Grey-3 rounded-xl my-5"></Skeleton>
          <Skeleton className="p-3 max-w-md h-16 bg-Secondary-Grey-3 rounded-xl my-5"></Skeleton>
          <Skeleton className="p-3 max-w-md h-16 bg-Secondary-Grey-3 rounded-xl my-5"></Skeleton>
          <Skeleton className="p-3 max-w-md h-16 bg-Secondary-Grey-3 rounded-xl my-5"></Skeleton>
        </div>
      )}
      {empty && (
        <div className="container relative bg-Secondary-White-1 h-screen pt-8 pb-5 rounded-t-[30px] z-50 overflow-y-auto">
          <div className="flex justify-between">
            <h3 className="font-bold text-xl">Aktivitas</h3>
            <p className="text-lg font-bold text-Shade-Pinkl">Lihat Lainnya</p>
          </div>
          <h1 className="text-xl font-bold text-center mt-10">
            Tidak ada aktivitas
          </h1>
        </div>
      )}
      {!empty &&
        !parentBankTransactionsIsLoading &&
        !parentBankTransactionsError && (
          <div className="container relative bg-Secondary-White-1 h-screen pt-8 pb-5 rounded-t-[30px] z-50 overflow-y-auto">
            <div className="flex justify-between">
              <h3 className="font-bold text-xl">Aktivitas</h3>
              <Lihat_lainnya
                className="relative"
                deposits={parentBankTransactions}
              />
            </div>
            {!parentBankTransactionsIsLoading &&
              parentBankTransactions.items.map((transaction, index) => (
                <Deposit
                  key={index}
                  amount={transaction.amount}
                  task={
                    transaction.kid_name === '-'
                      ? 'Top Up'
                      : transaction.kid_name
                  }
                  information={''}
                  type={
                    transaction['transaction_type'] === 'Transfer In'
                      ? 'in'
                      : 'out'
                  }
                />
              ))}
          </div>
        )}
    </>
  )
}

export default function ParentDashboard() {
  const { status, data } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login')
    },
  })

  const {
    data: parentBankAccountInfo,
    error: parentBankAccountInfoError,
    isLoading: parentBankAccountInfoIsLoading,
  } = useSWR('/parent-admin/bank/', fetcher, {
    onError: async (error) => {
      if (error.response && error.response.status === 503) {
        await signOut()
      }
    },
  })

  return (
    <div className="__container relative">
      <Image
        src="/assets/images/parent/dashboard-background.png"
        alt="dashboard-background"
        height={600}
        width={300}
        className="absolute top-0 left-0 w-full z-0"
      />
      {status === 'loading' && (
        <div className="container header relative flex justify-between rounded-b-lg z-10 mt-10">
          <div className="flex flex-col space-y-4">
            <Skeleton className="bg-Secondary-White w-48 h-6 rounded-full" />
            <Skeleton className="bg-Secondary-White w-24 h-6 rounded-full" />
          </div>
          <Skeleton className="bg-Secondary-White w-[45px] h-[45px] rounded-xl" />
        </div>
      )}
      {status === 'authenticated' && (
        <div className="container header relative flex justify-between rounded-b-lg z-10 mt-10">
          <h1 className="text-2xl text-white">
            Hi, {data.token.user['full_name']}
          </h1>
          <img
            width={45}
            height={45}
            src={`https://hostedboringavatars.vercel.app/api/beam?name=${data.token.user['full_name']}`}
            alt="user"
          />
        </div>
      )}
      <div className="content-wrapper h-full relative z-20">
        <Balance
          balance={
            parentBankAccountInfoIsLoading
              ? 0
              : parentBankAccountInfo
              ? parentBankAccountInfo.balance
              : 0
          }
        >
          <div className="flex space-x-2">
            <button className="p-3 flex items-center rounded-xl text-Secondary-White-1 bg-Secondary-Black-1 space-x-3">
              Tambah Saldo{' '}
              <Image
                src="/assets/icons/tambah-saldo.svg"
                className="-mb-1"
                width={28}
                height={28}
                alt="tambah"
              />
            </button>
            <button className="p-3 flex items-center rounded-xl border-2 text-Secondary-Black-1 border-Secondary-Black-1 space-x-2">
              Penarikan Saldo{' '}
              <Image
                src="/assets/icons/tarik-saldo.svg"
                className="-mb-1"
                width={28}
                height={28}
                alt="kirim"
              />
            </button>
          </div>
        </Balance>
        <Activity />
      </div>
    </div>
  )
}
