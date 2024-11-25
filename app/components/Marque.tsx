'use client'
import React from 'react'
import marque1 from '../../public/marque/Actuate logo.jpg';
import marque2 from '../../public/marque/cisco logo.jpg';
import marque3 from '../../public/marque/microsoft_logo.jpg';
import marque4 from '../../public/marque/reliance_logo.jpg';
import marque5 from '../../public/marque/salesforce_logo (1).jpg';
import marque6 from '../../public/marque/swiggy_in_logo.jpg';
import marque7 from '../../public/marque/tech_mahindra_logo.jpg';
import marque8 from '../../public/marque/zoho_logo.jpg';

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
          
        </ul>
      </div>
   
  )
}
