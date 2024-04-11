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
            <div className='max-w-[700px] mx-auto pt-16 sm:pt-32 md:pt-52 lg:pt-64'>
                <h2 className='lg:text-4xl sm:text-3xl2 text-3xl1 font-bold tracking-tighter text-white leading-11'>FAQs</h2>
                <p className='pb-2 mt-5 text-lg leading-6 text-gray font-inter sm:text-xl text-lg md:leading-7 tracking-tightest md:mt-6'>Answers to the most frequently asked questions.</p>
                {accordionData.map((item, index) => (
                    <Accordion key={index} onClick={() => toggleAccordion(index)} className={`cursor-pointer border-b border-white border-opacity-10 mt-5 sm:mt-6 md:mt-8 ${item.id === 6 ? "border-0" : ""}`} open={open === index} icon={<Arrow id={index} open={open} />}>
                        <AccordionHeader className={`font-semibold text-white text-2sm md:text-base text-start w-full justify-between gap-3 border-0  mb-0.5 pt-0 duration-500 leading-6 pb-5 sm:pb-6 md:pb-8 focus-visible:outline-none ${open === index ? "" : ""}`}>{item.title}
                        </AccordionHeader>
                        <AccordionBody className="py-2 !pt-0  pr-6 text-sm font-normal text-white opacity-70 md:text-sm sm:py-3"> {item.description}
                        </AccordionBody>
                    </Accordion>
                ))
                }
            </div>
        </div>
    )
}

export default Faq