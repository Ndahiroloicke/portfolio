import Image from 'next/image';
import React from 'react';
import imagepath from '@/assets/porfolio-removebg-preview.png'

const Home = () => {
    return (
        <div className='flex-1 ml-36 justify-center w-fit' style={{fontFamily:"'IBM Plex Sans', sans-serif"}}>
            <div className='flex flex-row'>
                <div>
                    <div>
                        <div className='text-7xl w-[420px]'>
                            MY NAME IS <span className='font-bold'>LOIC NDAHIRO..</span>
                        </div>
                        <div className='text-xl mt-6'><span className='font-bold italic'>Full-Stack Engineer</span> Based in Rwanda</div>
                        <div className='mt-12 mb-16'>
                            <button className='bg-[#141313] text-white py-4 px-10 flex items-center'>Let's talk with me </button>
                        </div>
                    </div>
                    <div className='flex flex-row space-x-6'>
                        <div className='flex flex-row space-x-7 items-center'>
                            <i className='bx bxs-phone text-xl bg-slate-200 rounded-full py-1 px-1'></i>
                            <p>+250 722 297 431</p>
                        </div>
                        <div className='flex flex-row space-x-7 items-center'>
                            <i className='bx bxs-envelope text-xl bg-slate-200 rounded-full py-1 px-1'></i>
                            <p>ndahiroloicke@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='mt-8'>
                    <Image 
                        src={imagepath} 
                        alt="Portfolio" 
                        className='size-96' 
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;