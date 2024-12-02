'use client';
import React, { useRef} from 'react'

// import arrow from '../../public/icons/arrow.svg';
export default function Slider() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Dynamically calculate scroll amount based on screen size
    const calculateScrollAmount = () => {
      const screenWidth = window.innerWidth;
    //   if (screenWidth >= 1024) return 1400; // Large screens
      if (screenWidth >= 768) return 720; // Medium screens
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
        <div className="flex  justify-between p-[5%]">
          <div>
            <h1 className="text-[1.6rem] md:text-[3rem] font-semibold leading-tight">What Our Client Say About Us</h1>
            <p className='opacity-50 text-xl leading-[40px]'>Exceptional support and results that speak for themselves.</p>
          </div>
          <div className='max-sm:hidden md:hidden lg:flex'>
            <button  onClick={handleLeftClick} className="h-16 w-16 m-4 rounded-full border-2"><p className=' font-bold text-3xl'>{'<'}</p></button>
            <button onClick={handleRightClick} className="h-16 w-16 m-4 rounded-full border-2"><p className=' font-bold text-3xl'>{'>'}</p></button>
            </div>
          </div>
       <div ref={scrollContainerRef}  className="overflow-x-scroll scroll-hide snap-x ">
        <div
          
          className={` px-[5%]   flex min-w-max max-sm:gap-5 md:gap-10 lg:gap-12 `}
        >
            <div className='bg-white p-[2%] shadow-md rounded-xl h-[400px] max-sm:h-[320px] max-sm:w-[350px]  w-[700px] snap-center'>
                <h1 className='max-sm:text-2xl text-3xl font-semibold leading-[60px]'>SaaS Services</h1>
                <p className='md:text-xl text-justify'>“We’ve seen incredible growth in our subscriber base since partnering with this team. Their targeted lead generation strategies brought us a steady stream of qualified prospects, and our conversions have never been better!”
                </p>
                <div className=''>
                <h1 className='md:text-xl pt-6 '>Arjun Mehta</h1>
                <p className='italic opacity-60 md:text-xl'>CEO of CloudSync</p>
                </div>
            </div>





            <div className='bg-white p-[2%] shadow-md rounded-xl max-sm:h-[320px] max-sm:w-[350px] h-[400px]  w-[700px] snap-center'>
                <h1 className='max-sm:text-2xl text-3xl font-semibold leading-[60px]'>FinTech</h1>
                <p className='md:text-xl text-justify'>“Their expertise in crafting engaging, trust-building campaigns helped us connect with the right audience in a highly competitive market. We’re seeing significant improvements in user engagement and retention!”

                </p>
                <div className=''>
                <h1 className='md:text-xl pt-6 '>Priya Sharma</h1>
                <p className='italic opacity-60 md:text-xl'>Head of Marketing at FinVibe</p>
                </div>
            </div>




            <div className='bg-white p-[2%] shadow-md rounded-xl max-sm:h-[320px] max-sm:w-[350px] h-[400px] w-[700px] snap-center'>
                <h1 className='max-sm:text-2xl text-3xl font-semibold leading-[60px]'> IT Services</h1>
                <p className='md:text-xl text-justify'>“Their team understands the nuances of the IT industry, and they’ve helped us attract clients who are the perfect fit. Our project pipeline is more robust than ever, and we’re building lasting relationships with our clients.”

                </p>
                <div className=''>
                <h1 className='md:text-xl pt-6 '>Amit Kapoor</h1>
                <p className='italic opacity-60 md:text-xl'>Founder of TechBridge Solutions</p>
                </div>
            </div>





            <div className='bg-white p-[2%] shadow-md rounded-xl max-sm:h-[320px] max-sm:w-[350px] h-[400px] w-[700px] snap-center'>
                <h1 className='max-sm:text-2xl text-3xl font-semibold leading-[60px]'>High-Ticket Services</h1>
                <p className='md:text-xl text-justify'>“The strategies they developed for our high-ticket offerings have transformed our lead quality. We’re now attracting well-qualified clients ready to invest in our premium packages.”

                </p>
                <div className=''>
                <h1 className='md:text-xl pt-6 '>Lisa Nguyen</h1>
                <p className='italic opacity-60 md:text-xl'>COO of Elite Consulting Group
                </p>
                </div>
            </div>





            <div className='bg-white p-[2%] shadow-md rounded-xl max-sm:h-[320px] max-sm:w-[350px] h-[400px] w-[700px] snap-center'>
                <h1 className='max-sm:text-2xl text-3xl font-semibold leading-[60px]'>Healthcare</h1>
                <p className='md:text-xl text-justify'>“Their approach to connecting with B2B decision-makers in healthcare has been a game-changer. We’re booking more appointments than ever, and our client engagement has reached new heights.”


                </p>
                <div className=''>
                <h1 className='md:text-xl pt-6 '>Dr. Emily Turner</h1>
                <p className='italic opacity-60 md:text-xl'>Business Development at HealthBridge Partners
                </p>
                </div>
            </div>

           
            </div>
          </div>
      <div className='flex  justify-between   lg:hidden'>
            <button  onClick={handleLeftClick} className="bg-white shadow-sm h-12 w-12 md:h-20 md:w-20 m-4 rounded-full border-2"><p className=' font-bold text-3xl'>{'<'}</p></button>
            <button onClick={handleRightClick} className="bg-white shadow-sm h-12 w-12 md:h-20 md:w-20 m-4 rounded-full border-2"><p className=' font-bold text-3xl'>{'>'}</p></button>
            </div>
    </div>
  )
}
