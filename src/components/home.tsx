import Image from 'next/image';
import React from 'react';
import imagepath from '@/assets/porfolio-removebg-preview.png';

const Home = () => {
    return (
        <div className='flex flex-1 justify-center items-center min-h-screen px-4' style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div>
                    <div>
                        <div className='text-4xl md:text-7xl w-full md:w-[420px] text-center md:text-left'>
                            MY NAME IS <span className='font-bold'>LOIC NDAHIRO..</span>
                        </div>
                        <div className='text-lg md:text-xl mt-4 md:mt-6 text-center md:text-left'>
                            <span className='font-bold italic'>Full-Stack Engineer</span> Based in Rwanda
                        </div>
                        <div className='mt-8 md:mt-12 mb-12 md:mb-16 text-center md:text-left'>
                            <button className='bg-[#141313] sm:px-32 w-full text-white py-4 px-10 flex justify-center md:justify-start items-center'>
                                Let's talk with me
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center'>
                        <div className='flex flex-row space-x-3 items-center'>
                            <i className='bx bxs-phone text-xl bg-slate-200 rounded-full py-1 px-1'></i>
                            <p>+250 722 297 431</p>
                        </div>
                        <div className='flex flex-row space-x-3 items-center'>
                            <i className='bx bxs-envelope text-xl bg-slate-200 rounded-full py-1 px-1'></i>
                            <p>ndahiroloicke@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='mt-8 md:mt-0 md:ml-12'>
                    <Image 
                        src={imagepath} 
                        alt="Portfolio" 
                        className='w-48 h-48 md:w-auto md:h-auto'
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
