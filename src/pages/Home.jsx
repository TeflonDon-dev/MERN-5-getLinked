import React from 'react';
import countDown from "../assets/CountdownTime.png";
import smartGlass from "../assets/man_wearing_smart_glasses.png";
import globe from "../assets/globe.png";
import chain from "../assets/chain.png";
import star from "../assets/star.png";
import bigIdea from "../assets/bigIdea.png";
import readingLady from "../assets/readingLady.png"
import judging from "../assets/judging.png";
import eclipse from "../assets/Ellipse.png";
import timeLine from "../assets/TimelineEdited.png"
import numbers from "../assets/numbers.png"
import rewards from "../assets/Rewards.png";
import trophy from "../assets/trophy.png";
import partners from "../assets/partners.png";
import Privacy from '../components/Privacy';
import star2 from "../assets/star2.png";
import light from "../assets/light.png"
import Faqs from './Faqs';
import { Link } from 'react-router-dom';



const Home = () => {
    return (
      <div className=' text-white'>
            <section className=' px-10 pt-10 border-b-[1px] border-slate-600 bg-gradient-to-r from-indigo-900 via-purple-900 overflow-hidden'>
                    <p className=' text-white md:text-3xl text-md font-semibold text-center md:text-right md:mr-10'>Igniting a Revolution In <span className=' border-b-2 border-pink-500'>HR Innovation</span></p>
                <div className=' mt-7 flex flex-col md:flex-row justify-center items-center gap-4'>
                  
                    <div className=' md:gap-5 md:mt-10 md:self-start gap-4 md:items-start flex flex-col items-center justify-center relative'>
                <img src={star2} className=' absolute top-0 left-10' alt="" />
                        <div className=' relative'>
                            <p className=' text-3xl md:text-6xl font-bold'> getLinked Tech</p>
                         <img src={light} className=' absolute -top-2 right-8' alt="" />
                        </div>
                      
                        <div className=' flex items-center gap-2'>

                            <p  className=' text-3xl md:text-6xl font-bold'>Hackathon <span className='text-[#D434FE]'>1.0 </span></p>
                            <img className=' w-9'  loading='lazy' src={star} alt="" /> <img className=' w-9'src={chain} alt="" />
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
                        <div className=' absolute md:-left-10'>
                              <img  loading='lazy' src={globe} className='' alt="" />
                        </div>
                      
                        <img className='' src={smartGlass} alt="" />
                    </div>
              
                </div>  
     
            </section>

            <section className=' p-10 border-slate-600 md:px-32 border-b-[1px] bg-[#150E28] overflow-hidden'>
                <div className=' flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20'>
                    <div>
                        <img className='md:max-w-4xl w-96'  loading='lazy' src={bigIdea} alt="" />
                    </div>
                    <div>
                        <p className=' text-center md:text-start font-bold text-2xl md:text-3xl'>Introduction to getLinked</p>
                        <p className=' text-center md:text-start font-bold mb-5  text-2xl md:text-3xl text-[#D434FE]'>tech Hackathon 1.0</p>
                        <p className=' text-sm text-justify'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
                    </div>
                </div>
            </section>

            <section className=' p-10 md:px-32 border-b-[1px] border-slate-600 bg-gradient-to-r from-indigo-900 via-purple-900 overflow-hidden'>
            <div className=' flex flex-col md:flex-row-reverse items-center justify-center gap-5 md:gap-20'>
                    <div>
                        <img className='md:max-w-6xl w-96'  loading='lazy' src={readingLady} alt="" />
                    </div>
                    <div>
                        <p className='md:text-start text-center font-bold text-2xl md:text-3xl'>Rules and</p>
                        <p className='md:text-start text-center font-bold mb-5  text-2xl md:text-3xl text-[#D434FE]'>Guidelines</p>
                        <p className=' text-sm text-justify'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
                    </div>
                </div>
            </section>

            <section className=' p-10 md:py-16 md:px-32 border-b-[1px] border-slate-600 bg-gradient-to-r from-indigo-900 via-purple-900 overflow-hidden'>
            <div className=' flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20'>
                    <div className=' relative  z-20 md:w-full md:h-full'>
                        <img className='md:w-full w-96 md:object-cover' src={judging} loading='lazy' alt="" />
                        <img src={eclipse}  loading='lazy' alt='' className='md:absolute md:-top-2 md:left-12 hidden md:block w-20 -z-10'/>
                    </div>
                    <div>
                        <p className='md:text-start text-center font-bold text-2xl md:text-3xl'>Judging Criteria</p>
                        <p className='md:text-start text-center font-bold mb-5  text-2xl md:text-3xl text-[#D434FE]'>Key Attributes</p>
                        <ul className=' text-sm text-justify'>
                            <li  className=' my-4 '>
                                <span className='text-[#FF26B9] font-medium'>Innovation and creativity: </span>
                                Evaluate the uniqueness and creativity of the
                                solution. Consider whether it addresses a real-world problem in a novel 
                                way or introduces innovative features.
                            </li>
                            <li className=' my-4 '>
                                <span className='text-[#FF26B9] font-medium'>Functionality: </span>
                                 Assess how well the solution works. Does it perform its 
                                intended functions effectively and without major issues? Judges would
                                consider the completeness and robustness of the solution.
                            </li>
                            <li className=' my-4 '>
                                <span className='text-[#FF26B9] font-medium'>Impact and Relevance: </span>
                                Determine the potential impact of the solution 
                                in the real world. Does it address a significant problem, and is it relevant 
                                to the target audience? Judges would assess the potential social, 
                                economic, or environmental benefits.
                            </li>
                            <li>
                                <span className='text-[#FF26B9] font-medium'>Technical Complexity: </span>
                                Evaluate the technical sophistication of the solution. 
                                Judges would consider the complexity of the code, the use of advanced 
                                technologies or algorithms, and the scalability of the solution.
                            </li>
                            <li className=' my-4 '>
                                <span className='text-[#FF26B9] font-medium'>Adherance to Hackathon Rules:</span>
                                Judges will Ensure that the team adhered 
                                to the rules and guidelines of the hackathon, including deadlines, use of 
                                specific technologies or APIs, and any other competition-specific requirements.
                            </li>
                        </ul>
                        <div className=' flex items-center justify-center md:justify-start  md:items-start mt-10'>
                              <button className=' px-5 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-sm text-white text-sm '>Read More</button>
                        </div>
                      
                    </div>
                </div>
            </section>

            <section>
                <Faqs />
            </section>

            <section className=' p-10  md:px-32 border-b-[1px] border-slate-600 bg-[#150E28] overflow-hidden hidden md:flex'>
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
            <section className=' p-10  md:px-32 border-b-[1px] border-slate-600 bg-[#150E28] overflow-hidden md:hidden'>
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

            <section className=' p-10 md:py-16 md:px-32 border-b-[1px] border-slate-600 bg-gradient-to-r from-indigo-900 via-purple-900 overflow-hidden'>
                <div className=' md:w-1/3  md:ml-auto flex flex-col justify-center items-center md:justify-end md:items-end mb-10'>
                    <p className=' md:self-start font-bold text-4xl'>Prizes and</p>
                    <p className=' md:self-start text-[#D434FE] font-bold text-4xl'>Reward</p>
                    <p className=' text-sm text-center md:text-start mt-3'>Highlights of prices or reward for winners and for participants</p>
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
                    </p>
                    <p className=' text-center text-xs md:w-3/5 mx-auto mt-4'>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
                    </div>
                    <div className=' md:w-full md:h-full '>
                        <img className=' md:object-cover md:w-2/3 md:mx-auto' src={partners} alt="" />
                    </div>

                </div>

            </section>

            <section>
                <Privacy/>
            </section>
            </div>
  )
}

export default Home