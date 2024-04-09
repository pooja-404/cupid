import React, { useState } from 'react'
import Button from './Button'
import { Logo } from './common/Icons';

function Navsec() {
    const [show, setshow] = useState(false);
    function view() {
        setshow(!show);
        document.body.classList.toggle("max-lg:!overflow-hidden");
    }
    function hide() {
        setshow(false);
        document.body.classList.toggle("max-lg:!overflow-hidden");
    }
    return (
        <nav className=" max-w-[1296px]  mx-auto px-3 bg-[#01020F] border border-[#3e3d3d] rounded-[60px]">
            <div className='flex items-center py-2 z-10 relative  justify-between'>
                <>
                    <a href="#logo" className='cursour !cursor-pointer'><Logo /></a>
                    <ul
                        className={` gap-5 flex mobileView ${show ? "right-0" : "right-[-100%]"}`}
                    >
                        <li>
                            <a
                                href="#home" onClick={hide}
                                className=" text-white  text-xl font-normal leading-6 hover:font-semibold duration-300  webkitstroke cursor-pointer transition-all "
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#Why us"
                                onClick={hide}
                                className=" text-white  text-xl font-normal leading-6 hover:font-semibold duration-300  webkitstroke cursor-pointer transition-all "
                            >
                                Why us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#Services"
                                onClick={hide}
                                className=" text-white  text-xl font-normal leading-6 hover:font-semibold duration-300  webkitstroke !cursor-pointer transition-all "
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#FAQ"
                                onClick={hide}
                                className=" text-white  text-xl font-normal leading-6 hover:font-semibold duration-300  webkitstroke cursor-pointer transition-all "
                            >
                                FAQ
                            </a>
                        </li>
                        <li className='lg:hidden block'>
                            <a href="#log"
                                onClick={hide}
                                className=" text-white text-center  text-xl font-normal leading-6 hover:font-semibold duration-300 transition-all  webkitstroke cursor-pointer "
                            >
                                Log in
                            </a>

                        </li>
                        <li className='lg:hidden block'>
                            <Button text='Sign Up' />
                        </li>
                    </ul>
                    <div className=' lg:block hidden'>
                        <li className='lg:flex lg:gap-4 items-center'>
                            <a
                                href="#nexchat"
                                onClick={hide}
                                className=" text-white  text-xl font-normal leading-6 hover:font-semibold  webkitstroke cursor-pointer"
                            >
                                Log in
                            </a>
                            <Button text='Sign Up' />
                        </li>

                    </div>
                </>
                <label
                    className="cursor-pointer lg:hidden w-[32px] sm:h-[26px] h-[22px] relative z-50 flex justify-between flex-col"
                    onClick={view}
                >
                    <span
                        className={`${show
                            ? "rotate-[50deg] translate-y-[16px] sm:translate-y-[20px]"
                            : " "
                            } bg-[#fff] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
                    ></span>
                    <span
                        className={`${show ? "hidden" : ""
                            } bg-[#fff] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
                    ></span>
                    <span
                        className={`${show ? "rotate-[-50deg] translate-y-[-50%]" : ""
                            } bg-[#fff] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
                    ></span>
                </label>
            </div>
        </nav>
    )
}

export default Navsec