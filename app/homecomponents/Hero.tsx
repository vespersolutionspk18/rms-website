"use client";
import React from "react";
import { IoGlobeOutline } from "react-icons/io5";
import Threads from "../bits/Backgrounds/Threads/Threads";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-black flex font-light flex-col text-white h-[720px] w-full justify-between relative">
      <div className="absolute w-full h-[720px]  z-0">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
      <div className="flex  flex-row justify-between p-10 items-center relative z-10">
        <div className="flex flex-row justify-between items-center">
          <div className="md:w-2/3 flex flex-col  gap-5">
            <div className="bg-stone-700/50 items-center backdrop-blur-2xl rounded-full px-2 w-fit py-1 flex flex-row gap-2">
              <IoGlobeOutline className="stroke-white" />
              <p className="text-sm font-light">
                Digital threats evolve. Stay Ahead.
              </p>
            </div>
            <h1 className="text-7xl">Proactive defense for businesses</h1>
          </div>
          
        </div>
      </div>
      <div className="flex flex-row justify-between gap-5 px-10">
        <div className="flex flex-col gap-1">
            <h5 className="text-4xl font-medium">ISO 27001</h5>
              <p className="text-md text-white/75">Certified Security Framework</p>  
        </div>
        <div className="flex flex-col gap-1">
            <h5 className="text-4xl font-medium">15M+</h5>
              <p className="text-md text-white/75">Cyberthreats blocked annually</p>  
        </div>
        <div className="flex flex-col gap-1">
            <h5 className="text-4xl font-medium">90% of Clients</h5>
              <p className="text-md text-white/75">Got Zero-Breach Track Record</p>  
        </div>
        <div className="flex flex-col gap-1">
            <h5 className="text-4xl font-medium">99.9%</h5>
              <p className="text-md text-white/75">Threat Mitigation Rate</p>  
        </div>
        

      </div>
      
    </div>
  );
};

export default Hero;
