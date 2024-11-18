'use client';
import React, { useRef} from 'react'
import Image from 'next/image';
import crousel1 from '../../public/crousel/crousel1.jpg';
import igslogo from '../../public/crousel/IGS_LOGO_color.png';
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
            <h1 className="text-3xl md:text-[3.5rem] font-semibold leading-tight">How companies succeed with us</h1>
            <p className='opacity-50 text-xl leading-[40px]'>Here’s how businesses succeeded after switching to our lead generation services.</p>
          </div>
          <div className='max-sm:hidden md:hidden lg:flex'>
            <button  onClick={handleLeftClick} className="h-20 w-20 m-4 rounded-full border-2"><p className=' font-bold text-3xl'>{'<'}</p></button>
            <button onClick={handleRightClick} className="h-20 w-20 m-4 rounded-full border-2"><p className=' font-bold text-3xl'>{'>'}</p></button>
            </div>
          </div>
       <div ref={scrollContainerRef}  className="overflow-x-scroll scroll-hide snap-x ">
        <div
          
          className={`pl-1 md:pl-[5%] py-20 flex min-w-max max-sm:gap-5 md:gap-10 lg:gap-20 `}
        >
          <div className='lg:p-6 rounded-3xl  overflow-hidden    max-sm:h-[430px] h-[580px] lg:h-[600px] max-sm:w-[330px] md:w-[370px] lg:w-[1300px] bg-white snap-center'>
          
            <div className='flex justify-center iteams-center  lg:float-end rounded-xl overflow-hidden'>
                <Image className='max-sm:h-[160px]  md:h-[200px] lg:h-auto   lg:w-[550px]' src={crousel1} alt=''/>
            </div>
            <div className='px-2 py-4 max-sm:py-2 lg:p-5 lg:w-[700px]'>
                <Image className="w-[60px] max-sm:w-[50px] lg:w-[140px] " src={igslogo} alt=""/>
                <h1 className='max-sm:text-sm text-2xl lg:text-3xl font-semibold py-4 lg:py-10 opacity-80'>Email Outreach soars to 3rd place among 20 channels for an  integrity and efficiency service provider</h1>
                <div className='flex gap-8 lg:gap-16 '>
                    <div>
                        <h1 className='max-sm:text-xl text-2xl lg:text-5xl font-bold text-orange-600'>330</h1>
                    <p className='text-sm lg:text-xl max-sm:text-xs opacity-70 max-sm:py-0 py-1 lg:py-4'>Booked appointments in <br className='hidden lg:block'/> 15 months</p>
                    </div>
                    <div>
                        <h1 className='text-2xl lg:text-5xl font-bold text-orange-600'>120%</h1>
                        <p className='text-sm lg:text-xl opacity-70 py-1 lg:py-4'>Avg. monthly KPIs</p>
                    </div>
                    
                </div>
                <div className='pt-4 lg:pt-10 flex items-center gap-5 group cursor-pointer' ><div className='h-10 w-10 lg:h-16 lg:w-16 rounded-full border-2 border-orange-600 group-hover:bg-orange-200 flex justify-center items-center' ><Image  src={arrow} alt=""/></div><h1 className="font-semibold text-lg md:text-xl group-hover:text-orange-600 ">Read the case study</h1></div>
            </div>
          </div>
          



          <div className='lg:p-6 rounded-3xl overflow-hidden    max-sm:h-[430px] h-[580px] lg:h-[600px] max-sm:w-[330px] md:w-[370px] lg:w-[1300px] bg-white snap-center'>
          
          <div className='flex justify-center iteams-center  lg:float-end rounded-xl overflow-hidden'>
              <Image className='max-sm:h-[160px]  md:h-[200px] lg:h-auto   lg:w-[550px]' src={crousel1} alt=''/>
          </div>
          <div className='px-2 py-4 max-sm:py-2 lg:p-5 lg:w-[700px]'>
              <Image className="w-[60px] max-sm:w-[50px] lg:w-[140px] " src={igslogo} alt=""/>
              <h1 className='max-sm:text-sm text-2xl lg:text-3xl font-semibold py-4 lg:py-10 opacity-80'>Email Outreach soars to 3rd place among 20 channels for an  integrity and efficiency service provider</h1>
              <div className='flex gap-8 lg:gap-16 '>
                  <div>
                      <h1 className='max-sm:text-xl text-2xl lg:text-5xl font-bold text-orange-600'>330</h1>
                  <p className='text-sm lg:text-xl max-sm:text-xs opacity-70 max-sm:py-0 py-1 lg:py-4'>Booked appointments in <br className='hidden lg:block'/> 15 months</p>
                  </div>
                  <div>
                      <h1 className='text-2xl lg:text-5xl font-bold text-orange-600'>120%</h1>
                      <p className='text-sm lg:text-xl opacity-70 py-1 lg:py-4'>Avg. monthly KPIs</p>
                  </div>
                  
              </div>
              <div className='pt-4 lg:pt-10 flex items-center gap-5 group cursor-pointer' ><div className='h-10 w-10 lg:h-16 lg:w-16 rounded-full border-2 border-orange-600 group-hover:bg-orange-200 flex justify-center items-center' ><Image  src={arrow} alt=""/></div><h1 className="font-semibold text-lg md:text-xl group-hover:text-orange-600 ">Read the case study</h1></div>
          </div>
        </div>
        


        <div className='lg:p-6 rounded-3xl  overflow-hidden   max-sm:h-[430px] h-[580px] lg:h-[600px] max-sm:w-[330px] md:w-[370px] lg:w-[1300px] bg-white snap-center'>
          
          <div className='flex justify-center iteams-center  lg:float-end rounded-xl overflow-hidden'>
              <Image className='max-sm:h-[160px]  md:h-[200px] lg:h-auto   lg:w-[550px]' src={crousel1} alt=''/>
          </div>
          <div className='px-2 py-4 max-sm:py-2 lg:p-5 lg:w-[700px]'>
              <Image className="w-[60px] max-sm:w-[50px] lg:w-[140px] " src={igslogo} alt=""/>
              <h1 className='max-sm:text-sm text-2xl lg:text-3xl font-semibold py-4 lg:py-10 opacity-80'>Email Outreach soars to 3rd place among 20 channels for an  integrity and efficiency service provider</h1>
              <div className='flex gap-8 lg:gap-16 '>
                  <div>
                      <h1 className='max-sm:text-xl text-2xl lg:text-5xl font-bold text-orange-600'>330</h1>
                  <p className='text-sm lg:text-xl max-sm:text-xs opacity-70 max-sm:py-0 py-1 lg:py-4'>Booked appointments in <br className='hidden lg:block'/> 15 months</p>
                  </div>
                  <div>
                      <h1 className='text-2xl lg:text-5xl font-bold text-orange-600'>120%</h1>
                      <p className='text-sm lg:text-xl opacity-70 py-1 lg:py-4'>Avg. monthly KPIs</p>
                  </div>
                  
              </div>
              <div className='pt-4 lg:pt-10 flex items-center gap-5 group cursor-pointer' ><div className='h-10 w-10 lg:h-16 lg:w-16 rounded-full border-2 border-orange-600 group-hover:bg-orange-200 flex justify-center items-center' ><Image  src={arrow} alt=""/></div><h1 className="font-semibold text-lg md:text-xl group-hover:text-orange-600 ">Read the case study</h1></div>
          </div>
        </div>
        



        <div className='lg:p-6 rounded-3xl  overflow-hidden   max-sm:h-[430px] h-[580px] lg:h-[600px] max-sm:w-[330px] md:w-[370px] lg:w-[1300px] bg-white snap-center'>
          
          <div className='flex justify-center iteams-center  lg:float-end rounded-xl overflow-hidden'>
              <Image className='max-sm:h-[160px]  md:h-[200px] lg:h-auto   lg:w-[550px]' src={crousel1} alt=''/>
          </div>
          <div className='px-2 py-4 max-sm:py-2 lg:p-5 lg:w-[700px]'>
              <Image className="w-[60px] max-sm:w-[50px] lg:w-[140px] " src={igslogo} alt=""/>
              <h1 className='max-sm:text-sm text-2xl lg:text-3xl font-semibold py-4 lg:py-10 opacity-80'>Email Outreach soars to 3rd place among 20 channels for an  integrity and efficiency service provider</h1>
              <div className='flex gap-8 lg:gap-16 '>
                  <div>
                      <h1 className='max-sm:text-xl text-2xl lg:text-5xl font-bold text-orange-600'>330</h1>
                  <p className='text-sm lg:text-xl max-sm:text-xs opacity-70 max-sm:py-0 py-1 lg:py-4'>Booked appointments in <br className='hidden lg:block'/> 15 months</p>
                  </div>
                  <div>
                      <h1 className='text-2xl lg:text-5xl font-bold text-orange-600'>120%</h1>
                      <p className='text-sm lg:text-xl opacity-70 py-1 lg:py-4'>Avg. monthly KPIs</p>
                  </div>
                  
              </div>
              <div className='pt-4 lg:pt-10 flex items-center gap-5 group cursor-pointer' ><div className='h-10 w-10 lg:h-16 lg:w-16 rounded-full border-2 border-orange-600 group-hover:bg-orange-200 flex justify-center items-center' ><Image  src={arrow} alt=""/></div><h1 className="font-semibold text-lg md:text-xl group-hover:text-orange-600 ">Read the case study</h1></div>
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
