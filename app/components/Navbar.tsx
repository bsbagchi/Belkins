'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../public/logo.svg';
import Link from 'next/link';

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="px-3 md:px-[7%] h-20 shadow-md sticky z-40 top-0 bg-white flex items-center justify-between">
      <div className="hidden max-sm:flex items-center gap-4">
        <div onClick={() => setSidebar(!sidebar)} className="space-y-1">
          <div className="w-7 h-1 bg-gray-600 rounded-md"></div>
          <div className="w-7 h-1 bg-gray-600 rounded-md"></div>
          <div className="w-7 h-1 bg-gray-600 rounded-md"></div>
        </div>
        <Link href={'/'}>
          <Image className="w-24 max-sm:block hidden" src={Logo} alt="Logo" />
        </Link>
      </div>

      <nav className="flex items-center gap-10">
        <Link href={'/'}>
          <Image className="w-24 max-sm:hidden" src={Logo} alt="Logo" />
        </Link>
        <ul className="items-center gap-10 hidden min-[1070px]:flex">
          <Link className="hover:text-orange-600" href={'#1'}>
            <li>HOME</li>
          </Link>
          <Link className="hover:text-orange-600" href={'#2'}>
            <li>ABOUT US</li>
          </Link>
          <Link className="hover:text-orange-600" href={'#3'}>
            <li>CASE STUDIES</li>
          </Link>
          <Link className="hover:text-orange-600" href={'#4'}>
            <li>INDUSTRIES</li>
          </Link>
          <Link className="hover:text-orange-600" href={'#5'}>
            <li>WHY CLOSERGOD</li>
          </Link>
          <Link className="hover:text-orange-600" href={'#6'}>
            <li>CONTACT US</li>
          </Link>
        </ul>
      </nav>

      <button className="bg-orange-600 hover:bg-opacity-80 font-semibold text-sm h-10 w-32 items-center text-center rounded-md text-white">
        Book a call
      </button>

      <div
        className={`flex px-4 absolute bg-white top-[80.2px] w-1/2 left-0 h-[100vh] ease-in-out duration-500 delay-150 ${
          sidebar ? `translate-x-0` : `-translate-x-[100%]`
        } transition-transform`}
      >
        <ul className="space-y-5">
          
            <li onClick={()=>{setSidebar(!sidebar)}}><Link className="hover:text-orange-600" href={'#1'}>HOME</Link></li>
          
          
            <li onClick={()=>{setSidebar(!sidebar)}}><Link className="hover:text-orange-600" href={'#2'}>ABOUT US</Link></li>
          
          
            <li onClick={()=>{setSidebar(!sidebar)}}><Link className="hover:text-orange-600" href={'#3'}>CASE STUDIES</Link></li>
          
          
            <li onClick={()=>{setSidebar(!sidebar)}}><Link className="hover:text-orange-600" href={'#4'}>INDUSTRIES</Link></li>
          
          
            <li onClick={()=>{setSidebar(!sidebar)}}><Link className="hover:text-orange-600" href={'#5'}>WHY CLOSERGOD</Link></li>
          
          
            <li onClick={()=>{setSidebar(!sidebar)}}><Link className="hover:text-orange-600" href={'#6'}>CONTACT US</Link></li>
        </ul>
      </div>
    </div>
  );
}
