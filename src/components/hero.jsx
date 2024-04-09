import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import Button from './Button'
import dashboard from '../assets/images/dashboardimage.webp'



function Hero() {
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
        <div className='lg:px-12 md:px-5 px-2  pt-10 relative z-[1] min-h-screen'>
            <nav className=" max-w-[1296px]  mx-auto px-3 bg-[#01020F] bg-gradient-to-l  border-[2px] border-solid !border-[#3e3d3d] rounded-[60px]">
                <div className='flex items-center py-3  justify-between'>
                    <>
                        <img src={logo} alt="logo" />
                        <ul
                            className={` gap-5 flex mobileView ${show ? "right-0" : "right-[-100%]"}`}
                        >
                            <li>
                                <a
                                    href="#home" onClick={hide}
                                    className=" text-white  text-xl font-normal leading-6 hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#02CDCF] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#Marketplace"
                                    onClick={hide}
                                    className=" text-white  text-xl font-normal leading-6 hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#02CDCF] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                                >
                                    Why us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    onClick={hide}
                                    className=" text-white  text-xl font-normal leading-6 hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#02CDCF] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#nexchat"
                                    onClick={hide}
                                    className=" text-white  text-xl font-normal leading-6 hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#02CDCF] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                                >
                                    FAQ
                                </a>
                            </li>

                                <li className='lg:hidden block'>
                                    <a
                                        href="#nexchat"
                                        onClick={hide}
                                        className=" text-white text-center  text-xl font-normal leading-6 hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#02CDCF] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                                    >
                                        Log in
                                    </a>
                                  
                            </li>
                            <li className='lg:hidden block'>
                                <Button text='Sign Up' />
                            </li>
                        </ul>
                        <div className=' lg:block hidden'>
                            <li className='lg:flex lg:gap-3 items-center'>
                                <a
                                    href="#nexchat"
                                    onClick={hide}
                                    className=" text-white  text-xl font-normal leading-6 hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#02CDCF] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
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
            <div className='flex-grow pt-16 flex justify-center flex-col' data-aos="fade-down" data-aos-delay="3000" id='home'>
                <div className='max-w-[1140px] px-3 mx-auto '>
                    <h2 className='  font-bold text-center text-white lg:text-[60px] sm:text-6xl text-4xl lg:leading-[65px]'>Unleash <span className=' text-transparent bg-text-gradient bg-clip-text'>Creativity,</span>
                        <span className='lg:block'>Effortlessly</span>                      </h2>
                    <p className=' font-normal text-sm sm:text-base text-white pt-3 lg:pb-6  text-center'>Elevate your agency's output with state-of-the-art AI, engineered <span className='lg:block'>to innovate at the speed of thought.</span></p>
                    <div className='flex justify-center'>
                        <Button text='Sign Up' />
                    </div>

                    <img src={dashboard} alt="poker" className='  w-[915px] translate-y-7' />
                </div>

            </div>


        </div>
    )
}
export default Hero