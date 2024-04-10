
import { useState } from 'react'
import { WhiteArrow } from './common/Icons'
import { PricedataMonth, PricedataYear } from './common/PricingData'

const Pricing = () => {
    const [toggle, setToggle] = useState(1)
    return (
        <div className='relative mt-5 lg:mt-20 sm:mt-20 overflow-x-clip'>
            <div id='pricing' className="xl:max-w-[1219px] lg:pt-24 md:pt-14 container">
                <h2 className='font-bold tracking-tighter text-center text-white lg:text-4xl sm:text-3xl2 text-3xl1 leading-16'>Pricing</h2>
                <p className='pt-4 font-medium text-center text-dark-gray text-xxl sm:pt-5'>Tweak anything and everything to ensure fits <span className='sm:block'>your business, not the other way around.</span></p>
                <div className='bg-gray-white-500 rounded-2md p-1 max-w-[192px] mx-auto w-full flex justify-between md:mt-[44.5px] mt-6'>
                    <button onClick={() => setToggle(1)} className={`py-[6px] px-[18px] rounded-3md text-base  transition-all duration-300 ease-linear font-medium text-white ${toggle === 1 ? "bg-gray-white-500" : ""}`}>Yearly</button>
                    <button onClick={() => setToggle(2)} className={`py-[6px] px-[18px] rounded-3md text-base font-medium text-white transition-all duration-300 ease-linear ${toggle === 2 ? "bg-gray-white-500" : ""}`}>Monthly</button>
                </div>
                <div className='flex items-center flex-wrap justify-center w-full md:mt-16 sm:mt-10 mt-6 min-h-[780px]'>
                    {toggle === 2 && <>
                        {
                            PricedataMonth.map((item, index) => (
                                <div key={index} className='flex items-center justify-center w-full mt-8 lg:w-4/12 md:w-6/12 lg:mt-0 md:mt-10'>
                                    <div className='max-w-[410px] relative z-10 transition-all duration-300 ease-linear cursor-pointer blur_box_border hover:scale-[1.03] hover:z-20 group lg:h-[725px] sm:h-[667px] lg:hover:h-[774px] sm:hover:h-[667px] h-full'>
                                        <div className='sm:p-8 p-5 bg- rounded-3xl flex justify-between flex-col lg:h-[725px] sm:h-[667px] lg:hover:h-[774px] sm:hover:h-[667px] h-full transition-all duration-300 ease-linear'>
                                            <div className='transition-all duration-300 ease-linear '>
                                                <h3 className='inline-block text-lg font-medium text-white transition-all duration-500 ease-linear group-hover:text-3xl1 leading-18 group-hover:bg-clip-text group-hover:bg-textgradient group-hover:text-transparent'>{item.heading}</h3>
                                                <p className='my-6 text-base font-medium leading-15 text-dark-gray'>{item.para}</p>
                                                <div className='flex items-center gap-2'>
                                                    <h3 className='font-semibold text-white sm:text-4xl2 text-3xl2 lg:text-5xl leading-14'>{item.price}</h3>
                                                    <div className='flex flex-col h-full'>
                                                        <p className='font-medium text-2sm text-dark-gray leading-17'>/ month</p>
                                                        <p className='font-medium text-2sm text-dark-gray leading-17'>{item.user}</p>
                                                    </div>
                                                    {item.disbtn}
                                                </div>
                                                {item.billed}
                                                <p className='mb-4 font-medium text-2sm text-dark-gray leading-17'>What’s included</p>
                                                {item.includedata}
                                            </div>
                                            <button className='py-2.5 px-3 border border-solid border-gray-black-200 after:bg-btngradient group-hover:border-none transition-all  bg-transparent duration-300 ease-linear text-white text-base font-medium text-nowrap rounded-xl w-full after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:transition-all after:duration-300 after:ease-linear after:rounded-xl after:opacity-0 group-hover:after:opacity-100 relative'><p className='text-white text-base font-medium text-nowrap relative z-10'>Select Plan</p></button>
                                        </div>
                                    </div>
                                </div >
                            ))
                        }
                    </>}
                    {toggle === 1 && <>
                        {
                            PricedataYear.map((item, index) => (
                                <div key={index} className='flex items-center justify-center w-full mt-8 lg:w-4/12 md:w-6/12 sm:w-10/12 lg:mt-0 md:mt-10'>
                                    <div className='max-w-[404px] relative z-10 transition-all duration-300 ease-linear cursor-pointer blur_box_border hover:scale-[1.03] hover:z-20 group lg:h-[725px] sm:h-[667px] lg:hover:h-[774px] sm:hover:h-[667px] h-full'>
                                        <div className='sm:p-8 p-5 rounded-3xl flex justify-between flex-col lg:h-[725px] h-[667px] lg:hover:h-[774px]   transition-all duration-300 ease-linear'>
                                            <div>
                                                <h3 className='inline-block text-lg font-medium text-white transition-all duration-500 ease-linear group-hover:text-3xl1 leading-18 group-hover:bg-clip-text group-hover:bg-textgradient group-hover:text-transparent'>{item.heading}</h3>
                                                <p className='my-6 text-base font-medium leading-15 text-dark-gray'>{item.para}</p>
                                                <div className='flex items-center gap-2'>
                                                    <h3 className='font-semibold text-white sm:text-4xl2 text-3xl2 lg:text-5xl leading-14'>{item.price}</h3>
                                                    <div className='flex flex-col h-full'>
                                                        <p className='font-medium text-2sm text-dark-gray leading-17'>/ month</p>
                                                        <p className='font-medium text-2sm text-dark-gray leading-17'>{item.user}</p>
                                                    </div>
                                                    {item.disbtn}
                                                </div>
                                                {item.billed}
                                                <p className='mb-4 font-medium text-2sm text-dark-gray leading-17'>What’s included</p>
                                                {item.includedata}
                                            </div>
                                            <button className='py-2.5 px-3 border border-solid border-gray-black-200 after:bg-btngradient group-hover:border-none transition-all  bg-transparent duration-300 ease-linear text-white text-base font-medium text-nowrap rounded-xl w-full after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:transition-all after:duration-300 after:ease-linear after:rounded-xl after:opacity-0 group-hover:after:opacity-100 relative'><p className='text-white text-base font-medium text-nowrap relative z-10'>Select Plan</p></button>
                                        </div>
                                    </div>
                                </div >
                            ))
                        }
                    </>}
                </div>
                <div className='flex items-center justify-center'>
                    <a href='home' className='bg-gray-white-500 inline-flex items-center justify-center sm:flex-row flex-col text-white sm:px-4 px-8 py-1.5 sm:rounded-2md rounded-3xl sm:gap-2 gap-1 mt-12 group'><p className='font-medium text-2sm leading-17 opacity-60 tracking-tightest'>Want enterprise features?</p><p className='flex items-center gap-1 font-bold text-2sm tracking-tightest leading-17'>Tell us more <WhiteArrow /></p></a>
                </div>
            </div>
            <div className='bg-[#2980D6] lg:w-[778px] h-[778px] w-[400px] blur-[1000px] absolute top-[25%] left-[-50%] lg:z-20 z-[9]'></div>
        </div>
    )
}

export default Pricing