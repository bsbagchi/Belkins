'use client'

import React from 'react'
import Link from 'next/link'

const services = [
  {
    title: "Appointment Setting",
    description: "All-inclusive B2B appointment booking with high lead-to-deal potential. Start getting new opportunities within weeks.",
    tag: null
  },
  {
    title: "Cold Email Outreach",
    description: "Increase engagement, appointment attendance, and conversion to deals with clear-cut outreach campaigns.",
    tag: "POPULAR"
  },
  {
    title: "Intent-Based Cold Calling",
    description: "Multiply your appointment rate by 30% by activating phone conversations with prospects and securing high-ticket deals.",
    tag: null
  },
  {
    title: "Account-Based Marketing",
    description: "Build strong partnerships with high-value accounts through hyper-targeted and personalized outreach campaigns.",
    tag: "NEW"
  },
  {
    title: "LinkedIn Lead Generation",
    description: "Achieve a 15% higher sales closing rate by developing your brand image and reaching your prospects directly.",
    tag: null
  },
  {
    title: "Outsourced SDR Service",
    description: "A simple and 4 times cheaper solution to reinforce your sales team compared to expanding an in-house department.",
    tag: null
  },
  {
    title: "Lead Generation Training",
    description: "Receive 360° support for your outreach campaigns at any stage or train your outbound sales team from scratch.",
    tag: null
  }
]

export default function Lead() {
  return (
    <div id='2'>
      <div className='bg-[--background]'>
        <div className='pt-10 md:pt-20 text-center'>
          <h1 className='font-bold max-sm:text-3xl text-[3.5rem] leading-[65px]'>Lead generation <br/> services that win clients</h1>
          <p className='md:text-lg opacity-70 py-2'>You can put all your energy into scaling your business while we set up a <br className='max-sm:hidden' /> consistent stream of vetted business leads to your pipeline.</p>
        </div>
        <div className='flex flex-wrap px-[5%] gap-x-6 gap-y-8 justify-center py-10 md:py-20'>
          {services.map((service, index) => (
            <div key={index} className="relative w-[350px] h-[300px] max-sm:w-[320px] max-sm:h-[270px] group overflow-hidden rounded-2xl p-5 bg-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
              <h2 className='font-semibold text-[1.34rem] max-sm:text-[1.2rem] leading-10 transition-all duration-300 ease-in-out group-hover:text-orange-600'>{service.title}</h2>
              <p className='text-[1.125rem] pt-2 max-sm:pt-1 leading-8 max-sm:leading-7 opacity-50'>{service.description}</p>
              <Link href='#footer'>
                <div className='h-14 w-14 transition-all duration-300 ease-in-out absolute bottom-4 flex items-center justify-center rounded-full border-2 group-hover:border-orange-600 group-hover:bg-orange-600'>
                  <svg className='rotate-[-40deg] stroke-black h-8 transition-all duration-300 ease-in-out group-hover:stroke-white' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 16H26M19 8L27 16L19 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
              {service.tag && (
                <div className={`absolute top-5 -right-12 w-40 rotate-[44deg] flex items-center justify-center text-xs font-semibold h-6 ${service.tag === 'POPULAR' ? 'bg-orange-600 bg-opacity-30 text-orange-600' : 'bg-green-600 bg-opacity-30 text-green-600'}`}>
                  <h3>{service.tag}</h3>
                </div>
              )}
            </div>
          ))}
          <div className="relative w-[350px] flex flex-col bg-gradient-to-tr from-amber-300 to-white bg-opacity-30 overflow-hidden h-[300px] max-sm:w-[320px] max-sm:h-[270px] justify-center rounded-2xl p-5 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <h2 className='font-semibold text-[1.5rem] text-center leading-10'>Unleash your sales potential with our lead generation services</h2>
            <button className='w-36 mx-auto h-10 flex justify-between px-6 rounded-xl mt-4 items-center bg-white transition-all duration-300 ease-in-out hover:bg-orange-600 hover:text-white group'>
              <span>Book a call</span>
              <span className='text-2xl rotate-90 transition-transform duration-300 ease-in-out group-hover:rotate-[270deg]'>^</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}