import { useEffect, useState } from "react";
import { BackToTopIcon } from "./common/Icons";
const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);
    return (
        isVisible &&
        <div onClick={scrollToTop} className='fixed z-30 bottom-5 2xl:bottom-10 right-3 sm:right-5'>
                <button className="rounded-full duration-300 hover:shadow-[0_0_20px_1px_#fff] group z-50 w-10 sm:w-12 h-10 sm:h-12 bg-bg-gradient  flex items-center justify-center shadow-[0_0_20px_1px_#8F61E7]">
                <BackToTopIcon />
            </button>
        </div>
    )
};

export default BackToTop;