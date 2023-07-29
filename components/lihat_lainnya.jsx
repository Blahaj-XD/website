'use client'

import { Drawer } from 'vaul'
import Deposit from '@/components/deposit'
export default function MyDrawer({ deposits }) {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild className="text-Shade-Pinkl">
        <button>Lihat Lainnya</button>
      </Drawer.Trigger>
      <Drawer.Overlay className="fixed inset-0 bg-black/40" />
      <Drawer.Portal>
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0 z-50">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4">
                History Transaksi
              </Drawer.Title>
              <div className="space-y-4">
                {deposits.map((deposit, index) => {
                  return <Deposit key={index} {...deposit} />
                })}
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
