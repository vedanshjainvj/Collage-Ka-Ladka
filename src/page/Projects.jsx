import React from 'react';
import { Carousel } from 'primereact/carousel';
import MaxWidthWrapper from '../components/MaxWidthWrapper';

// Importing videos
import pp1 from '../assets/pp1.mp4';
import pp2 from '../assets/pp2.mp4';
import pp3 from '../assets/pp3.mp4';
import pp4 from '../assets/pp4.mp4';
import pp5 from '../assets/pp5.mp4';
import pp6 from '../assets/pp6.mp4';

// Array of video sources
const videos = [
  { id: 4, src: pp4 },
  { id: 5, src: pp5 },
  { id: 6, src: pp6 },
  { id: 1, src: pp1 },
  { id: 2, src: pp2 },
  { id: 3, src: pp3 },
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
        <video controls className="w-64 md:ml-0 object-cover rounded-lg shadow-md"> 
          <source src={video.src} type="video/mp4" />
        </video>
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
        <div className="flex justify-center w-full py-10">
       
          <div className="my-carousel-container w-full max-w-[64rem]">
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
      </MaxWidthWrapper>
    </>
  );
}

export default Projects;
