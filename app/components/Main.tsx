'use  client';

import React,{useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Marque from './Marque';
import Crousel from './Crousel';
import award from '../../public/award/06.png';
import awardicon from '../../public/award/clutch.CceGGRvz.svg';
import finance from '../../public/you industry/finance.svg';
import healthcare from '../../public/you industry/healthcare.svg';
import agency from '../../public/you industry/agency.svg';
import Hardware from '../../public/you industry/Hardware.svg';
import media from '../../public/you industry/media.svg';
import clutch from '../../public/choice/clutch.png';
import tick from '../../public/icons/tick.svg';
import arrow from '../../public/icons/arrow.svg';
import manager from '../../public/meet/account-manager.svg';
import sdr from '../../public/meet/calendar-check.svg';
import search from '../../public/meet/research-approach.svg';
import emailtech from '../../public/meet/deliverability.svg';
import copywriter from '../../public/meet/content.svg';
import profile from '../../public/meet/profile.jpg';
import five from '../../public/meet/img4.jpg';
import four from '../../public/meet/img3.jpg';
import third from '../../public/meet/img2.jpg';
import sec from '../../public/meet/img1.jpg';
import first from '../../public/meet/firstimg.jpg';
import rightarrow from '../../public/icons/chevron.svg';
import Lead from './Lead';
import Weserve from './Weserve';



export default function Main() {
 
  const [meet,setMeet]=useState(1);
  const [mobmeet,setMobmeet]=useState(0);
  
  return (
    <div className=' '>
    <div id='1' className='bg-[--background] relative  py-20 -z-10 px-[5%] '>
    
    <div className="  absolute element -top-2 left-10  lg:-top-10 lg:left-32 w-16 h-16 lg:w-44 lg:h-44 bg-gradient-to-br from-orange-500/20 to-orange-600 shadow-orange-600 shadow-md rounded-full " />
    <div className=" absolute -top-16 -left-24 lg:-top-32 lg:-left-52 w-40 h-40 lg:w-96 lg:h-96 bg-white rounded-full opacity-65 shadow-md" />
    <div className="max-md:hidden absolute  -top-40 right-0 w-64 h-64 lg:w-72 lg:h-72 b bg-gradient-to-br from-black to-white border-2 border-white rounded-full opacity-10 shadow-md" />
    <div className="relative text-center space-y-8">
            <div className="space-y-4">
              <p  className="text-orange-500 font-semibold ">B2B LEAD GENERATION AGENCY</p>
              <h1 className="text-4xl md:text-[4.5rem]  font-bold md:leading-[82px] tracking-tight">
                Close more deals
                <br />
                with ROI-focused
                <br />
                lead acquisition
              </h1>
            </div>
            <p className="text-gray-600 max-sm:px-4 max-sm:-mt-4 max-w-3xl lg:w-[600px] mx-auto md:text-lg">
            Closergod helps B2B businesses scale with expert lead generation and tailored solutions that maximize conversions.
            </p>
            <div className="px-4">
           
            </div>
          </div>
          
          
    
    </div>
    <div className='  w-full z-0 relative -mt-20 flex justify-center'>
          <button className="bg-orange-600 max-sm:w-full  max-sm:mx-2  hover:bg-opacity-80 text-white rounded-md text-lg font-semibold px-10 py-4">
              Get a quote
            </button>
          </div>


          {/* Marque */}
          <Marque/>
          
          {/* Lead Generation */}
        
          <Lead/>

          {/* Companies succeed with us */}
          
          {/* Crousel */}
          
            <Crousel/>
        
          

          
         {/* award wining */}

         <div className='lg:flex items-center w-full justify-between p-[5%]'>
          <article className='lg:w-[45%] '>
            <h1 className='font-bold text-3xl md:text-6xl md:leading-[70px]'>Award-winning<br/>
            B2B sales agency</h1>
            <p className=' md:text-2xl md:leading-8 py-4 opacity-60'>See what others are saying about Belkins’ B2B lead generation services and how we helped hack their growth.</p>
          <div className='flex flex-wrap gap-4 max-lg:hidden justify-between pt-12'>
            <div className="flex gap-4   ">
              <div><Image className='w-14 h-14' src={awardicon} alt="" /></div>
              <div>
                <div className="flex text-xl"><h1 className='font-semibold'>Clutch / </h1><p> 4.9 score</p></div>
                <div className='text-xl opacity-60'>221 reviews</div>
              </div>
            </div>


            <div className="flex gap-4   ">
              <div><Image className='w-14 h-14' src={awardicon} alt="" /></div>
              <div>
                <div className="flex text-xl"><h1 className='font-semibold'>Clutch / </h1><p> 4.9 score</p></div>
                <div className='text-xl opacity-60'>221 reviews</div>
              </div>
            </div>



            <div className="flex gap-4   ">
              <div><Image className='w-14 h-14' src={awardicon} alt="" /></div>
              <div>
                <div className="flex text-xl"><h1 className='font-semibold'>Clutch / </h1><p> 4.9 score</p></div>
                <div className='text-xl opacity-60'>221 reviews</div>
              </div>
            </div>


          </div>
          </article>
          <div className='flex lg:w-[50%] lg:py-0 py-10 flex-wrap justify-center gap-2 md:gap-6 '>
            <div className='max-sm:w-[160px] max-sm:h-[170px] w-[200px] rounded-2xl  p-5 h-[200px] bg-gray-200  hover:bg-white hover:shadow-md '><Image src={award} alt=''/></div>
            <div className='max-sm:w-[160px] max-sm:h-[170px] w-[200px] rounded-2xl  p-5 h-[200px] bg-gray-200  hover:bg-white hover:shadow-md '><Image src={award} alt=''/></div>
            <div className='max-sm:w-[160px] max-sm:h-[170px] w-[200px] rounded-2xl  p-5 h-[200px] bg-gray-200  hover:bg-white hover:shadow-md '><Image src={award} alt=''/></div>
            <div className='max-sm:w-[160px] max-sm:h-[170px] w-[200px] rounded-2xl  p-5 h-[200px] bg-gray-200  hover:bg-white hover:shadow-md '><Image src={award} alt=''/></div>
            <div className='max-sm:w-[160px] max-sm:h-[170px] w-[200px] rounded-2xl  p-5 h-[200px] bg-gray-200  hover:bg-white hover:shadow-md '><Image src={award} alt=''/></div>
            <div className='max-sm:w-[160px] max-sm:h-[170px] w-[200px] rounded-2xl  p-5 h-[200px] bg-gray-200  hover:bg-white hover:shadow-md '><Image src={award} alt=''/></div>

          
            
            

          </div>



          
         </div>
          
{/* You Industry  */}



<div id='4' className='md:mx-[7%] mx-2 p-[5%] rounded-3xl  md:rounded-[3rem] md:my-10 bg-current opacity-85'>
  <div className='flex'>
    <div>
  <h1 className='text-white font-semibold text-4xl md:text-[3.5rem] lg:leading-[60px]'>Your industry,</h1>
  <h1 className='text-orange-600  font-semibold text-4xl md:text-[3.5rem]  md:leading-[60px]'>our tailored solutions</h1>
  <p className='text-white md:text-[1.23rem] md:py-3 lg:py-5 opacity-75 leading-snug lg:w-[60%]'>Leverage Belkins expertise in 50+ industries to target the right audience  and acquire qualified B2B leads. Choose your industry to find out how Belkins optimizes sales for businesses across various markets.</p>
  </div>
  <div className='h-full w-full flex justify-end  '>
  <Link className='max-lg:hidden' href='#serve'><div className='w-64 mt-40  border-[1px] hover:bg-zinc-900 hover:border-zinc-900 text-white text-2xl flex gap-2  rounded-xl py-2 px-2'><h1>See all industries</h1><div className='transfrom rotate-90 w-fit h-fit mr-2'>^</div></div></Link>
  </div>
  </div>
  <div className='lg:flex lg:flex-wrap   lg:pt-10 gap-5 max-lg:space-y-3'>
    <div className='hover:scale-[105%] lg:h-[11rem] lg:w-[13rem] max-lg:flex lg:gap-0 gap-3 items-center  rounded-2xl bg-zinc-900 p-4 lg:p-10  bg-opacity-50  group lg:hover:-translate-y-3 transfrom-all transition-transform ease-in-out duration-150 delay-150'><Image className='lg:mx-auto md:h-10  lg:h-10 lg:w-10 opacity-50 group-hover:opacity-100' src={finance} alt=""/><h1 className='text-white md:text-lg lg:text-center lg:pt-4 opacity-50 group-hover:opacity-100'>Finance Services</h1></div>
    <div className='hover:scale-[105%] lg:h-[11rem] lg:w-[13rem] max-lg:flex lg:gap-0 gap-3 items-center  rounded-2xl bg-zinc-900 p-4 lg:p-10  bg-opacity-50  group lg:hover:-translate-y-3 transfrom-all transition-transform ease-in-out duration-150 delay-150'><Image className='lg:mx-auto md:h-10  lg:h-10 lg:w-10 opacity-50 group-hover:opacity-100' src={healthcare} alt=""/><h1 className='text-white md:text-lg lg:text-center lg:pt-4 opacity-50 group-hover:opacity-100'>Healthcare & pharmaceutical</h1></div>
    <div className='hover:scale-[105%] lg:h-[11rem] lg:w-[13rem] max-lg:flex lg:gap-0 gap-3 items-center  rounded-2xl bg-zinc-900 p-4 lg:p-10  bg-opacity-50  group lg:hover:-translate-y-3 transfrom-all transition-transform ease-in-out duration-150 delay-150'><Image className='lg:mx-auto md:h-10  lg:h-10 lg:w-10 opacity-50 group-hover:opacity-100' src={agency} alt=""/><h1 className='text-white md:text-lg lg:text-center lg:pt-4 opacity-50 group-hover:opacity-100'>Agencies</h1></div>
    <div className='hover:scale-[105%] lg:h-[11rem] lg:w-[13rem] max-lg:flex lg:gap-0 gap-3 items-center  rounded-2xl bg-zinc-900 p-4 lg:p-10  bg-opacity-50  group lg:hover:-translate-y-3 transfrom-all transition-transform ease-in-out duration-150 delay-150'><Image className='lg:mx-auto md:h-10  lg:h-10 lg:w-10 opacity-50 group-hover:opacity-100' src={Hardware} alt=""/><h1 className='text-white md:text-lg lg:text-center lg:pt-4 opacity-50 group-hover:opacity-100'>Hardware manufacturing</h1></div>
    <div className='hover:scale-[105%] lg:h-[11rem] lg:w-[13rem] max-lg:flex lg:gap-0 gap-3 items-center  rounded-2xl bg-zinc-900 p-4 lg:p-10  bg-opacity-50  group lg:hover:-translate-y-3 transfrom-all transition-transform ease-in-out duration-150 delay-150'><Image className='lg:mx-auto md:h-10  lg:h-10 lg:w-10 opacity-50 group-hover:opacity-100' src={media} alt=""/><h1 className='text-white md:text-lg lg:text-center lg:pt-4 opacity-50 group-hover:opacity-100'>Media Production</h1></div>
    <Link className='lg:hidden' href='#serve'><div className='w-64 mt-5    hover:bg-zinc-900 hover:border-zinc-900 border-[1px] text-white text-2xl flex gap-2  rounded-xl py-2 px-2'><h1>See all industries</h1><div className='transfrom rotate-90 w-fit h-fit mr-2'>^</div></div></Link>
  </div>
</div>

{/* we serve */}
<Weserve/>

{/* your #1 choice */}
<div id='6' className='lg:flex justify-between p-[5%]'>
<div>

    <h1 className='text-3xl md:text-6xl font-semibold '>What makes Belkins</h1>
    <h1 className='text-3xl md:text-6xl py-2 font-semibold text-orange-600'>your #1 choice</h1>
    <Image className="lg:hidden object-cover" src={clutch} alt=""/>
    <div className='py-4'>
    <h1 className=' pt-5 pb-2 text-2xl'>Here{"'"}s how we stand out among other lead generation agencies.</h1>
    <div className='flex items-center gap-2 md:gap-4 md:pt-4'><Image className='w-8 h-8' src={tick} alt=""/><p className='md:text-2xl opacity-70 pt-4'>The right balance between frameworks and flexibility</p></div>
    <div className='flex items-center gap-2 md:gap-4 md:pt-4'><Image className='w-8 h-8 ' src={tick} alt=""/><p className='md:text-2xl opacity-70 pt-4'>Full integration into your team</p></div>
    <div className='flex items-center gap-2 md:gap-4 md:pt-4'><Image className='w-8 h-8' src={tick} alt=""/><p className='md:text-2xl opacity-70 pt-4'>Cutting-edge toolkit and advanced methodology</p></div>
    <div className='flex items-center gap-2 md:gap-4 md:pt-4'><Image className='w-8 h-8' src={tick} alt=""/><p className='md:text-2xl opacity-70 pt-4'>Straightforward communication</p></div>
    <div className='flex items-center gap-2 md:gap-4 md:pt-4'><Image className='w-8 h-8' src={tick} alt=""/><p className='md:text-2xl opacity-70 pt-4'>Mid- and senior-level teams</p></div>
    <div className='flex items-center gap-2 md:gap-4 md:pt-4'><Image className='w-8 h-8' src={tick} alt=""/><p className='md:text-2xl opacity-70 pt-4'><span className='underline'>Result-oriented</span> processes</p></div>
    </div>
    <div className='w-fit pt-4 md:pt-10 flex items-center gap-5 group cursor-pointer' ><div className='h-10 w-10 md:h-16 md:w-16 rounded-full border-[1px] border-orange-600 group-hover:bg-orange-200 flex justify-center items-center' ><Image  src={arrow} alt=""/></div><h1 className="font-semibold text-lg md:text-2xl group-hover:text-orange-600 ">Let{"'"}s talk</h1></div>
</div>
<div className=' max-lg:hidden  w-[50%] '>
  <Image className='object-cover' src={clutch} alt=''/>
</div>
</div>


{/*   Meet the people */}
<div className=''>
  <h1 className='text-3xl font-semibold md:text-6xl text-center text-orange-600'>Meet the people</h1>
  <h1 className='text-3xl font-semibold md:text-6xl md:leading-[82px] text-center'>behind your project</h1>
  <div className="p-[5%] flex max-lg:flex-wrap gap-5">

{/* 1 */}

<div onClick={()=>{setMeet(1); setMobmeet(mobmeet===1?0:1);}} className={`bg-white  transition ease-in-out cursor-pointer w-full lg:h-[8.5rem] rounded-2xl  ${meet===1?`bg-white shadow-md `: `border-2 lg:hover:border-orange-600`}  lg:flex lg:flex-col max-lg:gap-3 p-3 md:p-8 lg:justify-center items-center lg:group`}>
  <div className='flex lg:flex-col items-center  justify-between '>
    <Image className={`max-lg:hidden md:w-9 md:h-9 grayscale  ${meet===1?`lg:grayscale-0`:` group-hover:grayscale-0`}`} src={manager} alt=''/><h1 className={`max-lg:font-semibold lg:pt-1 md:text-xl leading-10 ${meet===1?`lg:text-orange-600`:`group-hover:text-orange-600 opacity-60 `}`}>Account Manager</h1><Image className={` opacity-50 transition ease-in-out lg:hidden ${mobmeet===1?`-rotate-90`:`rotate-90`}`} src={rightarrow} alt=""/></div> <div>
    <div className={`w-full lg:hidden p-[2%]   ${mobmeet===1?``:`hidden`}`}>
  <Image className='w-52' src={profile} alt='' />
  <h1 className='text-2xl pt-4 font-semibold'>Account manager</h1>
  <p className=' leading-2 opacity-70'>Account managers take care of every need you might have and outline the objectives to launch a successful campaign. With an industry pro in every niche, we’ll find the most relevant AM to lead your project.</p>
  <div className='w-fit pt-4 md:pt-10 flex items-center gap-5 group cursor-pointer' ><div className='h-10 w-10 md:h-16 md:w-16 rounded-full border-[1px] border-orange-600 group-hover:bg-orange-200 flex justify-center items-center' ><Image  src={arrow} alt=""/></div><h1 className="font-semibold text-lg md:text-2xl group-hover:text-orange-600 ">Discover details</h1></div>
  </div>
      </div></div>


      {/* 2 */}
    
      <div onClick={()=>{setMeet(2); setMobmeet(mobmeet===2?0:2);}} className={`bg-white  transition ease-in-out cursor-pointer w-full lg:h-[8.5rem] rounded-2xl  ${meet===2?`bg-white shadow-md `: `border-2 lg:hover:border-orange-600`}  lg:flex lg:flex-col max-lg:gap-3 p-3 md:p-8 lg:justify-center items-center lg:group`}>
        <div className='flex lg:flex-col items-center  justify-between '>
          <Image className={`max-lg:hidden md:w-9 md:h-9 grayscale  ${meet===2?`lg:grayscale-0`:` group-hover:grayscale-0`}`} src={sdr} alt=''/><h1 className={`max-lg:font-semibold lg:pt-1 md:text-xl leading-10 ${meet===2?`lg:text-orange-600`:`group-hover:text-orange-600 opacity-60 `}`}>SDR</h1><Image className={` opacity-50 transition ease-in-out lg:hidden ${mobmeet===2?`-rotate-90`:`rotate-90`}`} src={rightarrow} alt=""/></div> <div>
    <div className={`w-full lg:hidden p-[2%]   ${mobmeet===2?``:`hidden`}`}>
  <Image className='w-52' src={profile} alt='' />
  <h1 className='text-2xl pt-4 font-semibold'>Account manager</h1>
  <p className=' leading-2 opacity-70'>Account managers take care of every need you might have and outline the objectives to launch a successful campaign. With an industry pro in every niche, we’ll find the most relevant AM to lead your project.</p>
  <div className='w-fit pt-4 md:pt-10 flex items-center gap-5 group cursor-pointer' ><div className='h-10 w-10 md:h-16 md:w-16 rounded-full border-[1px] border-orange-600 group-hover:bg-orange-200 flex justify-center items-center' ><Image  src={arrow} alt=""/></div><h1 className="font-semibold text-lg md:text-2xl group-hover:text-orange-600 ">Discover details</h1></div>
  </div>
      </div></div>


{/* 3 */}

      <div onClick={()=>{setMeet(3); setMobmeet(mobmeet===3?0:3);}} className={`bg-white  transition ease-in-out cursor-pointer w-full lg:h-[8.5rem] rounded-2xl  ${meet===3?`bg-white shadow-md `: `border-2 lg:hover:border-orange-600`}  lg:flex lg:flex-col max-lg:gap-3 p-3 md:p-8 lg:justify-center items-center lg:group`}>
        <div className='flex lg:flex-col items-center  justify-between '>
          <Image className={`max-lg:hidden md:w-9 md:h-9 grayscale  ${meet===3?`lg:grayscale-0`:` group-hover:grayscale-0`}`} src={search} alt=''/><h1 className={`max-lg:font-semibold md:text-xl lg:pt-1 leading-10 ${meet===3?`lg:text-orange-600`:`group-hover:text-orange-600 opacity-60`}`}>Lead Researcher</h1><Image className={` opacity-50 lg:hidden transition ease-in-out ${mobmeet===3?`-rotate-90`:`rotate-90`}`} src={rightarrow} alt=""/></div> <div>
    <div className={`w-full lg:hidden p-[2%]   ${mobmeet===3?``:`hidden`}`}>
  <Image className='w-52' src={profile} alt='' />
  <h1 className='text-2xl pt-4 font-semibold'>Account manager</h1>
  <p className=' leading-2 opacity-70'>Account managers take care of every need you might have and outline the objectives to launch a successful campaign. With an industry pro in every niche, we’ll find the most relevant AM to lead your project.</p>
  <div className='w-fit pt-4 md:pt-10 flex items-center gap-5 group cursor-pointer' ><div className='h-10 w-10 md:h-16 md:w-16 rounded-full border-[1px] border-orange-600 group-hover:bg-orange-200 flex justify-center items-center' ><Image  src={arrow} alt=""/></div><h1 className="font-semibold text-lg md:text-2xl group-hover:text-orange-600 ">Discover details</h1></div>
  </div>
      </div></div>

{/* 4 */}

      <div onClick={()=>{setMeet(4); setMobmeet(mobmeet===4?0:4);}} className={`bg-white  transition ease-in-out cursor-pointer w-full lg:h-[8.5rem] rounded-2xl  ${meet===4?`bg-white shadow-md `: `border-2 lg:hover:border-orange-600`}  lg:flex lg:flex-col max-lg:gap-3 p-3 md:p-8 lg:justify-center items-center lg:group`}>
        <div className='flex lg:flex-col items-center  justify-between '>
          <Image className={`max-lg:hidden md:w-9 md:h-9 grayscale  ${meet===4?`lg:grayscale-0`:` group-hover:grayscale-0`}`} src={copywriter} alt=''/>
    <h1 className={`max-lg:font-semibold md:text-xl leading-10 ${meet===4?`lg:text-orange-600`:`group-hover:text-orange-600 opacity-60 lg:pt-1`}`}>Copywriter</h1><Image className={` opacity-50 lg:hidden transition ease-in-out ${mobmeet===4?`-rotate-90`:`rotate-90`}`} src={rightarrow} alt=""/></div> <div>
    <div className={`w-full lg:hidden p-[2%]   ${mobmeet===4?``:`hidden`}`}>
  <Image className='w-52' src={profile} alt='' />
  <h1 className='text-2xl pt-4 font-semibold'>Account manager</h1>
  <p className=' leading-2 opacity-70'>Account managers take care of every need you might have and outline the objectives to launch a successful campaign. With an industry pro in every niche, we’ll find the most relevant AM to lead your project.</p>
  <div className='w-fit pt-4 md:pt-10 flex items-center gap-5 group cursor-pointer' ><div className='h-10 w-10 md:h-16 md:w-16 rounded-full border-[1px] border-orange-600 group-hover:bg-orange-200 flex justify-center items-center' ><Image  src={arrow} alt=""/></div><h1 className="font-semibold text-lg md:text-2xl group-hover:text-orange-600 ">Discover details</h1></div>
  </div>
      </div></div>


{/* 5 */}
      <div onClick={()=>{setMeet(5); setMobmeet(mobmeet===5?0:5);}} className={`bg-white  transition ease-in-out cursor-pointer w-full lg:h-[8.5rem] rounded-2xl  ${meet===5?`bg-white shadow-md `: `border-2 lg:hover:border-orange-600`}  lg:flex lg:flex-col max-lg:gap-3 p-3 md:p-8 lg:justify-center items-center lg:group`}>
        <div className='flex lg:flex-col items-center  justify-between '>
          <Image className={`max-lg:hidden md:w-9 md:h-9 grayscale  ${meet===5?`lg:grayscale-0`:` group-hover:grayscale-0`}`} src={emailtech} alt=''/>
          <h1 className={`max-lg:font-semibold md:text-xl leading-10 ${meet===5?`lg:text-orange-600`:`group-hover:text-orange-600 opacity-60 lg:pt-1`}`}>Email Tech Expert</h1>
          <Image className={` opacity-50 lg:hidden transition ease-in-out ${mobmeet===5?`-rotate-90`:`rotate-90`}`} src={rightarrow} alt=""/>
        </div>
    <div>
    <div className={`w-full lg:hidden p-[2%]   ${mobmeet===5?``:`hidden`}`}>
  <Image className='w-52' src={profile} alt='' />
  <h1 className='text-2xl pt-4 font-semibold'>Account manager</h1>
  <p className=' leading-2 opacity-70'>Account managers take care of every need you might have and outline the objectives to launch a successful campaign. With an industry pro in every niche, we’ll find the most relevant AM to lead your project.</p>
  <div className='w-fit pt-4 md:pt-10 flex items-center gap-5 group cursor-pointer' ><div className='h-10 w-10 md:h-16 md:w-16 rounded-full border-[1px] border-orange-600 group-hover:bg-orange-200 flex justify-center items-center' ><Image  src={arrow} alt=""/></div><h1 className="font-semibold text-lg md:text-2xl group-hover:text-orange-600 ">Discover details</h1></div>
  </div>
      </div></div>


      </div>
  <div className='px-[5%] max-lg:hidden pb-[5%] -mt-14'>
    {/* 1 */}
<div className={`w-full flex items-center shadow-md  ${meet===1?`flex`:`hidden`} justify-between p-[3%] rounded-3xl bg-white `} >
  <div className='w-1/2 p-[2%]'>
  <Image className='w-72' src={profile} alt='' />
  <h1 className='text-4xl pt-10 leading-[82px] font-semibold'>Account manager</h1>
  <p className='text-2xl leading-10 opacity-70'>Account managers take care of every need you might have and outline the objectives to launch a successful campaign. With an industry pro in every niche, we’ll find the most relevant AM to lead your project.</p>
  <div className='w-fit pt-4 md:pt-10 flex items-center gap-5 group cursor-pointer' ><div className='h-10 w-10 md:h-16 md:w-16 rounded-full border-[1px] border-orange-600 group-hover:bg-orange-200 flex justify-center items-center' ><Image  src={arrow} alt=""/></div><h1 className="font-semibold text-lg md:text-2xl group-hover:text-orange-600 ">Discover details</h1></div>
  </div>
  <div className='w-1/2  rounded-2xl h-fit overflow-hidden c'><Image className='w-full object-cover h-[450px]' src={first} alt='' /></div>
</div>


{/* 2 */}

<div className={`w-full flex items-center shadow-md ${meet===2?` flex `:` hidden `} justify-between p-[3%] rounded-3xl bg-white `} >
  <div className='w-1/2 p-[2%]'>
  <Image className='w-72' src={profile} alt='' />
  <h1 className='text-4xl pt-10 leading-[82px] font-semibold'>Sales Development Representative</h1>
  <p className='text-2xl leading-10 opacity-70'>Account managers take care of every need you might have and outline the objectives to launch a successful campaign. With an industry pro in every niche, we’ll find the most relevant AM to lead your project.</p>
  <div className='w-fit pt-4 md:pt-10 flex items-center gap-5 group cursor-pointer' ><div className='h-10 w-10 md:h-16 md:w-16 rounded-full border-[1px] border-orange-600 group-hover:bg-orange-200 flex justify-center items-center' ><Image  src={arrow} alt=""/></div><h1 className="font-semibold text-lg md:text-2xl group-hover:text-orange-600 ">Discover details</h1></div>
  </div>
  <div className='w-1/2  rounded-2xl h-[450px]  overflow-hidden'><Image className='w-full  ' src={sec} alt='' /></div>
</div>



{/* 3 */}


<div className={`w-full flex items-center shadow-md ${meet===3?`flex `:` hidden `} justify-between p-[3%] rounded-3xl bg-white `} >
  <div className='w-1/2 p-[2%]'>
  <Image className='w-72' src={profile} alt='' />
  <h1 className='text-4xl pt-10 leading-[82px] font-semibold'>Lead Researcher</h1>
  <p className='text-2xl leading-10 opacity-70'>Account managers take care of every need you might have and outline the objectives to launch a successful campaign. With an industry pro in every niche, we’ll find the most relevant AM to lead your project.</p>
  <div className='w-fit pt-4 md:pt-10 flex items-center gap-5 group cursor-pointer' ><div className='h-10 w-10 md:h-16 md:w-16 rounded-full border-[1px] border-orange-600 group-hover:bg-orange-200 flex justify-center items-center' ><Image  src={arrow} alt=""/></div><h1 className="font-semibold text-lg md:text-2xl group-hover:text-orange-600 ">Discover details</h1></div>
  </div>
  <div className='w-1/2  rounded-2xl h-[450px] overflow-hidden '><Image className=' w-full  ' src={third} alt='' /></div>
</div>



{/* 4 */}


<div className={`w-full flex items-center shadow-md ${meet===4?`flex `:` hidden `} justify-between p-[3%] rounded-3xl bg-white `} >
  <div className='w-1/2 p-[2%]'>
  <Image className='w-72' src={profile} alt='' />
  <h1 className='text-4xl pt-10 leading-[82px] font-semibold'>Copywriter</h1>
  <p className='text-2xl leading-10 opacity-70'>Account managers take care of every need you might have and outline the objectives to launch a successful campaign. With an industry pro in every niche, we{"’"}ll find the most relevant AM to lead your project.</p>
  <div className='w-fit pt-4 md:pt-10 flex items-center gap-5 group cursor-pointer' ><div className='h-10 w-10 md:h-16 md:w-16 rounded-full border-[1px] border-orange-600 group-hover:bg-orange-200 flex justify-center items-center' ><Image  src={arrow} alt=""/></div><h1 className="font-semibold text-lg md:text-2xl group-hover:text-orange-600 ">Discover details</h1></div>
  </div>
  <div className='w-1/2  rounded-2xl h-[450px] overflow-hidden'><Image  className='w-full' src={four} alt='' /></div>
</div>



{/* 5 */}


<div className={`w-full flex items-center shadow-md ${meet===5?` flex `:` hidden `} justify-between p-[3%] rounded-3xl bg-white `} >
  <div className='w-1/2 p-[2%]'>
  <Image className='w-72' src={profile} alt='' />
  <h1 className='text-4xl pt-10 leading-[82px] font-semibold'>Email Tech Expert</h1>
  <p className='text-2xl leading-10 opacity-70'>Account managers take care of every need you might have and outline the objectives to launch a successful campaign. With an industry pro in every niche, we’ll find the most relevant AM to lead your project.</p>
  <div className='w-fit pt-4 md:pt-10 flex items-center gap-5 group cursor-pointer' ><div className='h-10 w-10 md:h-16 md:w-16 rounded-full border-[1px] border-orange-600 group-hover:bg-orange-200 flex justify-center items-center' ><Image  src={arrow} alt=""/></div><h1 className="font-semibold text-lg md:text-2xl group-hover:text-orange-600 ">Discover details</h1></div>
  </div>
  <div className='w-1/2  rounded-2xl h-[450px] overflow-hidden'><Image className='w-full' src={five} alt='' /></div>
</div>


</div>

</div>
{/* <div className='py-20 px-[5%]'>
  <h1 className='max-sm:text-xl text-3xl font-semibold text-orange-600 leading-[40px] text-center'>Ready to Scale Your Sales?</h1>
  <h1 className='max-sm:text-3xl text-6xl  py-5 font-semibold leading-[70px] text-center'>Let CloserGod drive qualified leads straight to your pipeline. Contact us today to unlock your business{"'"}s full potential!</h1>
  <div className='w-40 cursor-pointer hover:opacity-80 md:mt-10 py-2 px-2 rounded-xl mx-auto bg-orange-600 text-white text-center font-semibold text-xl'>BOOK A CALL</div>
</div> */}
<div id='1' className='bg-[--background]  relative  py-20 -z-10 px-[5%] '>
    
    <div className="  absolute element -top-2 left-10  lg:-top-10 lg:left-32 w-16 h-16 lg:w-44 lg:h-44 bg-gradient-to-br from-orange-500/20 to-orange-600 shadow-orange-600 shadow-md rounded-full " />
    <div className=" absolute -top-16 -left-24 lg:-top-32 lg:-left-52 w-40 h-40 lg:w-96 lg:h-96 bg-white rounded-full opacity-65 shadow-md" />
    <div className=" max-md:hidden element absolute  -top-40 right-0 w-64 h-64 lg:w-72 lg:h-72 b bg-gradient-to-br from-black to-white border-2 border-white rounded-full opacity-10 shadow-md" />
    <div className="relative text-center space-y-8">
            <div className="space-y-4">
              <p  className="text-orange-500 font-semibold ">Ready to Scale Your Sales?</p>
              <h1 className="text-4xl md:text-[4.5rem]  font-bold md:leading-[82px] tracking-tight">
              Let CloserGod drive  
                <br />
                qualified leads straight
                <br />
                to your pipeline.
              </h1>
            </div>
            <p className="text-gray-600 max-sm:px-4 max-sm:-mt-4 max-w-3xl lg:w-[600px] mx-auto md:text-lg">
            Contact us today to unlock your business{"'"}s full potential!
            </p>
            <div className="px-4">
           
            </div>
          </div>
          
          
    
    </div>
    <div className='  w-full z-0 relative -mt-20 pb-20 flex justify-center'>
          <button className="bg-orange-600 max-sm:w-full  max-sm:mx-2  hover:bg-opacity-80 text-white rounded-md text-lg font-semibold px-10 py-4">
              Get a quote
            </button>
          </div>

</div>
    
  )
}
