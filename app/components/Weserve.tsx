'use client'

import Image from 'next/image'
import Link from "next/link"
import agency from '../../public/you industry/weserve/agencies.svg';
import constraction from '../../public/you industry/weserve/construction.svg';
import consulting from '../../public/you industry/weserve/Consulting.svg';
import financial from '../../public/you industry/weserve/Finances.svg';
import health from '../../public/you industry/weserve/healthcare.svg';
import information from '../../public/you industry/weserve/Information Technology.svg';
import logistic from '../../public/you industry/weserve/Logistics.svg';
import manufacturing from '../../public/you industry/weserve/manufacturing.svg';
import media from '../../public/you industry/weserve/media-production.svg';
import recruite from '../../public/you industry/weserve/Outstaffing.svg';
import saas from '../../public/you industry/weserve/Saas.svg';
import telecom from '../../public/you industry/weserve/telecom.svg';
import clutch from '../../public/you industry/weserve/clutch.BZMOR0o1.svg';

export default function Weserve() {
  const sectors = [
    {
      icon: agency,
      title: "Agencies",
      description: "We help marketing and creative agencies ditch the busywork and focus on building client relationships.",
      href: "/agencies"
    },
    {
      icon: constraction,
      title: "Construction",
      description: "We know how to beat seasonality issues in the construction sector to double your profits.",
      href: "/construction"
    },
    {
      icon: consulting,
      title: "Consulting",
      description: "We make the value prop of B2B consultants clear and captivating, securing more meetings with key decision-makers.",
      href: "/consulting"
    },
    {
      icon: financial,
      title: "Financial services",
      description: "We know how to craft and present your unique value proposition to make it resonate with your prospects.",
      href: "/financial-services"
    },
    {
      icon: health,
      title: "Healthcare",
      description: "Get up to 30 monthly appointments with B2B decision-makers in the health and medical sectors.",
      href: "/healthcare"
    },
    {
      icon: information,
      title: "Information technologies",
      description: "Secure a predictable flow of appointments with prospects and scale your business even in the tightest market.",
      href: "/it"
    },
    {
      icon: logistic,
      title: "Logistics",
      description: "We handpick perfect-fit leads for your complex offerings, filling your pipeline with quality meetings.",
      href: "/logistics"
    },
    {
      icon: manufacturing,
      title: "Manufacturing",
      description: "We handpick perfect-fit leads for your complex offerings, filling your pipeline with quality meetings.",
      href: "/manufacturing"
    },
    {
      icon: media,
      title: "Media production",
      description: "Fill your sales pipeline with selected media production leads and get dozens of appointments with Belkins smart outreach.",
      href: "/media"
    },
    {
      icon: recruite,
      title: "Recruitment and staffing",
      description: "We attract the perfect clients and candidates for your agency, saving you precious time and doubling ROI.",
      href: "/recruitment"
    },
    {
      icon: saas,
      title: "SaaS services",
      description: "Enhance your sales pipeline with our expertise in generating high-quality prospects in the SaaS field.",
      href: "/saas"
    },
    {
      icon: telecom,
      title: "Telecommunication",
      description: "Your sales tactics don't work anymore? Our omnichannel approach generates a steady stream of high-quality telecom leads.",
      href: "/telecom"
    }
  ]

  const reviews = [
    {
      platform: "Clutch",
      score: "4.9",
      reviews: "221",
      logo: clutch
    },
    {
      platform: "G2",
      score: "4.8",
      reviews: "88",
      logo: clutch
    },
    {
      platform: "Upcity",
      score: "5.0",
      reviews: "61",
      logo: clutch
    }
  ]

  return (
    <div id='serve' className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="font-semibold text-4xl md:text-[3.5rem] lg:leading-[60px]">Industries we serve</h1>
        <p className=" max-sm:py-2 text-gray-600  md:text-[1.23rem] md:py-3 lg:py-5 opacity-75 leading-snug lg:w-[60%] mx-auto">
          Leverage Belkins expertise in 50+ industries to target the right audience and acquire qualified B2B leads. 
          Choose your industry to find out how Belkins optimizes sales for businesses across various markets.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
          {reviews.map((review) => (
            <div key={review.platform} className="flex items-center gap-3">
              <Image
                src={review.logo}
                alt={`${review.platform} logo`}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{review.platform}</span>
                  <span className="text-gray-600">/ {review.score} score</span>
                </div>
                <div className="text-sm text-gray-600">{review.reviews} reviews</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sectors.map((sector) => {
         
          return (
            <div
              className="block group"
            >
              <div className="bg-white rounded-lg p-6 shadow-sm transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md h-full">
                <div className="mb-4 w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                  <Image src={sector.icon} alt='' className="w-6 h-6 text-orange-500" />
                </div>
                <h2 className="text-xl font-semibold mb-2">{sector.title}</h2>
                <p className="text-gray-600 mb-4">{sector.description}</p>
                
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}