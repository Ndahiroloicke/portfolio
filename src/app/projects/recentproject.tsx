import React from "react";
import Project from "./project";
import nutritionist from "../../assets/Nut.png";
import soundbox from "../../assets/soundbox.jpg";
import menya from "../../assets/Menya.png"

const projectData = [
  {
    title: "Nutritionist",
    description: "Front-end developer",
    imageSrc: nutritionist,
    projlink: "https://nutritionist-web-app.vercel.app/"
  },
  {
    title: "Menya",
    description: "Mobile-App developer",
    imageSrc: menya,
    projlink: "https://github.com/RISA-Project"
  },
  {
    title: "Soundbox",
    description: "Full-Stack developer",
    imageSrc: soundbox,
    projlink: "https://github.com/Ndahiroloicke/soundbox2"
  },
  {
    title: "e-commerce",
    description: "Full-Stack developer",
    imageSrc: nutritionist,
    projlink: "https://github.com/Ndahiroloicke/Fullstack_ecommerce-_website"
  },
  {
    title: "Etix",
    description: "Mobile-App developer",
    imageSrc: nutritionist,
    projlink: "https://github.com/ETix-org"
  },
  {
    title: "Forti-core",
    description: "Front-end developer",
    imageSrc: nutritionist,
    projlink: "https://github.com/"
  },
  
  
  // Add more projects as needed
];

const Recent = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col">
        <p className="text-md italic">Work</p>
        <h1 className="text-3xl font-bold">RECENT PROJECT</h1>
      </div>
      <div className="mt-20 justify-center">
        <div className="grid grid-cols-2 gap-x-20 gap-y-8">
          {projectData.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              projlink={project.projlink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recent;
