"use client"
import React, { FC, useState } from 'react'
interface ServeProps {
    name: string,
    description: string
}
const Serve:FC<ServeProps> = ({name,description}) => {
    const [moredesc, setmoredesc] = useState(false)
  return (
    <div>
                <div className='flex flex-row justify-between gap-x-32 mb-[24px] items-center'>
                <div className='flex gap-x-6 flex-row items-center'>
                <div className='rounded-full w-3 h-3 bg-black'></div>
                <h1 className='font-bold text-[32px]' onClick={()=> setmoredesc(true)}>{name}</h1>
                </div>

                <div className='flex gap-x-10 flex-row items-center'>
                <p className='w-[542px]'>{description}</p>
                <i className='bx text-5xl bx-plus'></i>
                </div>
                </div>
                <div className='w-auto h-[2px] bg-gray-400'></div>
            </div>
  )
}

export default Serve