"use client"
import Serve from "@/components/serv";
import React from "react";
import {motion} from 'framer-motion'

const Services = () => {
  return (
    <motion.div
    initial = {{opacity:0, y: 100}}
    animate = {{
        opacity: 1,
        y: 0,
        transition: {duration:0.5}
    }}
    className="mx-auto"
    >
    <div className="mx-auto" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <div className="mb-[48px] mt-[60px]">
        <p className="font-semibold italic text-[18px]">Services</p>
        <h1 className="font-bold text-[48px]">My SPECIALTIES</h1>
      </div>
      <div className="space-y-[70px]">
        <Serve
          name="Frontend development"
          description="You can customize a template or make your own from scratch, 
                        with an immersive library at your disposal. You can customize a template"
        />
        <Serve
          name="Backend development"
          description="You can customize a template or make your own from scratch, 
                        with an immersive library at your disposal. You can customize a template"
        />
        <Serve
          name="Mobile development"
          description="You can customize a template or make your own from scratch, 
                        with an immersive library at your disposal. You can customize a template"
        />
        <Serve
          name="UI/UX Design"
          description="You can customize a template or make your own from scratch, 
                        with an immersive library at your disposal. You can customize a template"
        />
      </div>
    </div>
    </motion.div>
  );
};

export default Services;
