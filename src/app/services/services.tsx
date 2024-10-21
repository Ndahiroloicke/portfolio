import Serve from "@/components/serv";
import React from "react";

const Services = () => {
  return (
    <div>
      <div>
        <p>Services</p>
        <h1>My SPECIALTIES</h1>
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
  );
};

export default Services;
