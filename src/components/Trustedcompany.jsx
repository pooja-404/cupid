
import { companiesData } from "./common/TrustedContant";

const TrustedCompany = () => {
    return (
        <div
            id="Whyus"
            className="md:pb-6 -mt-24 overflow-hidden sm:pb-10 sm:-mt-40 md:-mt-64 bg-bodymain "
        >
            <div
                id="howtouse"
                className="max-w-[1320px] container-fuild   xl:-mt-9 md:mt-24 mt-7 pb-10 md:mb-8"
            >
                <p className="  font-normal sm:text-xl text-lg   mt-9 leading-[30px] text-center text-gray-white-200">
                    Trusted by 4,000+ companies
                </p>
                <div className="flex items-center justify-center px-3 mt-8 gap-7 xl:gap-12 max-slg:animate-moveX max-sm:animate-moveSmX">
                    {companiesData.map((obj, i) => (
                        <a key={i} href={`${obj.companyLink}`} target="_blank" rel="noopener noreferrer" className={`group ${obj.ClassName}`}><span className={` opacity-40 duration-300 group-hover:opacity-100`}>{obj.companyLogo}</span></a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustedCompany;
