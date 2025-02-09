import React from "react";
import FlickeringGrid from "./ui/flickering-grid";
import { Circle, IndianRupee } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center hero min-h-screen  rounded-lg w-full bg-background bg-black overflow-hidden gap-10 relative">
        <div className="flex flex-col items-center">
          <h1 className="z-10 herotitle">EMPOWER-TECH</h1>
          <span className="herodesc flex items-center justify-center flex-wrap gap-1" style={{fontSize:24}}><span>Innovate for Social Equality</span><span> & </span><span>Empowerment</span></span>
          <span className="z-10 herodesc pt-4">24 Hour Hackathon</span>
        </div>
        <FlickeringGrid
          className="z-0 absolute inset-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#ffc0cb"
          maxOpacity={0.5}
          flickerChance={0.1}
          height={2000}
          width={2000}
        />
        <Link className="homebtn hover:bg-fuchsia-700 hover:text-white transition duration-300 ease-in-out transform hover:scale-105" href={"https://forms.gle/YSZRG6DMFbnptPUEA"}>
          Register Now
        </Link>
        <div className="flex flex-col z-10">
          <span className="top"><Circle stroke="none" size="20" fill="#FDDBBB"/><Circle stroke="none" size="20" fill="#F0C1E1"/><Circle stroke="none" size="20" fill="#CB9DF0"/></span>
          <div className="herocard">
            <span>9 - 10 March,2025</span>
            <span>Entry Fee:  ₹500/-</span>
            <span>Cash Prize:  ₹20000/-</span>
          </div>
          
        </div>
    </section>
  );
};

export default Hero;
