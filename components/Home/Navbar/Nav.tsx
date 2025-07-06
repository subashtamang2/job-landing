"use client";
import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { LuNetwork } from 'react-icons/lu'

type Props = {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    }
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div className={`transition-all  ${navBg ? "bg-white shadow-md" : "fixed"} duration-200 h-[12vh] z-[10000] fixed w-full `} >
      <div className='flex items-center h-full justify-between w-[92%] mx-auto'>
        <div className='flex items-center sm:space-x-20'>

          {/* Logo */}
          <div className='flex items-center space-x-2'>
            <div className='w-10 h-10 bg-cyan-800 rounded-full flex items-center justify-center flex-col'>
              <LuNetwork className='w-5 h-5 text-white' />
            </div>
            <h1 className='text-xl hidden sm:block md:text-2xl text-cyan-800 font-bold'>DevHire</h1>
          </div>
          {/* NVLINKS */}
          <div className='hidden lg:flex items-center space-x-10'>
            {NavLinks.map((link) => {
              return <Link key={link.id} href={link.url} className='text-base hover:text-cyan-700 font-medium transition-all duration-200'
              >
                <p>{link.label}</p>
              </Link>

            })}

          </div>
        </div>
        {/* Buttons */}
        <div className='flex items-center spaxe-x-4'>
          {/* Login/register button */}
          <button className='px-8 py-2.5 text-xs sm:text-sm rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-300 transition-all duration-300'>Login / Register</button>

          {/* Job post Button */}
          <button className='px-8 py-2.5 text-sm hidden sm:block cursor-pointer rounded-lg bg-cyan-700 hover:bg-cyan-900 transition-all duration-300 text-white'>Job Post</button>
          {/* Theme Toggler */}
          {/* Burger menu */}
          <HiBars3BottomRight onClick={openNav} className=' w-8 h-8 cursor-pointer text-black lg:hidden' />

        </div>
      </div>
    </div>
  )
}

export default Nav