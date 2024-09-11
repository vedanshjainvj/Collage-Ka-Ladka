import React from 'react';
import { PiVideoFill } from "react-icons/pi";
import { TiSocialInstagram } from "react-icons/ti";
import { TbWriting } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";
import EBigIdea from '../extraComponent/EBigIdea';

const services = [
  {
    title: 'Social Media Handling',
    description: 'Instagram Page, Youtube Channel, Facebook Page, Twitter Handle etc.',
    icon: <TiSocialInstagram />,
  },
  {
    title: 'Video Editing',
    description: 'Shorts, Reels, Youtube Video, Podcasts, Pre Wedding, Commercial, Short Films etc.',
    icon: <PiVideoFill />,
  },
  {
    title: 'Scripting',
    description: 'Caption Writing, Content Writing, Story Writing, Blog Writing, Article Writing etc.',
    icon: <TbWriting />,
  },
  {
    title: 'Designing',
    description: 'Graphics, Logos, Thumbnail, Posters, Banners, Flyers, Brochures etc.',
    icon: <IoLogoFigma />,
  },
];

const Services = () => {
  return (
    <>
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className='md:flex justify-between'>
            <div>
              <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">Curated Just For You</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Our Services
              </p>
            </div>
            <div>
              <p className="mt-4 max-w-4xl md:text-start text-lg text-gray-600 lg:mx-auto">
                Transform your content with our expert video podcast editing, eye-catching thumbnail designs, and strategic social media management. We craft each element to amplify your voice and make your brand stand out in the digital crowd.
              </p>
            </div>
          </div>
          <div className="mt-10 md:mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <div key={index} className="pt-6">
                  <div className="relative  bg-blue-50 border border-opacity-50 rounded-lg px-6 pb-8 h-full group">
                    <div className="relative -top-4 z-50 flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white text-3xl mx-auto">
                      {service.icon}
                    </div>
                    <div className="relative z-10 text-center">
                      <h3 className="mt-8 text-xl font-medium text-gray-900">{service.title}</h3>
                      <p className="mt-5 text-base text-gray-700">{service.description}</p>
                    </div>
                    <div className="absolute inset-0 bg-blue-200 transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500 ease-in-out opacity-50"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <EBigIdea />
    </>
  );
};

export default Services;
