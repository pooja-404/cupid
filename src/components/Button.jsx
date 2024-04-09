import React from 'react'

function Button(props) {
    return (
        <>
            <button className={`${props.name} z-10 relative flex h-[50px] hover:text-[#02CDCF]  items-center justify-center overflow-hidden leading-6  transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-btngradient hover:border-[transparent] before:duration-500 before:ease-out  hover:border-0 hover:shadow-[0px_0px_12px_0px_#02CDCF] hover:before:h-56 hover:before:w-56  bg-btngradient text-white text-sm sm:text-xl  rounded-[50px] px-[32px] !py-[28px] font-medium`}>
                <span className='relative z-10 text-nowrap'>{props.text}</span>
            </button>
        </>
    )
}

export default Button