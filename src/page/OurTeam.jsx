import React from 'react'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import team02 from '../assets/team03.png'
import team03 from '../assets/team05.png'
import team04 from '../assets/team05.png'
import team05 from '../assets/team06.png'
import team07 from '../assets/team07.png'
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const OurTeam = () => {
  return (
   <>
   <MaxWidthWrapper>
   <section class="">
  <div class="py-0 sm:py-8 px-4 mx-auto max-w-screen-xl lg:py-0 lg:px-6 text-gray-800 ">
      <div class="mx-auto  text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-zinc ">Our Team</h2>
          <p class="font-light text-gray-600 mb-20 lg:mb-16  sm:text-xl ">Meet our dedicated team, a group of passionate professionals committed to driving innovation and excellence. Together, we bring diverse skills and creativity to deliver outstanding results for our clients.</p>
      </div> 
      <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 ">
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
      </div>  
  </div>
</section>
</MaxWidthWrapper>  
   </>
  )
}

export default OurTeam