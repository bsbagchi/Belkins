'use client';

import React from 'react';
import Image from 'next/image';
import Logo from '../../public/logo.svg';
import Link from 'next/link';



export default function Navbar() {
  return (
    <div className='px-[7%] h-20 shadow-md sticky z-40 top-0 bg-white flex items-center justify-between '>
      <nav className='flex gap-10'>
        <Link href={'/'}><Image className='w-24' src={Logo} alt='' /> </Link>
        <ul className=' items-center gap-10 hidden  min-[1070px]:flex'>
            <Link className='hover:text-orange-600' href={'#'}><li>What we do</li></Link>
            <Link className='hover:text-orange-600' href={'#'}><li>Solution</li></Link>
            <Link className='hover:text-orange-600' href={'#'}><li>Customer Success</li></Link>
            <Link className='hover:text-orange-600' href={'#'}><li>Learn</li></Link>
            <Link className='hover:text-orange-600' href={'#'}><li>Company</li></Link>
            <Link className='hover:text-orange-600' href={'#'}><li>Pricing</li></Link>
        </ul>
        
      </nav>
      
      <button className='bg-orange-600 hover:bg-opacity-80 font-semibold text-sm h-10  w-32 items-center text-center rounded-md text-white'>Book a call</button>
     
    </div>
  )
}
