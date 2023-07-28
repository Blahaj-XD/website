'use client'

import { Fade as Hamburger } from 'hamburger-react'
import { getProviders, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [toggleProfileDropDown, setToggleProfileDropDown] = useState(false)
  const toggleNavbar = () => {
    setNavbarOpen((state) => !state)
  }
  const session = {
    user: undefined
  }
  return (
    <nav className="flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-black border border-gray-100 sticky">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-space-evenly">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            className="text-sm font-bold leading-relaxed inline-block mr-4 my-auto whitespace-nowrap uppercase text-white"
            href="/"
          >
            home
          </Link>
          <div className="text-white cursor-pointer text-xl leading-none px-3 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none">
            <Hamburger size={20} color="white" onToggle={toggleNavbar} />
          </div>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center' +
            (navbarOpen ? ' flex' : ' hidden')
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {session?.user ? (
              <>
                <li className="nav-item my-auto">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item my-auto">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="/courses"
                  >
                    Courses
                  </Link>
                </li>
                <li className="nav-item my-auto">
                  <div className="profile-container px-3 py-2">
                    <div
                      onClick={() =>
                        setToggleProfileDropDown((state) => !state)
                      }
                      className="profile relative group flex items-center text-xs uppercase font-bold leading-snug text-white cursor-pointer"
                    >
                      <Image
                        className="rounded-full"
                        src={session?.user.image}
                        alt="Profile Picture"
                        width={24}
                        height={24}
                      />
                      <h3 className="ml-1 text-white">{session?.user.name}</h3>
                      {toggleProfileDropDown && (
                        <div className="profile-dropdown absolute top-8 left-0 bg-white rounded-md shadow-lg text-black overflow-hidden w-full">
                          <h2 className="mt-0 p-2">Edit Profile</h2>
                          <h2 className="mb-0 p-2" onClick={() => signOut()}>
                            Sign Out
                          </h2>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              </>
            ) : (
              <>
                <li className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white">
                  <Link href="/api/auth/signin">Login</Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="/navigation/register"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
