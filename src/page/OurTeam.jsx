import React from 'react'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import t1 from '../assets/t1.jpg'
import t2 from '../assets/t2.jpg'
import t3 from '../assets/t4.png'
import t4 from '../assets/t4.jpg'
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Motion } from "../components/Motion";



const OurTeam = () => {
  return (
   <>
   <MaxWidthWrapper>
<div className="px-4  mx-auto sm:max-w-xl   md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-0">
      <div className="mx-auto mb-10 lg:max-w-6xl sm:text-center">
        <p className="inline-block  mb-4 text-xl font-semibold tracking-wider text-teal-800 uppercase rounded-full bg-teal-accent-400">
          Discover Our Team
        </p>
        <p className="text-base text-gray-700 md:text-lg">
        Meet our dedicated team, a group of passionate professionals committed to driving innovation and excellence. Together, we bring diverse skills and creativity to deliver outstanding results for our clients.
        </p>
      </div>
      <div className="grid md:place-items-center gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-1 lg:max-w-screen-lg">
        <div className='border hover:scale-105 duration-300	w-80 sm:pb-4 sm:px-0 sm:py-0 shadow-md px-4 py-4'>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              src={t1}
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center">
            <p className="text-lg font-bold">Ankit Sahu</p>
            <p className="mb-5 text-xs text-gray-800">Founder & Head Consultant</p>
            <div className="flex items-center space-x-3 sm:justify-center">
              <a
                href="https://www.linkedin.com/in/collegekaladka-editing-agency-5a7b66204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
              >
                <FaLinkedin className='size-6'/>
              </a>
              <a
                href="https://www.instagram.com/ankitsahu454?utm_source=qr&igsh=eHgwaTdhaDRueXRh" target='blank'
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
              >
                  <FaInstagram className='size-6'/>
                  
              </a>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
              >
                <FaXTwitter className='size-6'/>
              </a>
            </div>
          </div>
        </div>
        {/* <div className='border sm:pb-4 hover:scale-105 duration-300	 sm:px-0 sm:py-0 shadow-md px-4 py-4'>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              src={t2}
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center">
            <p className="text-lg font-bold">Deepak Sahu</p>
            <p className="mb-5 text-xs text-gray-800">Finance Manager</p>
            <div className="flex items-center space-x-3 sm:justify-center">
            <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
              >
                <FaLinkedin className='size-6'/>
              </a>
              <a
                href="https://www.instagram.com/deepak9_____/" target='blank'
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
              >
                  <FaInstagram className='size-6'/>
                  
              </a>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
              >
                <FaXTwitter className='size-6'/>
              </a>
            </div>
          </div>
        </div>
        <div className='border sm:pb-4 hover:scale-105 duration-300	 sm:px-0 sm:py-0 shadow-md px-4 py-4'>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              src={t3}
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center">
            <p className="text-lg font-bold">Veer Pratap</p>
            <p className="mb-5 text-xs text-gray-800">Marketing & Sales Head</p>
            <div className="flex items-center space-x-3 sm:justify-center">
            <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
              >
                <FaLinkedin className='size-6'/>
              </a>
              <a
                href="https://www.instagram.com/franzofit?igsh=dWxpOWIzbnJqajV3" target='blank'
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
              >
                  <FaInstagram className='size-6'/>
                  
              </a>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
              >
                <FaXTwitter className='size-6'/>
              </a>
            </div>
          </div>
        </div>
        <div className='border hover:scale-105 duration-300	
 sm:pb-4 sm:px-0 sm:py-0 shadow-md px-4 py-4'>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              src={t4}
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center">
            <p className="text-lg font-bold">Ayushi Jain</p>
            <p className="mb-5 text-xs text-gray-800">HR & Public Relations</p>
            <div className="flex items-center space-x-3 sm:justify-center">
            <a
                href="https://www.linkedin.com/in/ayushi-jain-85b44320a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
              >
                <FaLinkedin className='size-6'/>
              </a>
              <a
                href="https://www.instagram.com/ayushijain0206?igsh=djd6ZnhtN3Ayajls" target='blank'
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
              >
                  <FaInstagram className='size-6'/>
                  
              </a>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
              >
                <FaXTwitter className='size-6'/>
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
<div className='h-20'></div>
</MaxWidthWrapper>  
   </>
  )
}

export default OurTeam