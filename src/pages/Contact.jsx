import React, { useState } from 'react';
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import sata from '../assets/sata.png';
import stars from "../assets/stars.png"
import DarkStar from "../assets/DarkStar.png";

const Contact = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [contactData, setContactData] = useState({
    email: "",
    first_name: "",
    message: "",
    phone_number:""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContactData(prevState => {
      return {
        ...prevState,
        [name]:value
      }
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    setLoading(true)
    const fetchData = await fetch(" https://backend.getlinked.ai/hackathon/contact-form", {
      method: "POST",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify(contactData)
    })
    const response = await fetchData.json();
    if (response.id) {
      toast.success("Message sent!")
      setLoading(false)
    }

    setContactData({
        email: "",
        first_name: "",
        message: "",
        phone_number:""
    })
   
      setTimeout(() => {
        navigate("/")
      }, 2000);

    
    console.log(response);


  }

  return (
 
    <section className=' flex flex-col md:flex-row gap-5 overflow-hidden md:gap-20 h-full pb-10 w-full justify-center md:justify-around px-10 pt-10 text-white  bg-gradient-to-r from-indigo-900 via-purple-900 '>
      <div className='md:hidden relative'>
        <img src={sata} className=' absolute right-0' alt="" />
        <img src={DarkStar} className=' absolute -bottom-5' alt="" />
        <p className=' text-2xl text-[#D434FE] font-bold'>Questions or need</p>
        <p className=' text-2xl text-[#D434FE] font-bold'>assistance?</p>
        <p className=' text-2xl text-[#D434FE] font-bold'>Let us know about it</p>
        <p className=' text-xs my-5'>Email us below to any question related to our event</p>
      </div>
      <div className=' hidden md:flex md:flex-col md:gap-5 md:justify-start '>
        <p className=' text-2xl text-[#D434FE] font-bold'>Get in touch</p>
        <div className=' relative '>
          <img src={sata} className=' absolute right-0' alt="" />
          <p>Contact</p>
          <p>Information</p>
        </div>
        <div>
          <address>
            27,Alara Street <br /> Yaba 100012 <br /> Lagos state
          </address>
          </div>
          <p>Call Us : 07067981819</p>
          <div>
            <p>We are open from Monday-Friday</p>
            <p>08:00am - 05:00pm</p>
          </div>
          <div>
            <p className=' self-center text-[#D434FE] mb-1'>Share on</p>
              <div className=' flex self-center gap-2 cursor-pointer'>
          <AiOutlineInstagram />
          <BiLogoFacebook />
          <BiLogoLinkedin />
          <RiTwitterXFill/>
      </div>
          </div>
        </div>
      <div >
        <form onSubmit={handleSubmit} className=' flex flex-col gap-2 rounded-lg md:drop-shadow-lg md:p-10 md:bg-gradient-to-r from-purple-900 via-indigo-900 '>
          <div >
          <p className=' text-2xl text-[#D434FE] font-bold hidden md:block'>Questions or need assistance?</p>
            <p className=' text-2xl text-[#D434FE] font-bold hidden md:block'>Let us know about it!</p>
            </div>
        <label htmlFor="first_name"> First Name</label>
        <input required onChange={handleChange} name='first_name' value={contactData.first_name} id='first_name' type="text" placeholder='First Name' className=' p-2 text-sm outline-none rounded-md bg-[#150E28] border border-white focus:border-pink-500 duration-500' />
        <label htmlFor="phone_number">Phone Number</label>
        <input required onChange={handleChange} name='phone_number' value={contactData.phone_number} id='phone_number' type="text" placeholder='Enter phone number' className=' p-2 text-sm outline-none rounded-md bg-[#150E28] border border-white focus:border-pink-500 duration-500'/>
        <label htmlFor="email">Email</label>
        <input required onChange={handleChange} type="email" name="email" value={contactData.email} placeholder='Enter email address' id="email" className=' p-2 text-sm outline-none rounded-md bg-[#150E28] border border-white focus:border-pink-500 duration-500' />
        <label htmlFor="message">Message</label>
          <textarea required onChange={handleChange} name="message" value={contactData.message} id="message" className="bg-[#150E28] outline-none h-32  w-full p-2 text-sm  border rounded-md mb-6 focus:border-pink-500 duration-500"></textarea>
          <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-sm px-5 py-2 w-1/2 self-center'>{loading ? "Submitting" : "Submit"}</button>
        </form>
      </div>
         <p className=' self-center text-[#D434FE] md:hidden'>Share on</p>
      <div className=' flex self-center gap-2 md:hidden'>
          <AiOutlineInstagram />
          <BiLogoFacebook />
          <BiLogoLinkedin />
          <RiTwitterXFill/>
      </div>
      </section>

  )
}

export default Contact