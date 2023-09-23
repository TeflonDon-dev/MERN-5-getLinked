import React from 'react';
import judging from "../assets/judging.png";
import eclipse from "../assets/Ellipse.png";
import sata from '../assets/sata.png';
import stars from "../assets/stars.png"
import DarkStar from "../assets/DarkStar.png";

const JudgingCriteria = () => {
  return (
    <div className=' flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20'>
          <div className=' relative  z-20 md:w-full md:h-full'>
              <img src={DarkStar} className=' absolute top-36 right-36' alt="" />
              <img src={sata} className='absolute -top-20 left-20' alt="" />
            
                        <img className='md:w-full w-96 md:object-cover' src={judging} loading='lazy' alt="" />
                        <img src={eclipse}  loading='lazy' alt='' className='md:absolute md:-top-2 md:left-12 hidden md:block w-20 -z-10'/>
                    </div>
          <div className=' relative '>
                <img src={stars} className=' absolute bottom-10 -left-5' alt="" />
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
                                <span className='text-[#FF26B9] font-medium'>Adherance to Hackathon Rules: </span>
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
  )
}

export default JudgingCriteria