
import { serviceCardItems } from './common/Helper'
import Ourservice from './Ourservices'

const ServiceCard = () => {
    return (
        <div id='service' className='py-10 lg:pt-24 lg:pb-20 md:py-16 bg-bg_gradient'>
            <div className='max-w-[966px] px-3 mx-auto '>
                <h2 className='font-bold text-center text-white lg:text-4xl sm:text-3xl2 text-3xl1 font-inter md:leading-12'>Our Services</h2>
                <p className=' font-medium text-gray text-xl sm:text-xxl text-center mx-auto leading-7 lg:max-w-[500px] md:pt-3 pt-2 lg:pt-5'>Tweak anything and everything to ensure fits your business, not the other way around.</p>
                <div className='flex flex-row flex-wrap justify-center lg:gap-4  mt-1 -mx-3 sm:pt-5 lg:pt-12'>
                    {serviceCardItems.map((p) => <Ourservice key={p.id} svg={p.svges} head={p.heading} para={p.paragraph} width={p.width} />)}
                </div>
            </div>
        </div>
    )
}

export default ServiceCard