 import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai"
import getLinkedLogo from "../assets/getlinked.png";
import { RiMenu4Fill } from "react-icons/ri";

const Nav = () => {
  
    const [open, setOpen] = useState(false);

  const navigate=useNavigate()

  let Links = [
    { name: "Timeline", link: '' },
    { name: "Overview", link: '' },
    { name: "FAQS", link: '' },
    { name: "Contacts", link: '/contact' },
  ];

  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (location.pathname === route) {
      return true;
   }
   
  }




  return (
    <nav className=" border-b-[1px] border-slate-600 text-white w-full fixed top-0 left-0 z-50 bg-[#150E28]">
      <div className=' flex items-center justify-between p-4 md:p-5'>
        <div className='cursor-pointer text-2xl md:text-3xl font-medium flex items-center gap-3'>
          <div>
                      <Link to={"/"}> <img src={getLinkedLogo} className=' w-36 md:w-full' alt="" /></Link>
            </div>
          
        </div>
      
        <div  className=' flex items-center justify-center gap-4 duration-500 text-3xl absolute right-8 top-3 cursor-pointer md:hidden'>
         
          <div onClick={() => setOpen(!open)}> {open ? <AiOutlineClose className=' border-2 rounded-full border-pink-700 w-8 h-8 p-1'/> : <RiMenu4Fill className=' w-8 h-8'/>}</div>
      
         
       </div>
        <ul  onClick={()=>setOpen(false)} className={` text-white pl-9 md:flex transition-all ease-in duration-500 md:items-center md:pb-0 pb-12 md:w-auto md:pl-0 md:z-auto z-[-1] left-0 w-full  absolute md:static ${open?'top-5 text-white opacity-100 bg-black h-screen  flex flex-col justify-start mt-10 items-start':' top-[-490px] opacity-0 '} md:opacity-100 `}>
            <li className=' mt-6 flex items-center gap-2' >
           
           </li>  
          {Links.map((link) => (
              <li key={link.name} className=' md:ml-8 text-lg md:my-0 my-6'>
                <Link to={link.link} className={` hover:text-pink-500 duration-500 ${pathMatchRoute(link.link) && ' text-pink-500 border-b-2 border-b-pink-500'}`}>{link.name}</Link>     
              </li>
  
            ))}
         
        

                  <li className=' md:hidden'>
                      <button className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2 rounded-sm'><Link to={'/register'}>Register</Link></button>
        </li>
        </ul>
        <div className=' gap-6 flex items-center justify-center'>
          <div className=' relative hidden md:flex text-3xl'>
             <button className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2 text-sm rounded-sm'><Link to={'/register'}>Register</Link></button>
          </div>
        </div>
               </div>
    </nav>
  )
}

export default Nav
