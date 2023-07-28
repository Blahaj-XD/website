'use client'

import React from 'react'



const Balance = (bal) => {
  return <div className='bg-white shadow-lg text-black flex'>
    <div className="left">
      <h4>Total Balance</h4>
      <h2>Rp.{bal}</h2>
    </div>
    {/* fix this */}
    <img src="" alt="" />
  </div>
}
export default function ParentDashboard() {
  return (
    <>
      <div className="header flex rounded-b-lg">
        <div className="left">
          <h3>Welcome Back Parent</h3>
          <h1>Hi, Oppie</h1>
        </div>
          {/* fix this */}
          <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
      </div>
      <div className="content-wrapper">
        <Balance bal={1000000} />
        <div className="flex">
          <h1>Activitas</h1>

        </div>

      </div>
    </>
  )
}
