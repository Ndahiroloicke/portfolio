import Image from 'next/image'
import React from 'react'
import east from '../assets/east.png';
import west from '../assets/west1.png'
import lanez from "../assets/lanez.jpg"

const Testimony = () => {
  return (
    <div className='h-fit py-20 align-middle w-full text-white bg-black'>
        <div className='w-fit align-middle mx-auto'>
            <div className='mb-20 flex flex-col items-center'>
                <h1 className='font-semibold italic'>Testimonials</h1>
                <p className='font-bold text-4xl'>WHAT THEY SAY</p>
            </div>
            <div className='flex flex-row items-end'> 
                <div>
                <Image src={lanez} alt='lanez' className='w-80 h-96 rounded-t-full'/>
                </div>
                <div className='w-96 py-4 pl-10'>
                    <p className='font-semibold text-xl italic'>“ File storage made easy – including powerful features you won’t find anywhere else. Whether you’re.”</p>
                    <div className='mt-20'>
                        <p className='font-bold'>-Larry Diamond</p>
                        <p className='font-extralight text-sm'>Chief Executive Officer, Besnik</p>
                    </div>
                    <div className='space-x-2 mt-14'>
                    <i className='bx bx-left-arrow-alt bg-white text-black text-4xl rounded-full'></i>
                    <i className='bx bx-right-arrow-alt bg-white text-black text-4xl rounded-full'></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimony