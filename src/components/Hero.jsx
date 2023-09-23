import React from 'react'
import stars from "../assets/stars.png"
import light from "../assets/light.png";
import { Link } from 'react-router-dom';
import countDown from "../assets/CountdownTime.png";
import smartGlass from "../assets/man_wearing_smart_glasses.png";
import globe from "../assets/globe.png";
import chain from "../assets/chain.png";
import star from "../assets/star.png";
import DarkStar from "../assets/DarkStar.png";
import vectorLine from "../assets/VectorLine.png";


const Hero = () => {
  return (
 <section className=' px-10 pt-10 border-b-[1px] border-slate-600 bg-gradient-to-r from-indigo-900 via-purple-900 overflow-hidden'>
                    <div className=' text-white md:text-3xl text-md font-semibold text-center md:text-right md:mr-10 relative'>Igniting a Revolution In HR Innovation <img src={vectorLine} className=' absolute right-0 top-7 md:top-10 w-32 md:w-48' alt="" /></div>
                <div className=' mt-7 flex flex-col md:flex-row justify-center items-center gap-4 relative'>
              <img src={stars} className=' absolute top-0 left-10 w-3' alt="" />
              <img src={DarkStar} className=' absolute bottom-32 left-96' alt="" />
                    <div className=' md:gap-5 md:mt-10 md:self-start gap-4 md:items-start flex flex-col items-center justify-center relative'>
           
                        <div className=' relative'>
                            <p className=' text-3xl md:text-6xl font-bold'> getLinked Tech</p>
                      <img src={light} className=' absolute -top-2 right-8' alt="" />
                    
                        </div>
                      
                        <div className=' flex items-center gap-2'>

                            <p  className=' text-3xl md:text-6xl font-bold'>Hackathon <span className='text-[#D434FE]'>1.0 </span></p>
                            <img className=' md:w-9 w-4'  loading='lazy' src={star} alt="" /> <img className=' md:w-9 w-4'src={chain} alt="" />
                        </div>
                            <p className=' text-sm md:text-lg md:w-5/6 w-4/6 text-justify'>Participate in getLinked tech Hackathon 2023 and stand a chance to win a Big Prize</p>
                              <div>
                             <button className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-sm px-5 py-2'><Link to={'/register'}>Register</Link></button>
                            </div>
                            <div className='md:mt-10'>
                                <img  loading='lazy' src={countDown} alt="" />
                            </div>
                    </div>
              <div className=' relative '>
                        <img src={DarkStar} className=' absolute top-10 left-10' alt="" />
                        <div className=' absolute md:-left-10'>
                              <img  loading='lazy' src={globe} className='' alt="" />
                        </div>
                      
                        <img className='' src={smartGlass} alt="" />
                    </div>
              
                </div>  
     
            </section>
  )
}

export default Hero