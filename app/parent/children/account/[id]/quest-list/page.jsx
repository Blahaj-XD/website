import Profile from '@/components/profile'
import Tabs from '@/components/tabs'
import Image from 'next/image'
export default function QuestList() {
  const user = {
    name: 'Oppie',
    balance: 1000,
    quest_done: 3,
  }

  const dummy = [
    {
      id: 1,
      title: 'Diambil',
      description: 'Kamu belum buat quest. Ayo buat sekarang',
      image: '/assets/images/piggy/quest.svg',
      alt: 'noQuest',
    },
    {
      id: 2,
      title: 'Tersedia',
      description: 'Ayo ambil tugas-tugas mu sekarang',
      image: '/assets/images/piggy/quest.svg',
      alt: 'noQuest',
    },
    {
      id: 2,
      title: 'Tersedia',
      description: 'Ayo ambil tugas-tugas mu sekarang',
      image: '/assets/images/piggy/quest.svg',
      alt: 'noQuest',
    },
    {
      id: 2,
      title: 'Tersedia',
      description: 'Ayo ambil tugas-tugas mu sekarang',
      image: '/assets/images/piggy/quest.svg',
      alt: 'noQuest',
    },
    {
      id: 2,
      title: 'Tersedia',
      description: 'Ayo ambil tugas-tugas mu sekarang',
      image: '/assets/images/piggy/quest.svg',
      alt: 'noQuest',
    },
    {
      id: 2,
      title: 'Tersedia',
      description: 'Ayo ambil tugas-tugas mu sekarang',
      image: '/assets/images/piggy/quest.svg',
      alt: 'noQuest',
    },
    {
      id: 2,
      title: 'Tersedia',
      description: 'Ayo ambil tugas-tugas mu sekarang',
      image: '/assets/images/piggy/quest.svg',
      alt: 'noQuest',
    },
  ]
  return (
    <div className="__container relative">
      <Image
        src="/assets/images/children/quest-background.png"
        alt="quest-background"
        height={600}
        width={300}
        className="absolute top-0 left-0 w-full z-0"
      />
      <Profile name={user.name} className="relative">
        <div className="bg-Shade-Pinkl text-white px-4 py-2 mt-2 rounded-xl inline-flex w-auto space-x-2">
          <Image
            src="/assets/icons/check.svg"
            alt="money"
            width={25}
            height={25}
          />{' '}
          <h3>Quest Selesai : {user.quest_done}</h3>
        </div>
        <div className="bg-Shade-Pinkl text-white px-4 py-2 mt-2 rounded-xl inline-flex w-auto space-x-2">
          <Image
            src="/assets/icons/money.svg"
            alt="money"
            width={25}
            height={25}
          />{' '}
          <h3>Pendapatan : {user.balance}</h3>
        </div>
      </Profile>

      <div className="content-wrapper h-screen relative z-20 bg-white rounded-xl pt-5">
        <Tabs data={dummy} className="mx-auto" />
      </div>
    </div>
  )
}
