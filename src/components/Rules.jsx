import React from 'react';
import stars from "../assets/stars.png"
import DarkStar from "../assets/DarkStar.png";
import readingLady from "../assets/readingLady.png";

const Rules = () => {
  return (
   <div className=' flex flex-col md:flex-row-reverse items-center justify-center gap-5 md:gap-20'>
                    <div>
                        <img className='md:max-w-6xl w-96'  loading='lazy' src={readingLady} alt="" />
                    </div>
                    <div className=' relative'>
                        <img src={stars} className=' absolute w-4 bottom-0 -right-10' alt="" />
                        <img src={DarkStar} className=' absolute -top-10 left-60' alt="" />
                        <p className='md:text-start text-center font-bold text-2xl md:text-3xl'>Rules and</p>
                        <p className='md:text-start text-center font-bold mb-5  text-2xl md:text-3xl text-[#D434FE]'>Guidelines</p>
                        <p className=' text-sm text-justify'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
                    </div>
                </div>
  )
}

export default Rules