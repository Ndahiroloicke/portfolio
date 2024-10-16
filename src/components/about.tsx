import Image from 'next/image'
import React from 'react'
import profile from '../assets/porfolio-removebg-preview.png'
import download from '../assets/north_east.png'
const About = () => {
  return (
    <div>
        <div className='flex flex-row'>
            <div>
                <p>Nice to meet you!</p>
                <p>Welcome to...</p>
                <Image src={profile} alt='image'></Image>
                <p>Ndahiro loic</p>
                <p><span>Fullstack developer</span> based in <span>Rwanda</span></p>
                <div className='flex flex-row'>
                <p>DOWNLOAD CV</p>
                <Image src={download} alt='donwload'></Image>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-2 space-x-24'>
                    <div className='space-y-6'>
                        <div className='flex flex-row space-x-3'>
                        <i className='bx bxs-phone text-xl bg-slate-200 rounded-full py-1 px-1'></i>
                        <p>+250 722 297 431</p>
                        </div>
                        <div className='flex flex-row space-x-3'>
                        <i className='bx bxs-envelope text-xl bg-slate-200 rounded-full py-1 px-1'></i>
                        <p>ndahiroloicke@gmail.com</p>
                        </div>
                    </div>
                    <div className='space-y-6'>
                        <div className='flex flex-row space-x-3'>
                        <i className='bx bx-user-pin text-xl bg-slate-200 rounded-full py-1 px-1'></i>
                        <p>9+ years</p>
                        </div>
                        <div className='flex flex-row space-x-3'>
                            <i className='bx bxs-location-plus text-xl bg-slate-200 rounded-full py-1 px-1'></i>
                            <p>Kigali, Rwanda</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About