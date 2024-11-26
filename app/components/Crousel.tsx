'use client';
import React, { useRef} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import crousel1 from '../../public/crousel/bigpic/1.png';
import crousel2 from '../../public/crousel/bigpic/2.png';
import crousel3 from '../../public/crousel/bigpic/3.png';
import crousel4 from '../../public/crousel/bigpic/4.png';
import actuate from '../../public/marque/Actuate logo.jpg';
import nyxwolves from '../../public/crousel/nyxwolves_logo.jpg';
import salesforce from '../../public/crousel/salesforce_logo.jpg';
import microsoftlogo from '../../public/crousel/microsoft_logo.jpg';
import arrow from '../../public/icons/arrow.svg';

export default function Crousel() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Dynamically calculate scroll amount based on screen size
    const calculateScrollAmount = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) return 1400; // Large screens
      if (screenWidth >= 768) return 380; // Medium screens
      return 384; // Small screens
    };
  
    const handleLeftClick = () => {
      const scrollAmount = calculateScrollAmount();
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth',
        });
      }
    };
  
    const handleRightClick = () => {
      const scrollAmount = calculateScrollAmount();
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    };
  

  return (
    <div id='3'>
        <div className="flex  justify-between px-[5%]">
          <div>
            <h1 className="text-3xl md:text-[3.1rem] font-semibold leading-tight">How companies succeed with us</h1>
            <p className='opacity-50 text-xl leading-[40px]'>Here’s how businesses succeeded after switching to our lead generation services.</p>
          </div>
          <div className='max-sm:hidden md:hidden lg:flex'>
            <button  onClick={handleLeftClick} className="h-16 w-16 m-4 rounded-full border-2"><p className=' font-bold text-3xl'>{'<'}</p></button>
            <button onClick={handleRightClick} className="h-16 w-16 m-4 rounded-full border-2"><p className=' font-bold text-3xl'>{'>'}</p></button>
            </div>
          </div>
       <div ref={scrollContainerRef}  className="overflow-x-scroll scroll-hide snap-x ">
        <div
          
          className={`pl-1 md:px-[5%] py-8 flex min-w-max max-sm:gap-5 md:gap-10  `}
        >
          {/* 1 */}
          <div className='lg:p-6 rounded-3xl  overflow-hidden   max-sm:h-[450px] h-[470px]  max-sm:w-[330px] md:w-[370px] lg:w-[70vw] bg-white snap-center'>
          
            <div className='flex justify-center iteams-center  lg:float-end rounded-xl overflow-hidden max-sm:h-[200px]  md:h-[200px] lg:h-[350px]   lg:w-1/2'>
                <Image className='object-cover' src={crousel1} alt=''/>
            </div>
            <div className='px-2 py-4 max-sm:py-2  lg:w-[700px]'>
                <Image className="w-4 md:w-[60px] h-5 md:h-10 lg:h-14 max-sm:w-[50px] lg:w-[140px] " src={actuate} alt=""/>
                <h1 className='max-sm:text-sm text-2xl  font-semibold py-4 lg:py-6 opacity-80'>Email and linkedin outreach pulls in 40 appointments in 90 days beating the sales team</h1>
                <div className='flex gap-8 lg:gap-16 '>
                    <div>
                        <h1 className='max-sm:text-xl text-2xl lg:text-3xl font-bold text-orange-600'>40</h1>
                    <p className='text-sm lg:text-xl max-sm:text-xs opacity-70 max-sm:py-0 py-1 lg:py-2'>Booked appointments in <br className='hidden lg:block'/> 15 months</p>
                    </div>
                    <div>
                        <h1 className='text-2xl lg:text-3xl font-bold text-orange-600'>5</h1>
                        <p className='text-sm lg:text-xl opacity-70 py-1 lg:py-2'>Close deals</p>
                    </div>
                    
                </div>
                <Link href='https://calendly.com/abhishek-07x2/30min?month=2024-11'><div className='pt-4  flex items-center gap-5 group w-fit' ><div className='h-10 w-10 lg:h-12 lg:w-12 rounded-full border-2 border-orange-600 group-hover:bg-orange-200 flex justify-center items-center' ><Image  src={arrow} alt=""/></div><h1 className="font-semibold text-lg md:text-xl group-hover:text-orange-600 ">Book a call</h1></div></Link>
            </div>
          </div>
          

          {/* 2 */}


          <div className='lg:p-6 rounded-3xl  overflow-hidden   max-sm:h-[450px] h-[470px]  max-sm:w-[330px] md:w-[370px] lg:w-[70vw] bg-white snap-center'>
          
          <div className='flex justify-center iteams-center  lg:float-end rounded-xl overflow-hidden max-sm:h-[200px]  md:h-[200px] lg:h-[350px]   lg:w-1/2'>
              <Image className='object-cover' src={crousel2} alt=''/>
          </div>
          <div className='px-2 py-4 max-sm:py-2 lg:p-5 lg:w-[700px]'>
              <Image className="w-4 md:w-[60px] h-5 md:h-10 lg:h-20 max-sm:w-[50px] lg:w-[140px]  " src={nyxwolves} alt=""/>
              <h1 className='max-sm:text-sm text-2xl  font-semibold py-4 lg:py-6 opacity-80'>Linkedin pulls in $200k in fresh revenue beating the companies quarterly projections</h1>
              <div className='flex gap-8 lg:gap-16 '>
                  <div>
                      <h1 className='max-sm:text-xl text-2xl lg:text-3xl font-bold text-orange-600'>10</h1>
                  <p className='text-sm lg:text-xl max-sm:text-xs opacity-70 max-sm:py-0 py-1 lg:py-2'>Booked appointments in <br className='hidden lg:block'/> 15 months</p>
                  </div>
                  <div>
                     <h1 className='text-2xl lg:text-3xl font-bold text-orange-600'>2</h1>
                     <p className='text-sm lg:text-xl opacity-70 py-1 lg:py-2'>Closed deals</p>
                  </div>
                  
              </div>
              <Link href='https://calendly.com/abhishek-07x2/30min?month=2024-11'><div className='pt-4  flex items-center gap-5 group w-fit' ><div className='h-10 w-10 lg:h-12 lg:w-12 rounded-full border-2 border-orange-600 group-hover:bg-orange-200 flex justify-center items-center' ><Image  src={arrow} alt=""/></div><h1 className="font-semibold text-lg md:text-xl group-hover:text-orange-600 ">Book a call</h1></div></Link>
          </div>
        </div>



{/* 3 */}

<div className='lg:p-6 rounded-3xl  overflow-hidden   max-sm:h-[450px] h-[470px]  max-sm:w-[330px] md:w-[370px] lg:w-[70vw] bg-white snap-center'>
          
            <div className='flex justify-center iteams-center  lg:float-end rounded-xl overflow-hidden max-sm:h-[200px]  md:h-[200px] lg:h-[350px]   lg:w-1/2'>
                <Image className='object-cover' src={crousel3} alt=''/>
            </div>
            <div className='px-2 py-4 max-sm:py-2 lg:p-5 lg:w-[700px]'>
                <Image className="w-4 md:w-[60px] h-5 md:h-10 lg:h-20 max-sm:w-[50px] lg:w-[140px] " src={salesforce} alt=""/>
                <h1 className='max-sm:text-sm text-2xl  font-semibold py-4 lg:py-6 opacity-80'>Linkedin closes 20 appointments with smbs through video messaging</h1>
                <div className='flex gap-8 lg:gap-16 '>
                    <div>
                        <h1 className='max-sm:text-xl text-2xl lg:text-3xl font-bold text-orange-600'>20</h1>
                    <p className='text-sm lg:text-xl max-sm:text-xs opacity-70 max-sm:py-0 py-1 lg:py-2'>Booked appointments in <br className='hidden lg:block'/> 15 months</p>
                    </div>
                    <div>
                       <h1 className='text-2xl lg:text-3xl font-bold text-orange-600'>3</h1>
                       <p className='text-sm lg:text-xl opacity-70 py-1 lg:py-2'>Close deals</p>
                    </div>
                    
                </div>
                <Link href='https://calendly.com/abhishek-07x2/30min?month=2024-11'><div className='pt-4  flex items-center gap-5 group w-fit' ><div className='h-10 w-10 lg:h-12 lg:w-12 rounded-full border-2 border-orange-600 group-hover:bg-orange-200 flex justify-center items-center' ><Image  src={arrow} alt=""/></div><h1 className="font-semibold text-lg md:text-xl group-hover:text-orange-600 ">Book a call</h1></div></Link>
            </div>
          </div>




{/* 4 */}

<div className='lg:p-6 rounded-3xl  overflow-hidden   max-sm:h-[450px] h-[470px]  max-sm:w-[330px] md:w-[370px] lg:w-[70vw] bg-white snap-center'>
          
            <div className='flex justify-center iteams-center  lg:float-end rounded-xl overflow-hidden max-sm:h-[200px]  md:h-[200px] lg:h-[350px]   lg:w-1/2'>
                <Image className='object-cover' src={crousel4} alt=''/>
            </div>
            <div className='px-2  max-sm:py-2 lg:p-5 lg:w-[700px]'>
                <Image className="w-4 md:w-[60px] h-5 md:h-10 lg:h-20 max-sm:w-[50px] lg:w-[140px] " src={microsoftlogo} alt=""/>
                <h1 className='max-sm:text-sm text-2xl lg:text-3xl font-semibold py-4 lg:py-5 opacity-80'>Email and telecalling bring in 5 qualified leads per week and 3 closed deals in a month</h1>
                <div className='flex gap-8 lg:gap-16 '>
                    <div>
                        <h1 className='max-sm:text-xl text-2xl lg:text-3xl font-bold text-orange-600'>15</h1>
                    <p className='text-sm lg:text-xl max-sm:text-xs opacity-70 max-sm:py-0 py-1 lg:py-2'>Booked appointments in <br className='hidden lg:block'/> 15 months</p>
                    </div>
                    <div>
                       <h1 className='text-2xl lg:text-3xl font-bold text-orange-600'>3</h1>
                       <p className='text-sm lg:text-xl opacity-70 py-1 lg:py-2'>Closed Deals</p>
                    </div>
                    
                </div>
                <Link href='https://calendly.com/abhishek-07x2/30min?month=2024-11'><div className='pt-4  flex items-center gap-5 group w-fit' ><div className='h-10 w-10 lg:h-12 lg:w-12 rounded-full border-2 border-orange-600 group-hover:bg-orange-200 flex justify-center items-center' ><Image  src={arrow} alt=""/></div><h1 className="font-semibold text-lg md:text-xl group-hover:text-orange-600 ">Book a call</h1></div></Link>
            </div>
          </div>






          </div>
          
      </div>
      <div className='flex  justify-between max-sm:-mt-20 -mt-10 lg:hidden'>
            <button  onClick={handleLeftClick} className="h-12 w-12 md:h-20 md:w-20 m-4 rounded-full border-2"><p className=' font-bold text-3xl'>{'<'}</p></button>
            <button onClick={handleRightClick} className="h-12 w-12 md:h-20 md:w-20 m-4 rounded-full border-2"><p className=' font-bold text-3xl'>{'>'}</p></button>
            </div>
    </div>
  )
}
