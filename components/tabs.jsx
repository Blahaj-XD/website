'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

import { fetcher } from '@utils/api'

import useSWR from 'swr'
import { Skeleton } from './ui/skeleton'

export default function TabNavigation() {
  const variants = [{ title: 'Diambil' }, { title: 'Tersedia' }]

  const {
    data: quests,
    error,
    isLoading,
  } = useSWR('/parent-admin/quests', fetcher)

  const [activeTab, setActiveTab] = React.useState('Diambil')

  const nextAction = (key, buttonCTA) => {
    if (buttonCTA === 'Diambil') {
      //post ke backend untuk selesaikan berdasarkan key
      //api.push('',)id
      //key berupa
    } else {
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

  const renderTabContent = (data) => {
    const activeData = data.items
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
      <>
        {!isLoading &&
          activeData.map((item, index) => (
            <Card className="my-6 mx-auto rounded-[10px] border-2 border-Secondary-Grey-3">
              <CardContent className="space-y-2">
                <div
                  className="flex justify-between  w-full space-x-2 pt-6 rounded-xl"
                  key={index}
                >
                  <div className="flex-col">
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <div className="flex space-x-2 items-center">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.5 0H6V0.75H1.5V0ZM0.75 1.5V0.75H1.5V1.5H0.75ZM0.75 6V1.5H0V6H0.75ZM1.5 6.75V6H0.75V6.75H1.5ZM6 6.75V7.5H1.5V6.75H6ZM6.75 6V6.75H6V6H6.75ZM6.75 1.5H7.5V6H6.75V1.5ZM6.75 1.5V0.75H6V1.5H6.75ZM3.375 1.125H4.125V1.875H5.25V2.625H3V3.375H5.25V5.625H4.125V6.375H3.375V5.625H2.25V4.875H4.5V4.125H2.25V1.875H3.375V1.125Z"
                          fill="#141414"
                        />
                      </svg>

                      <h5 className="text-sm">Hadiah: Rp. {item.reward}</h5>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 10 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 0.75C2.92969 0.75 1.25 2.42969 1.25 4.5C1.25 6.57031 2.92969 8.25 5 8.25C7.07031 8.25 8.75 6.57031 8.75 4.5C8.75 2.42969 7.07031 0.75 5 0.75Z"
                          stroke="black"
                          stroke-width="0.625"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M5 2V4.8125H6.875"
                          stroke="black"
                          stroke-width="0.625"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <h5 className="text-sm">Waktu: 3 Jam lagi</h5>
                    </div>
                    <button
                      className="signIn mt-4 rounded-[5px]"
                      onClick={nextAction(index, buttonCTA)}
                    >
                      {buttonCTA}
                    </button>
                  </div>
                  <img
                    src="/assets/images/splashScreen/flyingPiggy.png"
                    alt="flying pig"
                    className="max-w-[100px] max-h-[100px]"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
      </>
    )
  }

  return (
    <Tabs defaultValue={activeTab} className="w-[400px] mx-auto">
      <TabsList className="grid w-full grid-cols-2">{renderTabs()}</TabsList>
      <TabsContent value={activeTab}>
        {isLoading && (
          <Card className="mt-5 mx-auto">
            <CardHeader>
              <CardTitle>
                <Skeleton className="w-full h-4 rounded-full bg-Secondary-Grey-3" />
              </CardTitle>
              <CardDescription>
                <Skeleton className="w-full h-4 rounded-full bg-Secondary-Grey-3" />
              </CardDescription>
            </CardHeader>
            <CardContent className="space-5-2">
              <div className="flex justify-between  w-full space-x-2 my-3 p-1 rounded-xl">
                <div className="flex-col">
                  <Skeleton className="w-1/2 h-4 rounded-full bg-Secondary-Grey-3" />
                  <Skeleton className="w-1/2 h-4 rounded-full bg-Secondary-Grey-3" />
                  <Skeleton className="w-1/2 h-4 rounded-full bg-Secondary-Grey-3" />
                  <button className="signIn py-0.5" disabled>
                    <Skeleton className="w-1/2 h-4 rounded-full bg-Secondary-Grey-3" />
                  </button>
                </div>
                <Skeleton className="w-[150px] h-[100px] rounded-full bg-Secondary-Grey-3" />
              </div>
            </CardContent>
          </Card>
        )}
        {!isLoading && !error && quests && renderTabContent(quests)}
      </TabsContent>
    </Tabs>
  )
}
