import React from 'react'
import marque1 from '../../public/marque/marque1.svg';
import marque2 from '../../public/marque/marque2.svg';
import marque3 from '../../public/marque/marqjue3.svg';
import marque4 from '../../public/marque/marque4.svg';
import marque5 from '../../public/marque/marque5.svg';
import marque6 from '../../public/marque/marque6.svg';
import marque7 from '../../public/marque/marque7.svg';
import marque8 from '../../public/marque/marque8.svg';
import marque9 from '../../public/marque/marque8.svg';
import marque10 from '../../public/marque/marque10.svg';
import marque11 from '../../public/marque/marque11.svg';
import marque12 from '../../public/marque/marque12.svg';
import "./style.css";
import Image from 'next/image';

export default function Marque() {
  return (
    <div className=" main__container pt-36 pb-4 ">
    
      <section className="enable-animation ">
        

        <div className="marquee">
          <ul className="marquee__content ">
            <div className=" marquee__item grayscale-[100%] hover:grayscale-0 opacity-50 hover:opacity-100">
              <Image height={35}  src={marque1} alt="" />
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
          </ul>

          <ul aria-hidden="true" className="marquee__content ">
            <div className=" marquee__item grayscale-[100%] hover:grayscale-0 opacity-50 hover:opacity-100">
              <Image height={35} src={marque7} alt="" />
            </div>
            <div className=" marquee__item grayscale-[100%] hover:grayscale-0 opacity-50 hover:opacity-100">
              <Image height={35} src={marque8} alt="" />
            </div>
            <div className=" marquee__item grayscale-[100%] hover:grayscale-0 opacity-50 hover:opacity-100">
              <Image height={35} src={marque9} alt="" />
            </div>
            <div className=" marquee__item grayscale-[100%] hover:grayscale-0 opacity-50 hover:opacity-100">
              <Image height={35} src={marque10} alt="" />
            </div>
            <div className=" marquee__item grayscale-[100%] hover:grayscale-0 opacity-50 hover:opacity-100">
              <Image height={35} src={marque11} alt="" />
            </div>
            <div className=" marquee__item grayscale-[100%] hover:grayscale-0 opacity-50 hover:opacity-100">
              <Image height={35} src={marque12} alt="" />
            </div>
          </ul>
        </div>
      </section>
    </div>
  )
}
