import React from 'react';
import { Carousel } from 'primereact/carousel';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

// Importing videos

import pp1 from '../assets/pp1.mp4';
import pp2 from '../assets/pp2.mp4';
import pp3 from '../assets/pp3.mp4';
import pp4 from '../assets/pp4.mp4';
import pp5 from '../assets/pp5.mp4';
import pp6 from '../assets/pp6.mp4';
import pp7 from '../assets/pp7.mp4';
import pp8 from '../assets/pp8.mp4';
import pp9 from '../assets/pp9.mp4';
import pp10 from '../assets/pp10.mp4';

import tn1 from '../assets/thumbnails/tn1.png';
import tn2 from '../assets/thumbnails/tn2.jpg';
import tn3 from '../assets/thumbnails/tn3.png';
import tn4 from '../assets/thumbnails/tn4.png';
import tn5 from '../assets/thumbnails/tn5.jpg';
import tn6 from '../assets/thumbnails/tn6.jpg';



// Array of video sources
const videos = [
  { id: 4, src: pp4 },
  { id: 5, src: pp5 },
  { id: 6, src: pp6 },
  { id: 1, src: pp1 },
  { id: 2, src: pp2 },
  { id: 3, src: pp3 },
  { id: 7, src: pp7 },
  { id: 8, src: pp8 },
  { id: 9, src: pp9 },
  { id: 10, src: pp10 },

];

// Array of YouTube thumbnail URLs
const youtubeThumbnails = [
  tn1,
  tn2,
  tn3,
  tn4,
  tn5, tn6
];

// Responsive options for different screen sizes
const responsiveOptions = [
  {
    breakpoint: '1024px', numVisible: 3, numScroll: 1,
  },
  {
    breakpoint: '768px', numVisible: 2, numScroll: 1,
  },
  {
    breakpoint: '560px', numVisible: 1, numScroll: 1,
  }
];

function Projects() {

  const videoTemplate = (video) => {
    return (
      <div className="border p-10 border-gray-100"> 
        <video controls className=" md:ml-0 object-cover rounded-lg shadow-md"> 
          <source src={video.src} type="video/mp4" />
        </video>
      </div>
    );
  };

  const thumbnailTemplate = (thumbnail) => {
    return (
      <div className="border p-2">
        <img
          src={thumbnail}
          alt="YouTube Thumbnail"
          className="rounded-lg object-cover shadow-md"
        />
      </div>
    );
  };

  return (
    <>
      <MaxWidthWrapper className='py-10'>
        <section className="bg-[#fdf6e3] py-10 px-8 flex flex-col md:flex-row items-center justify-center">
          {/* Left Side - Text */}
          <div className="md:w-1/2 w-full text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our Latest Projects
            </h1>
            <p className="text-lg md:text-lg text-gray-700 mb-8">
              We specialize in delivering high-quality video content across various industries. From promotional videos to cinematic productions, we transform your raw footage into visually stunning experiences.
            </p>
            <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition">
              View more
            </button>
          </div>

          {/* Right Side - Videos */}
          <div className="md:w-1/2 w-full flex justify-center md:justify-end gap-4">
            {/* Video 1 */}
            <div className="w-[45%]">
              <video
                controls
                className="w-full aspect-[9/16] rounded-lg shadow-md"
              >
                <source src={pp5} type="video/mp4" />
              </video>
            </div>
            
            {/* Video 2 */}
            <div className="w-[45%] ">
              <video
                controls
                className="w-full aspect-[9/16] rounded-lg shadow-md"
              >
                <source src={pp6} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
        <h1 className="text-4xl text-center pt-10 md:text-5xl font-bold text-black">
              Reels Creation  
            </h1>
        {/* Video Carousel */}
        <div className="flex justify-center w-full py-4">
          <div className="my-carousel-container w-full ">
            <Carousel
              value={videos}
              numVisible={3}
              numScroll={1}
              responsiveOptions={responsiveOptions}
              itemTemplate={videoTemplate}
              circular
              className="flex justify-center"
            />
          </div>
        </div>

    <section className="bg-gray-50 py-12 flex flex-col items-center justify-center">
      <div className="flex justify-center space-x-6 mb-6">
        {/* React icons for social media platforms */}
        <FaFacebookF className="h-8 w-8 text-blue-600" />
        <FaTwitter className="h-8 w-8 text-blue-400" />
        <FaInstagram className="h-8 w-8 text-pink-600" />
        <FaLinkedinIn className="h-8 w-8 text-blue-700" />
        <FaYoutube className="h-8 w-8 text-red-600" />
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4">
        Manage Your Social Media Platforms with Ease
      </h2>

      <p className="text-gray-500 text-center max-w-xl mb-8 px-4">
        We handle all your social media platforms and deliver all the content you
        need, from video editing to graphics, ensuring your brand stays consistent
        and engaging across all channels.
      </p>

      <button className="bg-orange-600 text-white py-3 px-8 rounded-lg hover:bg-black transition">
        Get Started with Us
      </button>
    </section>


        <h1 className="text-4xl text-center pt-10 md:text-5xl font-bold text-black">
              Thumbnail Creation  
            </h1>
        {/* YouTube Thumbnails Carousel */}
        <div className="flex justify-center w-full py-10">
          <div className="my-carousel-container w-full ">
            <Carousel
              value={youtubeThumbnails}
              numVisible={3}
              numScroll={1}
              responsiveOptions={responsiveOptions}
              itemTemplate={thumbnailTemplate}
              circular
              className="flex justify-center"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}

export default Projects;
