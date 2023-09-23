import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import Modal from './components/Modal';


const App = () => {

  const dispatch = useDispatch();

  const{isOpen}=useSelector(store=>store.modal)
  return (
    <>
      <Nav />
       <Toaster
  position="top-center"
  reverseOrder={true}
      />
        {isOpen && <Modal/>}
      <main className=' pt-14 min-h-[calc(100vh)] bg-[#150E28]'>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default App