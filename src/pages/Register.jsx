import React, { useState } from 'react';
import programmer from '../assets/programmer.png'
import { useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast"

const Register = () => {

    const navigate=useNavigate()

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
            
              navigate('/registerSuccess')
   
        } else {
            toast.error(response.email)
        }
          
              
         
    }

  return (
 <section className=' text-white pb-10 px-5 md:px-10 pt-10 border-b-[1px] bg-gradient-to-r from-indigo-900 via-purple-900  overflow-hidden flex flex-col md:flex-row gap-5'>
          <div>
              <img src={programmer} alt="" />
          </div>
          <div className='bg-[#150E28]  rounded-lg p-5 md:p-10'>
              <div className=' mb-5'>
                  <p className=' text-2xl font-bold mb-5 text-pink-500'>Register</p>
                  <p className=' text-sm'>Be part of the movement...</p>
                  <p>🚶‍♂️🚶‍♀️</p>
                  <p className=' text-2xl font-bold'>CREATE YOUR ACCOUNT</p>
              </div>
              <form onSubmit={handleSubmit} className=' text-black flex flex-col w-full gap-3'>
                  <label htmlFor='team_name' className=' text-white'>Teams Name</label>
                  <input required onChange={handleChange} value={formData.team_name} type="text" name="team_name" id="team_name" className=' p-2 text-lg outline-none rounded-md' placeholder='Enter the name of your group'/>
                  <label className=' text-white' htmlFor="phone_number">Phone number</label>
                  <input required onChange={handleChange} value={formData.phone_number} name='phone_number' id='phone_number' type="text"  className=' p-2 text-lg outline-none rounded-md' placeholder=' Enter your phone number' />
                  <label htmlFor="email" className=" text-white">Email</label>
                  <input required onChange={handleChange} value={formData.email} type="email"  className=' p-2 text-lg outline-none rounded-md' name="email" id="email" placeholder='Enter your email address'/>
                  <label htmlFor="project_topic" className=" text-white">Project Topic</label>
                  <input required onChange={handleChange} value={formData.project_topic} name='project_topic' id='project_topic' type="text"  className=' p-2 text-lg outline-none rounded-md' placeholder=' what is your group project topic'/>
                  <label htmlFor="" className=" text-white">Category</label>
                  <select required  onChange={handleChange} name="category" value={formData.category} id="category"  className=' p-2 text-lg outline-none rounded-md'>
                      <option value="">select your category</option>
                      <option value="1">Mobile</option>
                      <option value="2">Web</option>
                  </select>
                  <label htmlFor="group_size" className="text-white">Group size</label>
                  <select required onChange={handleChange} value={formData.group_size} name="group_size" id="group_size"  className=' p-2 text-lg outline-none rounded-md'>
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
                  <p className=' text-pink-500 text-xs'>Please review your registration details before submitting</p>
                  <label htmlFor="privacy_poclicy_accepted" className=' gap-2 text-white text-xs flex items-center'>
                      <input  onChange={handleChange} type="checkbox" name="privacy_poclicy_accepted" id="privacy_poclicy_accepted" checked={ formData.privacy_poclicy_accepted} />
                      I agreed with the terms and conditions and the privacy policy
                  </label>
                  <button  className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full text-white py-3'>Register Now</button>
              </form>
          </div>
    </section>
  )
}

export default Register