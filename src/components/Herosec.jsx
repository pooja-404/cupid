import { Button } from './common/Helper';
import dashboard from '../assets/images/dashboardimage.webp'
import { Bghero } from './common/Icons';
import Navsec from './Navsec';

function Herosec() {

    return (
        <>
            <div className=' lg:mt-9 md:mt-5 mt-2  lg:min-h-screen xl:min-h-[810px]  min-h-[600px]  overflow-hidden  relative' id='Home'>
                <span className="absolute bottom-0 z-0 top-0 left-0  w-full h-full">
                    <Bghero />
                </span>
                <Navsec />
                <div className='mt-14 lg:z-10 relative'>
                    <div className='max-w-[1140px] px-3 mx-auto '>
                        <h2 className='  font-bold text-center text-white  text-3xl2 sm:text-6xl lg:text-7xl  lg:leading-19'>Unleash <span className=' text-transparent bg-text-gradient bg-clip-text'>Creativity,</span>
                            <span className='block '>Effortlessly</span></h2>
                        <p className=' font-normal text-xl text-white pt-3 lg:pb-6 pb-4 leading-6  text-center'>Elevate your agency's output with state-of-the-art AI, engineered <span className='lg:block'>to innovate at the speed of thought.</span></p>
                        <div className='flex justify-center'>
                            <Button text='Try Now' />
                        </div>
                    </div>

                </div>
            </div>
            <img src={dashboard} alt="poker" className=' lg:max-w-[915px] lg:pl-5 pl-7 w-full mx-auto relative  lg:z-20 z-[5] -translate-y-28  sm:-translate-y-44  lg:-translate-y-[24rem]' />
        </>
    )

}
export default Herosec