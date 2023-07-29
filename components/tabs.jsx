'use client'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function TabNavigation() {
  const variants = [{ title: 'Diambil' },{title:'Tersedia'}]
  const data = [
    {
      id: 1,
      title: 'Diambil',
      hadiah:2000,
    },
    {
      id: 2,
      title: 'Tersedia',
      description: 'Ayo ambil tugas-tugas mu sekarang',
      image: '/assets/images/piggy/quest.svg',
      alt: 'noQuest',
    },
    {
      id: 3,
      title: 'Tersedia',
      description: 'Ayo ambil tugas-tugas mu sekarang',
      image: '/assets/images/piggy/quest.svg',
      alt: 'noQuest',
    },
    {
      id: 4,
      title: 'Tersedia',
      description: 'Ayo ambil tugas-tugas mu sekarang',
      image: '/assets/images/piggy/quest.svg',
      alt: 'noQuest',
    },
    {
      id: 5,
      title: 'Tersedia',
      description: 'Ayo ambil tugas-tugas mu sekarang',
      image: '/assets/images/piggy/quest.svg',
      alt: 'noQuest',
    },
  ]

  const [activeTab, setActiveTab] = React.useState('Diambil')


  const nextAction = (key,buttonCTA) => {
    if(buttonCTA === 'Diambil'){
      //post ke backend untuk selesaikan berdasarkan key
      //api.push('',)
      //key berupa id
    }
    else{
      //post ke backend untuk mengambil data berdasarkan key
      //api.push('',)
      //key berupa id
    }
  }


  const renderTabs = () => {
    return variants.map((tabData) => (
      <TabsTrigger
        key={tabData.id}
        value={tabData.title}
        onClick={() => setActiveTab(tabData.title)}
        className={
          activeTab === tabData.title
            ? 'p-3 rounded-md border-1 text-white bg-Shade-Pinkl'
            : 'p-3 rounded-md border-1 bg-Secondary-Grey-3 bg-opacity-50 text-Secondary-Grey-3'
        }
      >
        {tabData.title}
      </TabsTrigger>
    ))
  }

  const renderTabContent = () => {
    const activeData = data.filter((item) => item.title === activeTab)
    console.log(activeData)
    let buttonCTA = ''
    switch (activeTab) {
      case 'Diambil':
        buttonCTA = 'Selesaikan'
        break
      case 'Tersedia':
        buttonCTA = 'Ambil'
        break
    }

    return (
      <Card className="mt-5 mx-auto">
        <CardHeader>
          <CardTitle>{activeData[0].title}</CardTitle>
          <CardDescription>{activeData[0].description}</CardDescription>
        </CardHeader>
        <CardContent className="space-5-2">
          {activeData.map((item, index) => (
            <div
              className="flex justify-between  w-full space-x-2 my-3 p-1 rounded-xl"
              key={index}
            >
              <div className="flex-col">
                <h4>{item.judul_quest}</h4>
                <h5>Hadiah: Rp. {item.hadiah}</h5>
                <h5>Waktu: {item.tengat_waktu_tanggal}</h5>
                <button className="signIn py-0.5" onClick={nextAction(index,buttonCTA)}>{buttonCTA}</button>
              </div>
              <img
                src="/assets/images/splashScreen/flyingPiggy.png"
                alt="flying pig"
                width={150}
                height={100}
              />
            </div>
          ))}
        </CardContent>
      </Card>
    )
  }

  return (
    <Tabs defaultValue={activeTab} className="w-[400px] mx-auto">
      <TabsList className="grid w-full grid-cols-2">{renderTabs()}</TabsList>
      <TabsContent value={activeTab}>{renderTabContent()}</TabsContent>
    </Tabs>
  )
}
