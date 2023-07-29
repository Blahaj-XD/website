'use client'
import useSWR from 'swr'
import Diagram from '@/components/diagram'
import DragDropFile from '@components/dragDropile'

function fetcher(){
  return fetch('/api/dashboard').then(res => res.json())
}

export default function Dashboard(){
  // const { data, error, isLoading  } = useSWR('/api/dashboard', fetcher)

  // if (error) return <div>failed to load</div>
  // if (isLoading) return <div>loading...</div>
  return (
    <>
      <div class="text-center">dashboard</div>
      <Diagram/>
      <DragDropFile/>
    </>
  )
}