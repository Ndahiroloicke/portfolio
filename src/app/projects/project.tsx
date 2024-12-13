import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  projlink: string
}

const Project: React.FC<ProjectProps> = ({ title, description, imageSrc, projlink }) => {
  return (
    <div className="flex flex-row">
      <div className="h-full w-44 items-center">
        <p className="text-xs italic">{description}</p>
        <h1 className="text-3xl font-bold">{title}</h1>
        <Link href={projlink}><i className="bx bxs-right-top-arrow-circle text-6xl"></i></Link>
      </div>
      <div>
        <Image src={imageSrc} alt={`${title} Picture`}  className='h-[109px] w-[253px]'/>
      </div>
    </div>
  )
}

export default Project