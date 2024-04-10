
const Preloader = () => {
    return (
        <div>
            <div className=" min-h-screen fixed top-0 left-0 bg-black z-[100] w-full flex flex-col gap-5 justify-center items-center">
                
                <div className="relative flex justify-center items-center">
                    <div className="absolute animate-spin rounded-full h-40 w-40 border-t-8 border-b-8 border-[#7F04E3]"></div>
                    <h1 className="text-4xl font-medium text-center text-white ">
                        C
                        <span className="text-transparent  d-block bg-headerTextgradient bg-clip-text text-2xl">
                            U
                        </span>
                        P
                        <span className="text-transparent  d-block bg-headerTextgradient bg-clip-text text-2xl">
                            I
                        </span>
                        D
                        <span className="text-transparent  d-block bg-headerTextgradient bg-clip-text text-2xl">
                            A
                        </span>
                        I
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Preloader;