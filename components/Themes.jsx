import { ChevronRight, MapPin } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

const Themes = () => {
  return (
    <section className='w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-10 '>
      

      <div className='themebox tb22 flex flex-col items-center justify-center p-6'>
          <h2 className='themeboxtitle themeboxtitle2 tb2 text-lg md:text-xl font-bold mb-4'>THEMES</h2>
          <p className='flex items-center gap-2 w-full'>
            <ChevronRight className="flex-shrink-0" />
            <span>AI-Driven Safety Solutions for Real-Time Assistance</span>
          </p>
          <p className='flex items-center gap-2 w-full'>
            <ChevronRight className="flex-shrink-0" />
            <span>Cybersecurity & Digital Safety for all</span>
          </p>
          <p className='flex items-center gap-2 w-full'>
            <ChevronRight className="flex-shrink-0" />
            <span>Assistance for Elderly & Physically Challenged Individuals</span>
          </p>
          <p className='flex items-center gap-2 w-full'>
            <ChevronRight className="flex-shrink-0" />
            <span>Child Safety & Protection</span>
          </p>
          <p className='flex items-center gap-2 w-full'>
            <ChevronRight className="flex-shrink-0" />
            <span>Community Empowerment & Public Safety</span>
          </p>
        </div>


   
      

        <div className='themebox tb22 flex flex-col items-center justify-center p-6'>
          <h2 className='themeboxtitle themeboxtitle2 tb2 text-lg md:text-xl font-bold mb-4'>EVENT OVERVIEW</h2>
          <p className='text-left md:text-center leading-relaxed'>
          Empower-Tech, a Social Well-Being Hackathon, unites innovators, technologists, and changemakers to develop AI-driven solutions that promote social equality, justice, empowerment, and sustainable development. This hackathon focuses on creating impactful safety solutions that address diverse challenges while fostering community resilience and inclusivity.
        </p>
        </div>

      <div className='w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
        <div className='themebox tb22 flex flex-col items-center justify-center p-6'>
          <h2 className='themeboxtitle themeboxtitle2 tb2 text-lg md:text-xl font-bold mb-4'>VENUE</h2>
          <p className='flex items-center gap-2 text-center'>
            <MapPin className="flex-shrink-0"/>
            VIT Chennai 
              (MG Auditorium)
          </p>
        </div>

        <div className='themebox tb22 flex flex-col items-center p-6'>
          <h2 className='themeboxtitle themeboxtitle2 tb2 text-lg md:text-xl font-bold mb-4'>CONDUCTED BY</h2>
          <div className='grid grid-cols-3 gap-4 mt-2'>
            <Image src="/ospc.jpg" height={80} width={80} alt="OSPC Logo" className="rounded-full object-cover" />
            <Image src="/acm.png" height={80} width={80} alt="ACM LOGO" className="rounded-full object-cover" />
            <Image src="/ieeewielogo.jpg" height={80} width={80} alt="IEEEWIE Logo" className="rounded-full object-cover" />
          </div>
        </div>

        <div className='themebox tb22 flex flex-col items-center p-6'>
          <h2 className='themeboxtitle themeboxtitle2 tb2 text-lg md:text-xl font-bold mb-4'>COMMUNITY PARTNERS</h2>
          <div className='grid grid-cols-2 gap-4 mt-2'>
            <Image src="/ieeestudentbranch.png" height={80} width={80} alt="IEEE Logo" className="rounded-full object-cover" />
            <Image src="/IBMz.jpg" height={80} width={80} alt="IBM z Logo" className="rounded-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Themes