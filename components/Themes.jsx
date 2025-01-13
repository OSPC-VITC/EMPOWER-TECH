import { ChevronRight, Locate, MapPin, PhoneCall, TextSearch, User } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

const Themes = () => {
  return (
    <section className='min-w-full min-h-screen flex items-center justify-center flex-col'>
        <div className='themebox'>
            <h2 className='themeboxtitle'>THEMES</h2>
            <p className='flex'><ChevronRight/>AI-Driven Safety Solutions for Real-Time Assistance</p>
            <p className='flex'><ChevronRight/>Cybersecurity & Digital Safety for all</p>
            <p className='flex'><ChevronRight/>Assistance for Elderly & Physically Challenged Individuals</p>
            <p className='flex'><ChevronRight/>Child Safety & Protection</p>
            <p className='flex'><ChevronRight/>Community Empowerment & Public Safety</p>
        </div>
        <div className='themebox'>
            <h2 className='themeboxtitle tb2'>EVENT OVERVIEW</h2>
            <p>The Empower-tech, a Social Well-Being Hackathon aims to bring together innovators, technologists, and changemakers to develop solutions that prioritize social equality, justice, empowerment, and sustainable development. This Hackathon will focus on creating impactful, AI-driven safety solutions to address challenges across demographics while fostering community resilience and inclusivity.</p>
        </div>
        <div className='flex gap-2 flex-wrap justify-center'>
        <div className='themebox tb22 justify-evenly'>
            <h2 className='themeboxtitle themeboxtitle2 tb2'>VENUE</h2>
            <p className='text-wrap text-center flex gap-1'><MapPin/> VIT Chennai (MG Auditorium)</p>
        </div>
            <div className='themebox tb22 gap-4'>
                <h2 className='themeboxtitle themeboxtitle2 tb2'>CONDUCTED BY</h2>
                <div className='flex gap-4'>
                    <Image src={"/ospc.jpg"} height={100} width={100} alt="OSPC Logo" className='logos'/>
                    <Image src={"/acm.png"} height={100} width={100} alt="ACM LOGO" className='logos ieeewie'/>
                    <Image src={"/ieeewielogo.jpg"} height={100} width={100} alt="IEEEWIE Logo" className='logos'/>
                    <Image src={"/ieeestudentbranch.png"} height={100} width={100} alt="IEEE Logo" className='logos'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Themes