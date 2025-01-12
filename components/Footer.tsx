import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black-900 text-white py-10">
      

      <div className="border-t border-gray-700 mt-10 pt-4">
        <p className="text-center text-sm text-[#f855a1]">
          © {new Date().getFullYear()} Open Source Programming Club (OSPC) - VIT Chennai. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
