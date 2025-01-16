import Link from 'next/link'
import React from 'react'
import logo from './icons/pic3.png'
export default function Navbar() {
  return (
    <div>
      <nav>
        <ul className='flex flex-row bg-[#6047b3] pl-10'>
            <li className='p-2 m-2  text-xl text-white ml-11'><Link href="/"><img className='h-10 rounded-full ml-2' src={logo.src} alt="" /></Link></li>
            <li className='p-2 m-3 text-xl text-white ml-6'><Link href="/">Home</Link></li>
            <li className='p-2 m-3 text-xl text-white'><Link href="/about">About Us</Link></li>
            <li className='p-2 m-3 text-xl text-white'><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}
