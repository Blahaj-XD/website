'use client'

import Balance from '@components/balance'
import Deposit from '@components/deposit'
import api, { fetcher } from '@utils/api'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import useSWR from 'swr'

export default function ChildrenDashboard({ params }) {
  const router = useRouter()
  const kidID = params.id
  // const [transactions, setTransactions] = useState([])

  const { data: kid, isLoading: kidLoading } = useSWR(
    `/kids/${kidID}/dashboard/bank/`,
    fetcher,
    {
      onError: async (error) => {
        if (error.response && error.response.status === 503) {
          await signOut({ redirect: false })
          router.push('/login')
        }
      },
    }
  )
  const { data: transactions, isLoading: transactionLoading } = useSWR(
    `/kids/${kidID}/dashboard/bank/transactions/`,
    fetcher,
    {
      onError: async (error) => {
        if (error.response && error.response.status === 503) {
          await signOut({ redirect: false })
          router.push('/login')
        }
      },
    }
  )

  useEffect(() => {
    // api.get(`/kids/${kidID}/dashboard/bank/`).then((res) => {
    //   setKid(res.data)
    // })
    // api.get(`/kids/${kidID}/dashboard/bank/transactions`).then((res) => {
    //   setTransactions(res.data.items)
    // })

    api
      .get('/auth/verify')
      .then(async (res) => {
        if (res.status === 500) {
          await signOut({ redirect: false })
          router.push('/login')
        } else {
          res.data.verified ? null : router.push('/login')
        }
      })
      .catch(async (err) => {
        if (err.response.status === 401 || err.response.status === 500) {
          await signOut({ redirect: false })
          router.push('/login')
        }
      })
  }, [kidID])

  return (
    <div className="__container relative">
      <Image
        src="/assets/images/children/dashboard-background.png"
        alt="dashboard-background"
        height={600}
        width={300}
        className="absolute top-0 left-0 w-full z-0"
      />
      <div className="container header relative flex justify-between rounded-b-lg z-10 mt-10">
        <h1 className="text-2xl text-white">
          {kidLoading ? '...' : `Hi ${kid.user.full_name}`}
        </h1>
        <Image width={45} height={45} src="/assets/icons/user.svg" alt="user" />
      </div>
      <div className="content-wrapper h-full relative z-20">
        <Balance balance={kidLoading ? 0 : kid.balance}>
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
            {/* <Lihat_lainnya className="relative" deposits={transactions} /> */}
          </div>
          <div className="overflow-y-auto">
            {!transactionLoading &&
              transactions.items.map((transaction, index) => (
                <Deposit
                  key={index}
                  amount={transaction.amount}
                  task={transaction['transaction_type']}
                  information={''}
                  type={
                    transaction['transaction_type'] === 'Transfer In'
                      ? 'in'
                      : 'out'
                  }
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
