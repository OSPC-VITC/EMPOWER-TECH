import { ChevronRight, MapPin } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

const Themes = () => {
  return (
    <section className='w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-10'>
      <div className='themebox text-center'>
        <h2 className='themeboxtitle'>THEMES</h2>
        <div className='flex flex-col md:items-start gap-2'>
          <p className='flex items-center'><ChevronRight /> AI-Driven Safety Solutions for Real-Time Assistance</p>
          <p className='flex items-center'><ChevronRight /> Cybersecurity & Digital Safety for all</p>
          <p className='flex items-center'><ChevronRight /> Assistance for Elderly & Physically Challenged Individuals</p>
          <p className='flex items-center'><ChevronRight /> Child Safety & Protection</p>
          <p className='flex items-center'><ChevronRight /> Community Empowerment & Public Safety</p>
        </div>
      </div>

      <div className='themebox text-center'>
        <h2 className='themeboxtitle' >OVERVIEW</h2>
            <p> Empower-Tech, a Social Well-Being Hackathon, unites innovators, technologists, and changemakers to develop AI-driven solutions that promote social equality, justice, empowerment, and sustainable development. This hackathon focuses on creating impactful safety solutions that address diverse challenges while fostering community resilience and inclusivity.
  </p>
</div>


      <div className='w-full flex flex-wrap justify-center gap-4 mt-6'>
        <div className='themebox tb22 flex flex-col items-center justify-center p-4'>
          <h2 className='themeboxtitle themeboxtitle2 tb2'>VENUE</h2>
          <p className='flex items-center gap-1 text-center'><MapPin /> VIT Chennai (MG Auditorium)</p>
        </div>

        <div className='themebox tb22 flex flex-col items-center p-4'>
          <h2 className='themeboxtitle themeboxtitle2 tb2'>CONDUCTED BY</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-2'>
            <Image src="/ospc.jpg" height={80} width={80} alt="OSPC Logo" className="rounded-full object-cover" />
            <Image src="/acm.png" height={80} width={80} alt="ACM LOGO" className="rounded-full object-cover" />
            <Image src="/ieeewielogo.jpg" height={80} width={80} alt="IEEEWIE Logo" className="rounded-full object-cover" />
          </div>
        </div>

        <div className='themebox tb22 flex flex-col items-center p-4'>
          <h2 className='themeboxtitle themeboxtitle2 tb2'>COMMUNITY PARTNERS</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-2'>
            <Image src="/ieeestudentbranch.png" height={80} width={80} alt="IEEE Logo" className="rounded-full object-cover" />
            <Image src="/IBMz.jpg" height={80} width={80} alt="IBM z Logo" className="rounded-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Themes
