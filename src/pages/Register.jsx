import React, { useState } from 'react';
import programmer from '../assets/programmer.png'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { openModal } from '../features/modalSlice';
import sata from '../assets/sata.png';
import stars from "../assets/stars.png"
import DarkStar from "../assets/DarkStar.png";

const Register = () => {

    const dispatch = useDispatch();



    const navigate = useNavigate()
    
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        phone_number: "",
        category: "",
        group_size: "",
        team_name: "",
        project_topic: "",
        privacy_poclicy_accepted:true,
    })

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        
          setFormData(prevstate => ({
      ...prevstate, [name]:type==="checkbox" ? checked : value
    }))
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        
     
    
     setLoading(true)
            const fetchData = await fetch('https://backend.getlinked.ai/hackathon/registration', {
                   method: "POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(formData)
            })
            const response = await fetchData.json()

        console.log(response);

        if (response.id) {
            setLoading(false)
            //   navigate('/registerSuccess')
            dispatch(openModal())
   
        } else {
            toast.error(response.email)
            setLoading(false)
        }
          
              
         
    }

  return (
 <section className=' text-white pb-10 px-5 md:px-10 pt-10 border-b-[1px] bg-gradient-to-r from-indigo-900 via-purple-900  overflow-hidden flex flex-col md:flex-row gap-5 '>
          <div className=' relative'>
              <img src={sata} className=' absolute' alt="" />
              <img src={stars} className=' absolute right-10' alt="" />
              <img src={DarkStar} className=' absolute bottom-0' alt="" />
              <img src={programmer} alt="" />
          </div>
          <div className='bg-[#150E28] rounded-lg p-5 md:p-10  self-center'>
              <div className=' mb-5 relative '>
                      <img src={sata} className=' absolute right-0' alt="" />
                  <p className=' text-3xl font-bold mb-5 text-[#D434FE]'>Register</p>
                  <p className=' text-sm'>Be part of the movement...</p>
                  <p>🚶‍♂️🚶‍♀️</p>
                  <p className=' text-2xl font-bold'>CREATE YOUR ACCOUNT</p>
              </div>
              <form onSubmit={handleSubmit} className=' text-white flex flex-col w-full h-full gap-3'>
                  <div className="md:flex md:gap-3 md:items-center">
                 <div className="md:flex md:flex-col gap-2 mb-2 md:mb-0 flex flex-col">
                  <label htmlFor='team_name' className=' text-white'>Teams Name</label>
                  <input required onChange={handleChange} value={formData.team_name} type="text" name="team_name" id="team_name" className=' p-2 text-sm outline-none rounded-md bg-[#150E28] border  border-white focus:border-pink-500 duration-500' placeholder='Enter the name of your group'/>
                      </div>
                      <div className="md:flex md:flex-col gap-2 flex flex-col">
                          <label className=' text-white' htmlFor="phone_number">Phone number</label>
                  <input required onChange={handleChange} value={formData.phone_number} name='phone_number' id='phone_number' type="text"  className=' p-2 text-sm outline-none rounded-md bg-[#150E28] border border-white focus:border-pink-500 duration-500' placeholder=' Enter your phone number' />
                 </div>
                      </div>
                  <div className="md:flex md:gap-3 md:items-center">
                      <div className="md:flex md:flex-col gap-2 flex flex-col mb-2 md:mb-0">
                  <label htmlFor="email" className=" text-white">Email</label>
                  <input required onChange={handleChange} value={formData.email} type="email"  className=' p-2 text-sm outline-none rounded-md bg-[#150E28] border border-white focus:border-pink-500 duration-500' name="email" id="email" placeholder='Enter your email address'/>
                      </div>
                        <div className="md:flex md:flex-col gap-2 flex flex-col">
                          <label htmlFor="project_topic" className=" text-white">Project Topic</label>
                  <input required onChange={handleChange} value={formData.project_topic} name='project_topic' id='project_topic' type="text"  className=' p-2 text-sm outline-none rounded-md bg-[#150E28] border border-white focus:border-pink-500 duration-500' placeholder=' what is your group project topic'/>
                 </div>
                      </div>
                      <div className=' flex items-center gap-3'>
                      <div className=' flex flex-col gap-2 w-full'>
                  <label htmlFor="" className=" text-white">Category</label>
                  <select required  onChange={handleChange} name="category" value={formData.category} id="category"  className=' p-2 text-sm outline-none rounded-md bg-[#150E28] border border-white focus:border-pink-500 duration-500'>
                      <option value="">select your category</option>
                      <option value="1">Mobile</option>
                      <option value="2">Web</option>
                          </select>
                      </div>
                      <div className=' flex flex-col gap-2 w-full'>
                  <label htmlFor="group_size" className="text-white ">Group size</label>
                  <select required onChange={handleChange} value={formData.group_size} name="group_size" id="group_size"  className=' p-2 text-sm outline-none rounded-md bg-[#150E28] border border-white focus:border-pink-500 duration-500'>
                      <option value="">select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                          </select>
                          </div>
                      </div>
                  <p className=' text-pink-500 text-xs'>Please review your registration details before submitting</p>
                  <label htmlFor="privacy_poclicy_accepted" className=' gap-2 text-white text-xs flex items-center'>
                      <input  onChange={handleChange} type="checkbox" name="privacy_poclicy_accepted" id="privacy_poclicy_accepted" checked={ formData.privacy_poclicy_accepted} />
                      I agreed with the terms and conditions and the privacy policy
                  </label>
                  <button className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full text-white py-3'>{loading ? "Submitting" : "Register Now"}</button>
              </form>
          </div>
    </section>
  )
}

export default Register