import Image from "next/image"
import bannerImg from '@/assets/hero_img.jpg';

const Banner = () => {
    return (
        <section className=' py-20 '>
            <div className='container mx-auto grid grid-cols-2 gap-4 items-center bg-slate-100 rounded-2xl p-8 '>
                <div className='space-y-4'>
                    <h2 className='font-bold text-5xl' >Books to freshen up <br /> your bookshelf</h2>
                    <button className='btn btn-success bg-[#23BE0A] text-white ' >View the task</button>
                </div>

                <div>
                    <Image src={bannerImg} alt='Banner-book-Image' />
                </div>
            </div>
        </section>
    );
};

export default Banner;