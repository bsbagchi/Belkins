'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.jpg';
import linedin from '../../public/icons/linkedin.svg';
import youtube from '../../public/icons/youtube.svg';
import fb from '../../public/icons/fb.svg';
import insta from '../../public/icons/inta.svg';
import twitter from '../../public/icons/twitter.svg';


export default function Footer() {
  return (
    <div id='footer' className='px-[7%] py-10  bg-white flex flex-wrap max-sm:space-y-4 justify-between  items-center'>
      <div> 
        <div className='pb-5'>
          <Image width={100} src={logo} alt='' />
        </div>
        <ul className='space-y-2 opacity-70 text-lg'>
          <Link href='tel:+919660657811'><li>+91 96606 57811</li></Link>
         <Link href='mailto:sales@closergod.com'> <li>sales@closergod.com</li></Link>
       <Link href='mailto:info@closergod.com'> <li>info@closergod.com</li></Link>
        </ul>
        <div className='flex gap-3 pt-5'>
          <div className='w-10 h-10 rounded-full flex items-center justify-center bg-black bg-opacity-5 hover:bg-opacity-10 group'>
            <Link target='blank' href='https://www.linkedin.com/company/closer-god/?viewAsMember=true'><Image className='group-hover:opacity-60 opacity-40' src={linedin} alt='' /></Link>
          </div>
          <div className='w-10 h-10 rounded-full flex items-center justify-center bg-black bg-opacity-5 hover:bg-opacity-10 group'>
            <Link href='#'><Image className='group-hover:opacity-60 opacity-40' src={youtube} alt='' /></Link>
          </div>
          <div className='w-10 h-10 rounded-full flex items-center justify-center bg-black bg-opacity-5 hover:bg-opacity-10 group'>
            <Link href='#'><Image className='group-hover:opacity-60 opacity-40' src={insta} alt='' /></Link>
          </div>
          <div className='w-10 h-10 rounded-full flex items-center justify-center bg-black bg-opacity-5 hover:bg-opacity-10 group'>
            <Link href="#"><Image className='group-hover:opacity-60 opacity-40' src={fb} alt='' /></Link>
          </div>
          <div className='w-10 h-10 rounded-full flex items-center justify-center bg-black bg-opacity-5 hover:bg-opacity-10 group'>
            <Link href='#'><Image className='group-hover:opacity-60 opacity-40' src={twitter} alt='' /></Link>
          </div>
        </div>
      </div>

      <div className='flex  items-center'>
        <ul className='space-y-2 text-lg '>
          <li className='opacity-60 hover:text-orange-600 hover:opacity-100'>
            <Link href='#1'>HOME</Link>
          </li>
          <li className='opacity-60 hover:text-orange-600 hover:opacity-100'>
            <Link href='#2'>ABOUT US</Link>
          </li>
          <li className='opacity-60 hover:text-orange-600 hover:opacity-100'>
            <Link href='#3'>CASE STUDIES</Link>
          </li>
        </ul>
      </div>

      <div className='flex flex-col items-center'>
        <ul className='space-y-2 text-lg'>
          <li className='opacity-60 hover:text-orange-600 hover:opacity-100'>
            <Link href='#4'>INDUSTRIES</Link>
          </li>
          <li className='opacity-60 hover:text-orange-600 hover:opacity-100'>
            <Link href='#6'>WHY CLOSERGOD</Link>
          </li>
          <li className='opacity-60 hover:text-orange-600 hover:opacity-100'>
            <Link href='#footer'>CONTACT US</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
