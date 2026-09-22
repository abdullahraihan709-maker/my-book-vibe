import Image from "next/image";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
    return (
        <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center bg-slate-100/80 rounded-3xl p-8 sm:p-12 md:p-16 border border-slate-200/60 shadow-sm">
                
                {/* Text Content(Left side) Start */}
                <div className="space-y-6 text-center lg:text-left">
                    
                    <div className="inline-block px-3 py-1 bg-[#23BE0A]/10 text-[#23BE0A] text-sm font-semibold rounded-full">
                        Featured Reading
                    </div>
                    
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.15] tracking-tight">
                        Books to freshen up <br className="hidden sm:inline" />
                        your bookshelf
                    </h1>
                    
                    <p className="text-slate-600 text-base md:text-lg max-w-md mx-auto lg:mx-0">
                        Explore curated collections, discover new favorites, and track your reading goals effortlessly.
                    </p>

                    <div className="pt-2">
                        <button className="btn bg-[#23BE0A] hover:bg-[#1fa308] text-white border-none rounded-xl px-8 text-base md:text-lg font-semibold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                            View The List
                        </button>
                    </div>

                </div>
                {/* Text Content(Left side) End */}


                {/* Banner Image Start */}
                <div className="flex justify-center items-center">
                    <div className="relative group max-w-xs sm:max-w-sm md:max-w-md">
                        <Image
                            src={bannerImg}
                            alt="Featured Book Cover"
                            priority
                            className="rounded-2xl drop-shadow-2xl group-hover:scale-105 transition-transform duration-300 ease-out object-cover"
                        />
                    </div>
                </div>
                {/* Banner Image End */}


            </div>
            
        </section>
    );
};

export default Banner;