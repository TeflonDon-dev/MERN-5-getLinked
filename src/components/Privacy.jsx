import React from 'react';
import vector from "../assets/Vector1.png"
import boy from "../assets/boy.png";
import { BsCheckCircleFill } from "react-icons/bs";
import sata from '../assets/sata.png';
import stars from "../assets/stars.png"
import DarkStar from "../assets/DarkStar.png";

const Privacy = () => {
  return (
      <section className=' p-8 md:py-16 md:px-32 border-b-[1px] border-slate-600 bg-gradient-to-r from-indigo-900 via-purple-900 overflow-hidden'>
          <img src={DarkStar} alt="" />
          <div className='  text-center md:text-start'>
              <p className=' text-2xl font-bold'>Privacy policy and</p>
              <p className=' text-[#D434FE] text-2xl font-bold'>Terms</p>
              <p className=' my-5 text-xs text-slate-300'>Last updated on September 12, 2023</p>
              <p  className=' mt-5 text-xs'>Below are our privacy and policies, which outline a lot of goodies.</p>
              <p className=' text-xs'>Its our aim to always take care of our participants.</p>
          </div>
          
              <img src={sata} alt="" />
          <div className=' flex flex-col items-start justify-start gap-20 md:flex-row mt-10'>
              <div className=' border-2 border-[#D434FE] rounded-md p-10 text-xs md:w-4/5 md:mx-auto text-slate-300 relative'>
                    <img src={sata} alt="" className='absolute right-0' />
                  <p className=' mb-5'>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>

                  <p className=' text-md text-[#D434FE] mb-3 font-medium'>Licensing Policy</p>
                  <p className=' font-medium mb-3 text-white'>Here are terms of our standard License</p>
                  <div className=' flex items-start justify-start gap-2 mb-3'>
                      <BsCheckCircleFill className=' text-green-500 ' />
                      <p>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                  </div>
                  <div className=' flex items-center justify-center gap-2 mb-5'>
                      <BsCheckCircleFill className=' text-green-500' />
                      <p>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                  </div>
                  <button className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-7 py-3 mx-auto block'>Read More</button>
              </div>

              <div className='md:w-full md:h-full relative'>
                  <img className=' md:w-3/4 md:object-cover' src={boy} alt="" />
                  <img src={vector} alt="" className=' absolute -top-32 -right-10 md:right-14 md:w-3/4 ' />
                  <img src={stars} className='absolute top-0 left-0' alt="" />
                  <img src={stars} className='absolute top-0 right-0' alt="" />
                  <img src={stars} className='absolute top-20 right-20' alt="" />
                 <img src={sata} alt="" className='absolute right-0' />
              </div>
              
          </div>
  </section>
  )
}

export default Privacy