import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import React, { useState } from 'react'
import { Arrow } from './common/Icons';
import { accordionData } from './common/Helper';

const Faq = () => {
    const [open, setOpen] = useState();
    const toggleAccordion = (index) => {
        setOpen(open === index ? true : index);
    };
    return (
        <div id='Faqs' className='container max-w-[1300px]'>
            <div className='max-w-[700px] mx-auto pt-10 sm:pt-32 md:pt-52 lg:pt-64'>
                <h2 className='lg:text-4xl sm:text-3xl2 text-3xl1 font-bold tracking-tighter text-white leading-11'>FAQs</h2>
                <p className='pb-2 mt-5 font-normal leading-6 text-gray font-inter sm:text-xl text-lg md:leading-7 tracking-tightest md:mt-6'>Answers to the most frequently asked questions.</p>
                {accordionData.map((item, index) => (
                    <Accordion key={index} className={`border-b border-white border-opacity-10 md:pt-8 pt-6 pb-2 md:pb-4 ${item.id === 6 ? "border-0" : ""}`} open={open === index} icon={<Arrow id={index} open={open} />}>
                        <AccordionHeader onClick={() => toggleAccordion(index)} className={`font-semibold cursor-pointer pt-0   text-white text-2sm md:text-base text-start w-full justify-between gap-3 border-0  duration-500 leading-6  focus-visible:outline-none ${open === index ? "" : ""}`}>{item.title}
                        </AccordionHeader>
                        <AccordionBody className=" pr-6 text-sm font-normal text-white opacity-70 md:text-sm pt-0 "> {item.description}
                        </AccordionBody>
                    </Accordion>
                ))
                }
            </div>
        </div>
    )
}

export default Faq