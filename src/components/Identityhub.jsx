import { CircleEllipseSvg, GradientLineSvg } from "./common/Icons"
const IdentityHub = () => {
    return (
        <div className="relative mt-16 sm:py-24 md:py-32 lg:py-40 overflow-x-clip md:mt-24 lg:mt-48">
            <div className="flex flex-col w-full justify-center items-center max-w-[691px] px-3 pt-1 mx-auto relative z-10">
                <h2 className="font-semibold leading-10 text-center text-white sm:leading-12 text-3xl2 sm:text-6xl lg:text-7xl md:leading-13">Be part of the future of <br /> IdentityHub</h2>
                <span className="-mt-1"><GradientLineSvg /></span>
                <p className="mt-3 font-normal text-center md:leading-8 sm:text-xl text-lg text-gray-white-100 md:mt-4">Unleash the power of AI within cupid. Upgrade your productivity with cupid, the open AI chat app.</p>
                <a href="tel:6295550129" className=" text-white py-3 px-5 bg-gradientTrailBtn duration-300 hover:shadow-gradientRed from-15% rounded-xl mt-4 sm:mt-6 md:mt-8 leading-4">Start free trail</a>
            </div>
            <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[2]"><CircleEllipseSvg /></span>
        </div>
    )
}

export default IdentityHub