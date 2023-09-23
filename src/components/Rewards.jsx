import React from 'react';
import rewards from "../assets/Rewards.png";
import trophy from "../assets/trophy.png";
import partners from "../assets/partners.png";
import sata from '../assets/sata.png';
import stars from "../assets/stars.png"
import DarkStar from "../assets/DarkStar.png";

const Rewards = () => {
  return (
   <section className=' p-10 md:py-16 md:px-32 border-b-[1px] border-slate-600 bg-gradient-to-r from-indigo-900 via-purple-900 overflow-hidden '>
          <div className=' md:w-1/3  md:ml-auto flex flex-col justify-center items-center md:justify-end md:items-end mb-10 relative'>
              <img src={stars} className=' absolute left-0' alt="" />
                    <p className=' md:self-start font-bold text-4xl'>Prizes and</p>
                    <p className=' md:self-start text-[#D434FE] font-bold text-4xl'>Reward</p>
              <p className=' text-sm text-center md:text-start mt-3'>Highlights of prices or reward for winners and for participants</p>
              <img src={sata} alt="" />
                </div>
                <div className=' flex flex-col md:flex-row items-center justify-center gap-10'>
                    <div>
                        <img src={trophy} alt="" />
                    </div>
                    <div>
                        <img src={rewards} alt="" />
                    </div>
                </div>

                <div  className=' flex flex-col items-center justify-center gap-10 p-10 mt-10'>
                    <div>
                        
                    <p className=' text-center text-3xl font-bold'>
                      Partners and Sponsors
                      <img src={sata} alt="" />
                    </p>
                    <p className=' text-center text-xs md:w-3/5 mx-auto mt-4'>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
                    </div>
                    <div className=' md:w-full md:h-full '>
                        <img className=' md:object-cover md:w-2/3 md:mx-auto' src={partners} alt="" />
                    </div>

                </div>
                <img src={DarkStar} alt="" />
            </section>
  )
}

export default Rewards