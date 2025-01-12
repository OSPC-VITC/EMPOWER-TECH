import React from 'react'
import { Phone, User } from 'lucide-react'; // Importing Phone and User icons

const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen"> {/* Center-align the section */}
      <h2 className="themebox  tb22 text-center p-6">
        CONTACT US
        </h2> 
      <div className="flex flex-col gap-6 items-center">
        {/* Student Coordinators */}
        <div className="themebox tb22 text-center p-6">
          <h2 className="themeboxtitle themeboxtitle2 tb2 mb-4">STUDENT COORDINATORS</h2>
          <p className="flex items-center justify-center mb-2">
            <Phone className="w-5 h-5 mr-2" /> SRUTHI PRIYA - 720021631
          </p>
          <p className="flex items-center justify-center mb-2">
            <Phone className="w-5 h-5 mr-2" /> JANAA HARINI S - 6364612777
          </p>
          <p className="flex items-center justify-center">
            <Phone className="w-5 h-5 mr-2" /> BHARATHI - 7358218079
          </p>
        </div>
        {/* Faculty Coordinators */}
        <div className="themebox tb22 text-center p-6">
          <h2 className="themeboxtitle themeboxtitle2 tb2 mb-4">FACULTY COORDINATORS</h2>
          <p className="flex items-center justify-center gap-2 mb-2">
            <User className="w-5 h-5" /> Dr.U.Srinivasa Rao
          </p>
          <p className="flex items-center justify-center gap-2 mb-2">
            <User className="w-5 h-5" /> Dr.Jayaram
          </p>
          <p className="flex items-center justify-center gap-2 mb-2">
            <User className="w-5 h-5" /> Dr.Vydeki
          </p>
          <p className="flex items-center justify-center gap-2 mb-2">
            <User className="w-5 h-5" /> Dr.Suganya R
          </p>
          <p className="flex items-center justify-center gap-2 mb-2">
            <User className="w-5 h-5" /> Dr.Jagannath M
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
