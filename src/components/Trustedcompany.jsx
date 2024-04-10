
import { companiesData } from "./common/TrustedContant";

const TrustedCompany = () => {
    return (
        <div
            id="features"
            className="pb-6 -mt-24 overflow-hidden sm:pb-10 sm:-mt-40 md:-mt-64 bg-bodymain "
        >
            <div
                id="howtouse"
                className="max-w-[1112px] mx-auto px-3 pt-7  xl:-mt-9 md:mt-24 mt-7 pb-10 mb-8"
            >
                <p className="  font-normal lg:text-xl sm:text-lg text-base leading-[30px] text-center text-gray-white-200">
                    Trusted by 4,000+ companies
                </p>
                <div className="flex items-center justify-center px-3 mt-8 gap-7 xl:gap-12 max-slg:animate-moveX max-sm:animate-moveSmX">
                    {companiesData.map((obj, i) => (
                        <a
                            key={i}
                            className={`min-w-40 lg:min-w-44 ${obj.none} `}
                            href={obj.link}
                        >
                            <img
                                src={obj.companyLogo}
                                alt={obj.alt}
                                className={` w-full   object-contain  lg:min-h-12`}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustedCompany;
