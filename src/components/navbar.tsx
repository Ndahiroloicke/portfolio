"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeItem, setActiveItem] = useState(pathname);
  // we are working on the design 

  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

  const handleNavigation = (path: string) => {
    setActiveItem(path);
    router.push(path);
  };

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
            <li className="list-none" onClick={() => handleNavigation('/')} onMouseEnter={() => setActiveItem('/')}>
              <Link href="/" className={`list-none transition-all duration-300 ease-in-out hidden md:block ${
                activeItem === '/' ? 'font-bold text-2xl' : 'text-base'
              }`}>
                HOME
              </Link>
            </li>
            <li className="list-none" onClick={() => handleNavigation('/about')} onMouseEnter={() => setActiveItem('/about')}>
              <Link href="/about" className={`list-none transition-all duration-300 ease-in-out hidden md:block ${
                activeItem === '/about' ? 'font-bold text-2xl' : 'text-base'
              }`}>
                ABOUT
              </Link>
            </li>
            <li className="list-none" onClick={() => handleNavigation('/services')} onMouseEnter={() => setActiveItem('/services')}>
              <Link href="/services" className={`list-none transition-all duration-300 ease-in-out hidden md:block ${
                activeItem === '/services' ? 'font-bold text-2xl' : 'text-base'
              }`}>
                SERVICES
              </Link>
            </li>
            <li className="list-none" onClick={() => handleNavigation('/projects')} onMouseEnter={() => setActiveItem('/projects')}>
              <Link href="/projects" className={`list-none transition-all duration-300 ease-in-out hidden md:block ${
                activeItem === '/projects' ? 'font-bold text-2xl' : 'text-base'
              }`}>
                PROJECTS
              </Link>
            </li>
            <li className="list-none" onClick={() => handleNavigation('/contact')} onMouseEnter={() => setActiveItem('/contact')}>
              <Link href="/contact" className={`list-none transition-all duration-300 ease-in-out hidden md:block ${
                activeItem === '/contact' ? 'font-bold text-2xl' : 'text-base'
              }`}>
                CONTACT
              </Link>
            </li>
 
            <li
              onClick={() => handleNavigation('/')}
              className={`list-none transition-all duration-300 ease-in-out md:hidden ${
                activeItem === '/' ? 'text-2xl' : 'text-base'
              }`}
            >
              <i className="bx bx-home text-2xl"></i>
            </li>
            <li
              onClick={() => handleNavigation('/about')}
              className={`list-none transition-all duration-300 ease-in-out md:hidden ${
                activeItem === '/about' ? 'text-2xl' : 'text-base'
              }`}
            >
              <i className="bx bx-user text-2xl"></i>
            </li>
            <li
              onClick={() => handleNavigation('/services')}
              className={`list-none transition-all duration-300 ease-in-out md:hidden ${
                activeItem === '/services' ? 'text-2xl' : 'text-base'
              }`}
            >
              <i className="bx bx-briefcase text-2xl"></i>
            </li>
            <li
              onClick={() => handleNavigation('/projects')}
              className={`list-none transition-all duration-300 ease-in-out md:hidden ${
                activeItem === '/projects' ? 'text-2xl' : 'text-base'
              }`}
            >
              <i className="bx bx-folder text-2xl"></i>
            </li>
            <li
              onClick={() => handleNavigation('/contact')}
              className={`list-none transition-all duration-300 ease-in-out md:hidden ${
                activeItem === '/contact' ? 'text-2xl' : 'text-base'
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
