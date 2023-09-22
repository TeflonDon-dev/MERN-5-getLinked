import React from 'react';
import congratulations from "../assets/congratulation.png"
import winkEmoji from "../assets/winkEmoji.png"
import { Link } from 'react-router-dom';

const RegisterSuccess = () => {
  return (
      <section className=' text-white  px-10 pt-10 bg-[#150E28] overflow-hidden'>
          <div className=' border-2 border-pink-500 p-8 rounded-md flex flex-col items-center justify-center md:w-2/6 md:my-5 mx-auto'>
              <div>
                 <img src={congratulations} alt="" /> 
              </div>
              <p className=' text-xl'>Congratulations</p>
              <p className=' text-xl '>You have successfully</p>
              <p className=' text-xl '>Register</p>
              <div className=' text-xs my-6'>
                  <p>Yes it was easy, and you did it!</p>
                  <p className=' flex items-center '>Check your mailbox for next step <img src={winkEmoji} alt="" /></p>
              </div>
              <button className='w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2 text-sm rounded-sm'><Link to='/'>Back</Link></button>
          </div>
 </section>
  )
}

export default RegisterSuccess