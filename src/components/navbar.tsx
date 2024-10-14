export default function Navbar() {
    return (
      <>
      <head>
      <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
        <div
          className="bg-[#141313] flex flex-col justify-between text-sm h-screen overflow-y-hidden text-white w-fit p-4"
          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
        >
          <div className="space-y-20">
            <header
              className="text-[30px] font-semibold"
              style={{ fontFamily: "'IBM Plex Serif', serif" }}
            >
              Loic
            </header>
            <nav className="space-y-6">
              <li className="list-none">HOME</li>
              <li className="list-none">ABOUT</li>
              <li className="list-none">SERVICES</li>
              <li className="list-none">PROJECTS</li>
              <li className="list-none">CONTACT</li>
            </nav>
          </div>
          <div className="flex flex-col space-y-4 mt-32">
            <i className="bx bxl-instagram-alt w-fit text-2xl py-1 px-1 rounded-3xl text-black bg-white"></i>
            <i className="bx bxl-linkedin w-fit text-2xl py-1 px-1 text-black rounded-3xl bg-white"></i>
            <i className="bx bxl-github w-fit text-2xl py-1 px-1 text-black rounded-3xl bg-white"></i>
            <p className="font-extralight mt-4 w-56">
              Copyright © 2024 Loic Sayed. All rights reserved.
            </p>
          </div>
        </div>
      </>
    );
  }
  