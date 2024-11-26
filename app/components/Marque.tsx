'use client'
import React from 'react'
import marque1 from '../../public/marque/1.png';
import marque2 from '../../public/marque/2.png';
import marque3 from '../../public/marque/3.png';
import marque4 from '../../public/marque/4.png';
import marque5 from '../../public/marque/5.png'; 
import marque6 from '../../public/marque/6.png';
import marque7 from '../../public/marque/7.png';
import marque8 from '../../public/marque/8.png';
import marque9 from '../../public/marque/9.png';

import Image from 'next/image';

import "./style.css";


export default function Marque() {
  return (
      <div className="marquee pt-20 max-sm:hidden">
        <ul className="marquee__content">
          <div className=" marquee__item grayscale-[100%] hover:grayscale-0 opacity-50 hover:opacity-100">
            <Image height={35} src={marque1} alt="" />
          </div>
          <div className=" marquee__item grayscale-[100%] hover:grayscale-0 opacity-50 hover:opacity-100">
            <Image height={35} src={marque2} alt="" />
          </div>
          <div className=" marquee__item grayscale-[100%] hover:grayscale-0 opacity-50 hover:opacity-100">
            <Image height={35} src={marque3} alt="" />
          </div>
          <div className=" marquee__item grayscale-[100%] hover:grayscale-0 opacity-50 hover:opacity-100">
            <Image height={35} src={marque4} alt="" />
          </div>
          <div className=" marquee__item grayscale-[100%] hover:grayscale-0 opacity-50 hover:opacity-100">
            <Image height={35} src={marque5} alt="" />
          </div>
          <div className=" marquee__item grayscale-[100%] hover:grayscale-0 opacity-50 hover:opacity-100">
            <Image height={35} src={marque6} alt="" />
          </div>
          <div className=" marquee__item grayscale-[100%] hover:grayscale-0 opacity-50 hover:opacity-100">
            <Image height={35} src={marque7} alt="" />
          </div>
          <div className=" marquee__item grayscale-[100%] hover:grayscale-0 opacity-50 hover:opacity-100">
            <Image height={35} src={marque8} alt="" />
          </div>
          <div className=" marquee__item grayscale-[100%] hover:grayscale-0 opacity-50 hover:opacity-100">
            <Image height={35} src={marque9} alt="" />
          </div>
  
        </ul>

        <ul aria-hidden="true" className="marquee__content">
        <div className=" marquee__item grayscale-[100%] hover:grayscale-0 opacity-50 hover:opacity-100">
            <Image height={35} src={marque1} alt="" />
          </div>
          <div className=" marquee__item grayscale-[100%] hover:grayscale-0 opacity-50 hover:opacity-100">
            <Image height={35} src={marque2} alt="" />
          </div>
          <div className=" marquee__item grayscale-[100%] hover:grayscale-0 opacity-50 hover:opacity-100">
            <Image height={35} src={marque3} alt="" />
          </div>
          <div className=" marquee__item grayscale-[100%] hover:grayscale-0 opacity-50 hover:opacity-100">
            <Image height={35} src={marque4} alt="" />
          </div>
          <div className=" marquee__item grayscale-[100%] hover:grayscale-0 opacity-50 hover:opacity-100">
            <Image height={35} src={marque5} alt="" />
          </div>
          <div className=" marquee__item grayscale-[100%] hover:grayscale-0 opacity-50 hover:opacity-100">
            <Image height={35} src={marque6} alt="" />
          </div>
          <div className=" marquee__item grayscale-[100%] hover:grayscale-0 opacity-50 hover:opacity-100">
            <Image height={35} src={marque7} alt="" />
          </div>
          <div className=" marquee__item grayscale-[100%] hover:grayscale-0 opacity-50 hover:opacity-100">
            <Image height={35} src={marque8} alt="" />
          </div>
          <div className=" marquee__item grayscale-[100%] hover:grayscale-0 opacity-50 hover:opacity-100">
            <Image height={35} src={marque9} alt="" />
          </div>
        </ul>
      </div>
   
  )
}
