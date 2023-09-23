import React from 'react';
import timeLine from "../assets/TimelineEdited.png"
import numbers from "../assets/numbers.png"

const TimeLine = () => {
  return (
      <>
         <section  className=' p-10 md:px-32 border-b-[1px] border-slate-600 bg-[#150E28] overflow-hidden hidden md:flex'>
                <div className=' flex flex-col items-center justify-center mx-auto'>
                    <div className=' flex item-center justify-center flex-col gap-7 '>
                        <p className=' text-center text-2xl font-bold'>
                            Timeline
                        </p>
                        <p className=' w-3/5 text-xs text-center mx-auto'>
                           Here is the breakdown of the time we anticipate using for the upcoming event.
                        </p>
                    </div>
                    <div>
                        <img src={timeLine} alt="" />
                    </div>
                </div>
                </section>
                  <section className=' p-10  md:px-32 border-b-[1px] border-slate-600 bg-[#150E28] overflow-hidden md:hidden '>
                <div className=' flex item-center justify-center flex-col gap-7  mb-10'>
                        <p className=' text-center text-2xl font-bold'>
                            Timeline
                        </p>
                        <p className=' w-4/5  mx-auto text-xs text-center'>
                           Here is the breakdown of the time we anticipate using for the upcoming event.
                        </p>
                    </div>
                <div className=' flex items-start justify-start'>
                    
                    <div className=' basis-1/5'>
                        <img src={numbers} alt="" />
                    </div>
                    <div>
                        <div className=' text-sm'>
                            <p className=' mb-2 text-[#D434FE]'>Hackathon Announcement</p>
                            <p className=' text-xs '>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                            <p className='text-[#D434FE] mt-2'>November 18, 2023</p>
                       </div>
                        <div className=' text-sm my-7'>
                            <p className=' my-2 text-[#D434FE]'>Teams Registration begins</p>
                            <p className=' text-xs my-1'>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                            <p className='text-[#D434FE]'>November 18, 2023</p>
                       </div>
                        <div className=' text-sm'>
                            <p className=' my-2 text-[#D434FE]'>Teams registration ends</p>
                            <p className=' text-xs my-1'>Interested Participants are no longer Allowed to register</p>
                            <p className='text-[#D434FE] my-7'>November 18, 2023</p>
                       </div>
                        <div className=' text-sm my-7'>
                            <p className=' my-1 text-[#D434FE]'>Announcement of the accepted teams and ideas</p>
                            <p className=' text-xs my-1'>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                            <p className='text-[#D434FE] my-6'>November 18, 2023</p>
                       </div>
                        <div className=' text-sm my-7'>
                            <p className=' my-1 text-[#D434FE]'>GetLinked 1.0 hackathon officially Begins</p>
                            <p className=' text-xs my-1'>Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
                            <p className='text-[#D434FE] mt-7'>November 18, 2023</p>
                       </div>
                        <div className=' text-sm my-7'>
                            <p className=' my-1 text-[#D434FE]'>Demo day</p>
                            <p className=' text-xs my-1'>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                            <p className='text-[#D434FE] mt-2'>November 18, 2023</p>
                       </div>
                    </div>
                </div>
            </section>
      </>
  )
}

export default TimeLine