import React from 'react';
import getLinkedLogo from "../assets/getlinked.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri"
import {FiPhoneCall} from "react-icons/fi"
import {HiLocationMarker} from "react-icons/hi"
import { Link } from 'react-router-dom';
import sata from '../assets/sata.png';
import stars from "../assets/stars.png"
import DarkStar from "../assets/DarkStar.png";

const Footer = () => {
  return (
    <footer className=' p-8 md:py-10 md:px-32 relative  bg-[#150E28] overflow-hidden text-white'>
      <img src={sata} className=' absolute top-10 right-20' alt="" />
      <img src={stars} className=' absolute bottom-10 left-20' alt="" />
      <img src={DarkStar} className=' absolute top-10 left-0' alt="" />
      <img src={sata} className=' absolute top-0 right-80' alt="" />
      <section className=' flex flex-col md:flex-row md:gap-5 md:justify-between md:items-start '>
        <div className='  md:w-2/5 w-4/5 text-justify mb-5'>
          <div><Link to={"/"}> <img src={getLinkedLogo} className=' w-36' alt="" /></Link></div>
          <p className='text-xs mt-2 mb-10'>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
          <p>Terms of use <span className=' text-[#D434FE]'>|</span> Privacy Policies</p>
        </div>
        <div className=' flex flex-col items-start gap-2'>
          <p className=' text-[#D434FE]'>Useful Links</p>
          <ul className=' text-sm'>
            <li className=' my-3'><a href="/#overview">Overview</a></li>
            <li className=' my-3'><a href="/#timeline">Timeline</a></li>
            <li className=' my-3'><a href="/#faqs">FAQS</a></li>
            <li className=' my-3'><Link to="/register">Register</Link></li>
          </ul>
          <div className=' flex items-center justify-start gap-2 mb-5 cursor-pointer'>
            <p className='text-[#D434FE]'>follow us</p>
            <AiOutlineInstagram />
            <RiTwitterXFill />
            <BiLogoFacebook />
            <BiLogoLinkedin/>
          </div>
        </div>
        <div className=' flex flex-col items-start gap-5'>
          <p className=' text-[#D434FE]'>Contact Us</p>
          <div className=' flex items-center gap-3 text-sm'><FiPhoneCall />+234 262618117</div>
          <div className=' flex items-center gap-3 text-sm'><HiLocationMarker/><address>27,Alara Street Yaba 100012 Lagos State</address></div>
        </div>
      </section>
      <div className=' text-center my-5'>   <small className=''>All rights Reservered &copy; getLinked Ltd</small></div>
    
    </footer>
  )
}

export default Footer