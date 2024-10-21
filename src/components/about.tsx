import Image from "next/image";
import React from "react";
import profile from "../assets/porfolio-removebg-preview.png";
import download from "../assets/north_east.png";
import quotes from "../assets/quotes2.svg";

const About = () => {
  return (
    <div className="mx-4 sm:mx-8 md:mx-14 mt-12">
      <div className="flex lg:flex-row md:flex-col flex-col gap-y-10 lg:gap-x-24 items-center justify-center">
        {/* Left Side */}
        <div className="text-center lg:text-left">
          <p className="font-semibold text-[18px] italic">Nice to meet you!</p>
          <p className="font-bold text-4xl sm:text-5xl lg:text-6xl">Welcome to...</p>
          <div className="flex flex-col items-center lg:items-start">
            {/* Responsive Image Scaling */}
            <Image
              src={profile}
              alt="Profile Image"
              className="w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 xl:w-[400px] xl:h-[400px]"
            />
            {/* Text Size Adjustments for Larger Screens */}
            <p className="font-bold text-4xl sm:text-5xl lg:text-6xl">Ndahiro Loic</p>
            <p className="text-xl mt-3 lg:text-2xl xl:text-3xl">
              <span className="font-bold italic">A Fullstack Developer</span> based in{" "}
              <span className="font-bold italic">Rwanda</span>
            </p>
            <div className="flex flex-row mt-8 hover:cursor-pointer items-center space-x-2">
              {/* Link to download the CV */}
              <a href="/cv.pdf" download className="underline lg:text-lg xl:text-xl">
                DOWNLOAD CV
              </a>
              <Image src={download} alt="Download" />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
            <div className="space-y-6">
              <div className="flex flex-row space-x-3 items-center">
                <i className="bx bxs-phone text-2xl lg:text-3xl bg-slate-200 rounded-full py-2 px-2"></i>
                <p className="font-bold italic text-lg lg:text-xl">+250 722 297 431</p>
              </div>
              <div className="flex flex-row space-x-3 items-center">
                <i className="bx bxs-envelope text-2xl lg:text-3xl bg-slate-200 rounded-full py-2 px-2"></i>
                <p className="font-bold italic text-lg lg:text-xl">ndahiroloicke@gmail.com</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex flex-row space-x-3 items-center">
                <i className="bx bx-user-pin text-2xl lg:text-3xl bg-slate-200 rounded-full py-2 px-2"></i>
                <p className="font-bold italic text-lg lg:text-xl">9+ years</p>
              </div>
              <div className="flex flex-row space-x-3 items-center">
                <i className="bx bxs-location-plus text-2xl lg:text-3xl bg-slate-200 rounded-full py-2 px-2"></i>
                <p className="font-bold italic text-lg lg:text-xl">Kigali, Rwanda</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-auto mt-10 h-[0.5px] bg-[#141313]"></div>

          {/* Experience and Clients */}
          <div className="mt-12">
            <div className="flex flex-col sm:flex-row gap-y-8 gap-x-7">
              <div>
                <div className="flex flex-row items-center py-2 gap-x-3">
                  <span className="font-bold text-4xl sm:text-5xl lg:text-6xl">9+</span>
                  <p className="font-bold text-xl lg:text-2xl leading-6 italic">
                    Years <br />
                    Experience...
                  </p>
                </div>
                <div className="w-auto sm:w-[315px]">
                  <p className="text-sm lg:text-lg">
                    Hello there! My name is Ndahiro Loic. I am a web designer & developer, and I'm very passionate and dedicated to my work.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex flex-row items-center py-2 gap-x-3">
                  <span className="font-bold text-4xl sm:text-5xl lg:text-6xl">19</span>
                  <p className="font-bold text-xl lg:text-2xl leading-6 italic">
                    Clients <br />
                    Worldwide...
                  </p>
                </div>
                <div className="w-auto sm:w-[315px]">
                  <p className="text-sm lg:text-lg">
                    With 10+ years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-16">
            <div className="bg-black w-auto h-auto sm:h-[144px] p-4 flex items-center gap-x-3 justify-center">
              <Image src={quotes} alt="Quotes" />
              <p className="font-semibold text-white italic text-center lg:text-lg xl:text-xl">
                "Innovation is the bridge between what exists and what could be."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
