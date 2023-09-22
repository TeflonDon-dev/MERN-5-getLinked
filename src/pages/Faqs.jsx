
import React from 'react';

import questions from "../assets/question.png"

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const Faqs = () => {

 const items = [{
    name: "Can I work on a project I started before the hackathon?",
    content:"loremedc edledodeid eenjcneucnu"
  },
    {
      name: "What happens if I need help during the hackathon?",
      content:"loremedc edledodeid eenjcneucnu"
    },
    {
      name: "What happens if I don't have an idea for a project?",
      content:"loremedc edledodeid eenjcneucnu"
   },
 
    {
      name: "Can I join a team or do I have to come with one?",
      content:"loremedc edledodeid eenjcneucnu"
   },
    {
      name: "What happens after the hackathon ends?",
      content:"loremedc edledodeid eenjcneucnu"
   },
    {
      name: "Can I work on a project I started before the hackathon?",
      content:"loremedc edledodeid eenjcneucnu"
   },
 ]


  return (
    <section className=' p-10 md:py-16 md:px-32 border-b-[1px] border-slate-600 bg-[#150E28] overflow-hidden'>
      <div className=' flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20'>
        <div className=' w-full '>
          <div className='text-center md:text-start'>
           <p className=' capitalize text-xl md:text-3xl font-bold text-white'>frequently asked</p>
          <p className=' text-[#FF26B9] text-xl md:text-3xl font-bold'>questions</p>
          <p className=' text-slate-100 text-xs mt-5'>We got answers to the questions that you might</p>
         <p  className=' text-slate-100 text-xs mb-5'>Want to ask about <span className='  text-bold text-white'>getLinked Hackathon 1.0</span></p>
          </div>

        {
          items.map((item, index) => (
            <div key={index}>
          <Accordion allowZeroExpanded className=' text-sm bg-black text-white'>
            <AccordionItem className=' border-b-2  border-pink-500  '>
                <AccordionItemHeading className=''> 
                    <AccordionItemButton >
                    {item.name}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {item.content}
                </AccordionItemPanel>
            </AccordionItem>
              </Accordion>
              </div>

          ))
            }
           
        </div>
        <div className=' md:w-full md:h-full '>
          <img className=' md:w-full md:object-cover w-96' src={questions} alt="" />
        </div>
      </div>
      </section>
   
  )
}

export default Faqs