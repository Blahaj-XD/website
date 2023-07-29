import Navbar from "@components/navbar"
import SWR from 'swr'
import Api from '@/utils/api'
const fetcher = uri => Api.get(uri).then(res => res.data)

export default function ChildrenHistory({ params }){
  // const {data,error} = SWR('',fetcher)
  return <div className="__container">
    <Navbar name="History" />
    <h1>Account {params.id}</h1>
  </div>
}