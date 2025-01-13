"use client";
import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Themes from "@/components/Themes";
import Timeline from "@/components/TimelineComponent";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
const Page = () => {
  // Create refs for each section
  const refs = {
    home: useRef(null),
    about: useRef(null),
    timeline: useRef(null),
    contact: useRef(null),
    faq: useRef(null),
  };

  return (
    <>
      <Navbar refs={refs} />

      <div ref={refs.home} id="hero" className="section">
        <Hero />
      </div>
      <div ref={refs.about} id="about" className="section">
        <Themes />
      </div>
      <div ref={refs.timeline} id="timeline" className="section">
        <Timeline />
      </div>
      <div ref={refs.faq} id="faq" className="section">
        <Faq />
      </div>
      <div ref={refs.contact} id="contact" className="section">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Page;
