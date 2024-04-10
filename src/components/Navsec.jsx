
import React from "react";
import { Logo } from './common/Icons';
import { Button, navLink } from "./common/Helper";
import { useOverflowHidden } from "./common/Hooks";
import { Twirl as Hamburger } from "hamburger-react";

const Navsec = () => {
    const [isOpen, setOpen] = useOverflowHidden(false);
    return (
        <>
            <nav className=" max-w-[1296px]  mx-auto px-3 bg-black-mid border border-grayoff rounded-[60px]">
                <div className=" flex items-center justify-between py-3">
                    <ul>
                        <li>
                            <a className="flex items-center gap-2 text-3xl font-bold leading-9 text-white" href="/"><span><Logo /></span>CupidAI</a>
                        </li>
                    </ul>
                    <ul
                        className={` ${isOpen ? "right-0" : "-right-full"
                            } flex max-lg:fixed z-10 max-lg:top-0 max-lg:bg-black md:bg-full max-lg:justify-center bg-cover max-lg:h-full max-lg:w-full max-lg:z-30 max-lg:duration-300 max-lg:flex-col items-center gap-7`}
                    >
                        {navLink.map((data, index) => (
                            <li key={index}>
                                <a
                                    onClick={() => setOpen(false)}
                                    href={data.to}
                                    className=" navlink duration-300 text-white font-normal text-xl leading-6"
                                >
                                    {data.linkname}
                                </a>
                            </li>
                        ))}
                        <li className=" lg:hidden">
                            <button className="font-normal border-0 text-xl leading-6 cursor-pointer duration-300 text-white hover:text-purple">
                                Log in
                            </button>
                        </li>
                        <li className=" lg:hidden">
                            <Button text='Sign Up' />
                        </li>
                    </ul>
                    <ul className=" hidden items-center gap-5 lg:flex ">
                        <button className="font-normal border-0 text-xl relative z-[1] cursor-pointer leading-6 duration-300 text-white hover:text-purple">
                            Log in
                        </button>
                        <Button text='Sign Up' />
                    </ul>
                    <div className="relative z-40 mx-2 sm:mx-3 lg:hidden">
                        <Hamburger
                            toggled={isOpen}
                            toggle={setOpen}
                            size={26}
                            rounded
                            distance="sm"
                            direction="right"
                            duration={0.5}
                            color="white"
                        />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navsec;