import React from 'react';
import Privacy from '../components/Privacy';
import Faqs from '../components/Faqs';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import Rules from '../components/Rules';
import JudgingCriteria from '../components/JudgingCriteria';
import Rewards from '../components/Rewards';
import TimeLine from '../components/TimeLine';

const Home = () => {
    return (
      <div className=' text-white '>
           <Hero/>
        <section className=' p-10 border-slate-600 md:px-32 border-b-[1px] bg-[#150E28] overflow-hidden'>
              <Introduction/>
            </section>
         <section className=' p-10 md:px-32 border-b-[1px] border-slate-600 bg-gradient-to-r from-indigo-900 via-purple-900 overflow-hidden'>
         <Rules/>
            </section>
            <section className=' p-10 md:py-16 md:px-32 border-b-[1px] border-slate-600 bg-gradient-to-r from-indigo-900 via-purple-900 overflow-hidden'>
            <JudgingCriteria/>
            </section>
            <section className=' scroll-mt-10' id='faqs'>
                <Faqs />
            </section>
             <div id='timeline' className=' scroll-mt-10' >
                <TimeLine/>
           </div>
            <div id='overview'  className='scroll-mt-10'>
            <Rewards/>
            </div>
            <section>
                <Privacy/>
            </section>
            </div>
  )
}

export default Home