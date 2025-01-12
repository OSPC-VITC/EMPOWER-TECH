"use client";
import { useRef, useState } from "react";
import { AlignRight, X } from "lucide-react";
import "./NavbarCSS.css";

const menu = [
  { name: "Home", refName: "home" },
  { name: "About", refName: "about" },
  { name: "Timeline", refName: "timeline" },
  { name: "Contact", refName: "contact" },
];

const Navbar = ({ refs }) => {
  const [pop, setPop] = useState(false);

  const scrollToSection = (refName) => {
    const section = refs[refName]?.current;
    if (section) {
      section.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Align to the start of the section
      });
      setPop(false); // Close the mobile menu after click
    }
  };

  return (
    <div className="navbar shift">
      <span className="logo">
        <span className="logoe">E</span>
        <span className="text-pink-400">T</span>
      </span>
      <div className="nav hidden md:block">
        <ul>
          {menu.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer"
              onClick={() => scrollToSection(item.refName)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden">
        {pop ? (
          <X size={32} onClick={() => setPop((val) => !val)} />
        ) : (
          <AlignRight size={32} onClick={() => setPop((val) => !val)} />
        )}
      </div>
      {pop && (
        <div className="absolute right-8 top-24 z-10 navpop md:hidden">
          <ul className="flex flex-col items-center gap-1">
            {menu.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer"
                onClick={() => scrollToSection(item.refName)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
