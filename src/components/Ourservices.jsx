function Ourservice(props) {
    const { width } = props;
    return (
        <div id="Services" className={` pt-4 px-2 lg:pt-0 lg:px-0 ${width}`}>
            <div className=' px-7 md:h-[259px] md:py-10 py-5 h-full before:transition-all before:opacity-0 hover:before:opacity-100 before:ease-linear rounded-2xl shadow-[0px0px_0px_1px_#F4F4F51A] border-2 border-mid-gray bg-off-black  group before:absolute before:bg-bg-gradient before:left-0 hover:before:top-0 before:bottom-0 before:right-0 before:z-[-1] relative overflow-hidden z-10 before:duration-300 '>
                {props.svg}
                <p className='pt-3 text-lg font-semibold leading-4 md:pt-4 text-mid-white extratightest '>{props.head}</p>
                <p className='leading-6 text-sm  font-normal group-hover:!text-white z-10 text-off-white pt-2 md:pt-4 md:max-w-[425px]  midtighter'>{props.para}</p>
            </div>
        </div >
    )
}

export default Ourservice