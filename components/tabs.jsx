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
  const data = [
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
  ]

  const [activeTab, setActiveTab] = React.useState('Diambil')

  const renderTabs = () => {
    return data.map((tabData) => (
      <TabsTrigger
        key={tabData.id}
        value={tabData.title}
        onClick={() => setActiveTab(tabData.title)}
        className={
          activeTab == tabData.title
            ? 'p-3 border-1 text-white bg-Shade-Pinkl'
            : 'p-3 border-1 bg-Secondary-Grey-3 bg-opacity-50 text-Secondary-Grey-3'
        }
      >
        {tabData.title}
      </TabsTrigger>
    ))
  }

  const renderTabContent = () => {
    const activeData = data.find((item) => item.title === activeTab)
    let buttonCTA = ''
    switch (activeTab){
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
          <CardTitle>{activeData.title}</CardTitle>
          <CardDescription>{activeData.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-5-2">
          <div className="flex justify-center w-full space-x-2 my-3 p-1 rounded-xl">
            <div className="flex-col">
              <h4>Kasih Makan Kucing</h4>
              <h5>Hadiah: Rp.10.000</h5>
              <h5>Waktu: 3 jam lagi</h5>
              <button className="signIn py-0.5">{buttonCTA}</button>
            </div>
            <img
              src="/assets/images/splashScreen/flyingPiggy.png"
              alt="flying pig"
              width={150}
              height={100}
            />
          </div>

        </CardContent>
      </Card>
    )
  }

  return (
    <Tabs defaultValue={activeTab} className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">{renderTabs()}</TabsList>
      <TabsContent value={activeTab}>{renderTabContent(activeTab)}</TabsContent>
    </Tabs>
  )
}
