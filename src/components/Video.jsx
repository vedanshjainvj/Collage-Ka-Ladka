import React from 'react';
import herovideo from "../assets/hero-video.mp4"
import Button from './Button';
import podcast from "../assets/podcast.mp4";
import MaxWidthWrapper from './MaxWidthWrapper';
import sumitra from '../assets/sumitra.png'
const Video = () => {
  return (
    <>
    <MaxWidthWrapper>
    <div className="bg-gray-100 rounded-xl flex flex-col justify-center items-center px-4 py-8">
 
 <h1 className="text-3xl sm:text-4xl md:text-5xl uppercase lg:text-4xl font-bold text-center text-gray-800 mb-4">
 Elevate Your Podcasting With Professional Editing
 </h1>


 <p className="text-center text-sm sm:text-xl md:text-lg text-gray-500 max-w-6xl mb-6">
 Special Podcast with Former Lok Sabha Speaker Sumitra Mahajan: Dive into her journey of leadership, governance, and the future of Indian democracy in this insightful and inspiring conversation.
 </p>


 <Button border>Create Your Own Style ...</Button>


 <div className="relative w-full mt-10 max-w-3xl">
   <video
     controls
     src={podcast}
     poster={sumitra}
     playsInline
     className="w-full h-auto rounded-lg"
   >
   </video>
 </div>
</div>
    </MaxWidthWrapper>
    </>
    
  );
};

export default Video;
