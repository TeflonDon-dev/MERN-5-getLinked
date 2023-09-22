import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav';
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Nav />
       <Toaster
  position="top-center"
  reverseOrder={true}
      />
      <main className=' pt-14 min-h-[calc(100vh)] bg-[#150E28]'>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default App