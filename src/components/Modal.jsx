import React from 'react';
import { closeModal } from '../features/modalSlice';
import { useDispatch } from 'react-redux';
import congratulations from "../assets/congratulation.png"
import winkEmoji from "../assets/winkEmoji.png"
import { useNavigate } from 'react-router-dom';



const Modal = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

  return (
      <aside className=' transition-all duration-500 ease-in flex flex-col items-center justify-center fixed bg-[#150E28] opacity-90 top-0 z-10 left-0 h-screen w-full  '>
          <div className='  border-2 p-3 border-pink-500 py-6 flex flex-col md:w-2/6 md:mt-20 bg-[#150E28] justify-center items-center text-white  w-4/5 rounded-md'>
               <div>
                 <img className=' md:w-64' src={congratulations} alt="" /> 
              </div>
              <p className=' text-xl'>Congratulations</p>
              <p className=' text-xl '>You have successfully</p>
              <p className=' text-xl '>Register</p>
              <div className=' text-xs my-6'>
                  <p>Yes it was easy, and you did it!</p>
                  <p className=' flex items-center '>Check your mailbox for next step <img src={winkEmoji}  alt="" /></p>
              </div>
              <button onClick={() => { dispatch(closeModal()),navigate("/") }} className='w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2 text-sm rounded-sm'>Back</button>
          </div>

    </aside>
  )
}

export default Modal