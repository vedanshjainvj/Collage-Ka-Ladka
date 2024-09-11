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
   {/* <section class="">
  <div class="py-0 sm:py-8 px-4 mx-auto max-w-screen-xl lg:py-0 lg:px-6 text-gray-800 ">
      <div class="mx-auto  text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-zinc ">Our Team</h2>
          <p class="font-light text-gray-600 mb-20 lg:mb-16  sm:text-xl ">Meet our dedicated team, a group of passionate professionals committed to driving innovation and excellence. Together, we bring diverse skills and creativity to deliver outstanding results for our clients.</p>
      </div> 
      <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 ">
      <Motion direction="left">
      <div class="items-center bg-blue-100 rounded-lg border border-gray-200 shadow-lg sm:flex ">
              <a href="" className='flex p-2 md:p-0 justify-center'>
                  <img class=" rounded-lg sm:rounded-none sm:rounded-l-lg" src={team05} alt="Ankit Sahu"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight  text-zinc">
                      <a href="#"> Ankit Sahu</a>
                  </h3>
                  <span class="text-gray-600">Founder and Head Consultant</span>
                  <p class="mt-3 mb-4 font-light  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, culpa.</p>
                  <ul class="flex space-x-4 sm:mt-0">
                  <li>
                          <a href="#" className="text-xl">
                          <FaLinkedin />

                          </a>
                      </li>
                      <li>
                          <a href="#" className="text-xl">
                          <FaInstagram />
                          </a>
                      </li>
                      <li>
                          <a href="#" className="text-xl">
                          <FaXTwitter />
                          </a>
                      </li>
                      
                  </ul>
              </div>
          </div> 
      </Motion>

      <Motion direction="right">
      <div class="items-center bg-blue-100 rounded-lg border border-gray-200 shadow-lg sm:flex ">
          <a href="" className='flex p-2 md:p-0 justify-center'>
          <img class="rounded-lg sm:rounded-none sm:rounded-l-lg" src={team02} alt="Jese Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight  text-zinc">
                      <a href="#">Deepak Sahu</a>
                  </h3>
                  <span class="text-gray-700">Finance Manager</span>
                  <p class="mt-3 mb-4 font-light  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, facilis!</p>
                  <ul class="flex space-x-4 sm:mt-0">
                      <li>
                          <a href="#" className="text-xl">
                          <FaLinkedin />

                          </a>
                      </li>
                      <li>
                          <a href="#" className="text-xl">
                          <FaInstagram />
                          </a>
                      </li>
                      <li>
                          <a href="#" className="text-xl">
                          <FaXTwitter />
                          </a>
                      </li>
                      
                  </ul>
              </div>
          </div> 
      </Motion>
          
      <Motion direction="left">
      <div class="items-center bg-blue-100 rounded-lg border border-gray-200 shadow-lg sm:flex ">
          <a href="" className='flex p-2 md:p-0 justify-center'>
          <img class="rounded-lg sm:rounded-none sm:rounded-l-lg" src={team07} alt="Michael Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight  text-zinc">
                      <a href="#">Veer Pratap</a>
                  </h3>
                  <span class=" ">Marketing & Sales Head</span>
                  <p class="mt-3 mb-4 font-light  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, illo.</p>
                  <ul class="flex space-x-4 sm:mt-0">
                  <li>
                          <a href="#" className="text-xl">
                          <FaLinkedin />

                          </a>
                      </li>
                      <li>
                          <a href="#" className="text-xl">
                          <FaInstagram />
                          </a>
                      </li>
                      <li>
                          <a href="#" className="text-xl">
                          <FaXTwitter />
                          </a>
                      </li>
                      
                  </ul>
              </div>
          </div> 
      </Motion>
      <Motion direction="right">
      <div class="items-center bg-blue-100 rounded-lg border border-gray-200 shadow-lg sm:flex ">
          <a href="" className='flex p-2 md:p-0 justify-center'>
          <img class="rounded-lg sm:rounded-none sm:rounded-l-lg" src={team04} alt="Sofia Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight  text-zinc">
                      <a href="#">Ayushi Jain</a>
                  </h3>
                  <span class=" ">HR & Public Relations</span>
                  <p class="mt-3 mb-4 font-light  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, molestias?</p>
                  <ul class="flex space-x-4 sm:mt-0">
                  <li>
                          <a href="#" className="text-xl">
                          <FaLinkedin />

                          </a>
                      </li>
                      <li>
                          <a href="#" className="text-xl">
                          <FaInstagram />
                          </a>
                      </li>
                      <li>
                          <a href="#" className="text-xl">
                          <FaXTwitter />
                          </a>
                      </li>
                      
                  </ul>
              </div>
          </div>  
      </Motion>
          
      </div>  
  </div>
</section> */}
<div className="px-4  mx-auto sm:max-w-xl   md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-0">
      <div className="mx-auto mb-10 lg:max-w-6xl sm:text-center">
        <p className="inline-block  mb-4 text-xl font-semibold tracking-wider text-teal-800 uppercase rounded-full bg-teal-accent-400">
          Discover Our Team
        </p>
        <p className="text-base text-gray-700 md:text-lg">
        Meet our dedicated team, a group of passionate professionals committed to driving innovation and excellence. Together, we bring diverse skills and creativity to deliver outstanding results for our clients.
        </p>
      </div>
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
        <div className='border hover:scale-105 duration-300	 sm:pb-4 sm:px-0 sm:py-0 shadow-md px-4 py-4'>
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
        <div className='border sm:pb-4 hover:scale-105 duration-300	 sm:px-0 sm:py-0 shadow-md px-4 py-4'>
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
        </div>
      </div>
    </div>
<div className='h-20'></div>
</MaxWidthWrapper>  
   </>
  )
}

export default OurTeam