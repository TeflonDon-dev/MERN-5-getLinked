import React from 'react';
import sata from '../assets/sata.png';
import sataDark from "../assets/sataDark.png";
import arrow from "../assets/arrow.png";
import bigIdea from "../assets/bigIdea.png";

const Introduction = () => {
  return (
  <div className=' flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20'>
                    <div className=' relative'>
                        <img src={sata} className='absolute top-32 -left-10' alt="" />
                           <img src={arrow} className=' absolute bottom-0 right-0' alt="" />
                        <img className='md:max-w-4xl w-96'  loading='lazy' src={bigIdea} alt="" />
                    </div>
                    <div className=' relative'>
                        <img src={sataDark} className=' absolute right-0 top-0' alt="" />
                        <p className=' text-center md:text-start font-bold text-2xl md:text-3xl'>Introduction to getLinked</p>
                        <p className=' text-center md:text-start font-bold mb-5  text-2xl md:text-3xl text-[#D434FE]'>tech Hackathon 1.0</p>
                        <p className=' text-sm text-justify'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
                    </div>
                </div>
  )
}

export default Introduction