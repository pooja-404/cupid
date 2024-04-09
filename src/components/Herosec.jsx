
import Button from './Button'
import dashboard from '../assets/images/dashboardimage.webp'
import { Bghero } from './common/Icons';
import Navsec from './Navsec';

function Herosec() {

    return (
        <>
            <div className=' pt-10  lg:min-h-screen min-h-[667px]  overflow-hidden   relative'>
                <span className="absolute bottom-0 z-0 top-0 left-0  w-full h-full">
                    <Bghero />
                </span>
                <Navsec />
                <div className='pt-14 lg:z-10 relative'>
                    <div className='max-w-[1140px] px-3 mx-auto '>
                        <h2 className='  font-bold text-center text-white lg:text-[60px] sm:text-5xl text-2xl lg:leading-[65px]'>Unleash <span className=' text-transparent bg-text-gradient bg-clip-text'>Creativity,</span>
                            <span className='lg:block'>Effortlessly</span>                      </h2>
                        <p className=' font-normal text-sm sm:text-base text-white pt-3 lg:pb-6 pb-4  text-center'>Elevate your agency's output with state-of-the-art AI, engineered <span className='lg:block'>to innovate at the speed of thought.</span></p>
                        <div className='flex justify-center'>
                            <Button text='Try Now' />
                        </div>
                    </div>

                </div>
            </div>
            <img src={dashboard} alt="poker" className=' lg:max-w-[915px] lg:pl-5 pl-7 w-full mx-auto relative  lg:z-20 z-[5] -translate-y-28  sm:-translate-y-32  lg:-translate-y-64' />
        </>
    )

}
export default Herosec