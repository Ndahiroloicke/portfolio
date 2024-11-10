"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  // this is a comment
  const [activeItem, setActiveItem] = useState(''); // Store the clicked item's name

  return (
    <>
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <div
        className="bg-[#141313] pr-8 pl-5 md:h-screen flex flex-col py-4 sm:py-10 justify-between text-sm overflow-y-hidden text-white sm:w-fit"
        style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
      >
        <div className="space-y-20">
          <header
            className="sm:text-[30px] text-xs font-semibold  md:block"
            style={{ fontFamily: "'IBM Plex Serif', serif" }}
          >
            Loic
          </header>
          <nav className="space-y-6 hover:cursor-pointer">
            <li
              onClick={() => setActiveItem('HOME')}
              className={`list-none transition-all duration-300 ease-in-out hidden md:block ${
                activeItem === 'HOME' ? 'font-bold text-2xl' : 'text-base'
              }`}
            >
              HOME
            </li>
            <li
              onClick={() => setActiveItem('ABOUT')}
              className={`list-none transition-all duration-300 ease-in-out hidden md:block ${
                activeItem === 'ABOUT' ? 'font-bold text-2xl' : 'text-base'
              }`}
            >
              ABOUT
            </li>
            <li
              onClick={() => setActiveItem('SERVICES')}
              className={`list-none transition-all duration-300 ease-in-out hidden md:block ${
                activeItem === 'SERVICES' ? 'font-bold text-2xl' : 'text-base'
              }`}
            >
              SERVICES
            </li>
            <li
              onClick={() => setActiveItem('PROJECTS')}
              className={`list-none transition-all duration-300 ease-in-out hidden md:block ${
                activeItem === 'PROJECTS' ? 'font-bold text-2xl' : 'text-base'
              }`}
            >
              PROJECTS
            </li>
            <li
              onClick={() => setActiveItem('CONTACT')}
              className={`list-none transition-all duration-300 ease-in-out hidden md:block ${
                activeItem === 'CONTACT' ? 'font-bold text-2xl' : 'text-base'
              }`}
            >
              CONTACT
            </li>
 
            <li
              onClick={() => setActiveItem('HOME')}
              className={`list-none transition-all duration-300 ease-in-out md:hidden ${
                activeItem === 'HOME' ? 'text-2xl' : 'text-base'
              }`}
            >
              <i className="bx bx-home text-2xl"></i>
            </li>
            <li
              onClick={() => setActiveItem('ABOUT')}
              className={`list-none transition-all duration-300 ease-in-out md:hidden ${
                activeItem === 'ABOUT' ? 'text-2xl' : 'text-base'
              }`}
            >
              <i className="bx bx-user text-2xl"></i>
            </li>
            <li
              onClick={() => setActiveItem('SERVICES')}
              className={`list-none transition-all duration-300 ease-in-out md:hidden ${
                activeItem === 'SERVICES' ? 'text-2xl' : 'text-base'
              }`}
            >
              <i className="bx bx-briefcase text-2xl"></i>
            </li>
            <li
              onClick={() => setActiveItem('PROJECTS')}
              className={`list-none transition-all duration-300 ease-in-out md:hidden ${
                activeItem === 'PROJECTS' ? 'text-2xl' : 'text-base'
              }`}
            >
              <i className="bx bx-folder text-2xl"></i>
            </li>
            <li
              onClick={() => setActiveItem('CONTACT')}
              className={`list-none transition-all duration-300 ease-in-out md:hidden ${
                activeItem === 'CONTACT' ? 'text-2xl' : 'text-base'
              }`}
            >
              <i className="bx bx-envelope text-2xl"></i>
            </li>
          </nav>
        </div>
        <div className="flex flex-col space-y-4 mt-32">
          <i className="bx bxl-instagram-alt w-fit text-2xl py-1 px-1 rounded-3xl text-black bg-white"></i>
          <i className="bx bxl-linkedin w-fit text-2xl py-1 px-1 text-black rounded-3xl bg-white"></i>
          <i className="bx bxl-github w-fit text-2xl py-1 px-1 text-black rounded-3xl bg-white"></i>
          <p className="font-extralight mt-4 w-56 hidden md:block">
            Copyright © 2024 Loic Sayed. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
