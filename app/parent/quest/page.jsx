'use client'
import Navbar from '@components/navbar'
import TabNavigation from '@components/tabs'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const NoQuest = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="bg-Secondary-White-1 p-5 w-64 text-center border-2 shadow-xl space-y-3 -mt-32">
        <Image
          src="/assets/images/piggy/quest.svg"
          alt="noQuest"
          width={144}
          height={144}
          className="mx-auto"
        />
        <h4 className="text-center">
          Kamu belum buat quest. Ayo buat sekarang
        </h4>
        <Link href="/parent/quest/create">
          <Image
            src="/assets/icons/plus.svg"
            alt="addQuest"
            width={32}
            height={32}
            className="bg-Shade-Pinkl p-2 mx-auto"
          />
        </Link>
      </div>
    </div>
  )
}

const QuestList = () => {
  return <TabNavigation />
}
export default function Quest() {
  //fetch
  // const {data:quest, error} = SWR('/')

  const quest = ['2']
  const router = useRouter()
  return (
    <div>
      <Navbar
        name="Quest"
        action={() => {
          router.back()
        }}
      />
      {quest.length === 0 ? <NoQuest /> : <QuestList quest={quest} />}
    </div>
  )
}
