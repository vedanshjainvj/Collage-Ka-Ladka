import { PlayIcon, Star } from "lucide-react";
import React from "react";
import { GrLineChart } from "react-icons/gr";
import AvatarCircles from "./Avatar";
import Button from "./Button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Motion } from "./Motion";
import { H3 } from "./typographyh3";
import { P } from "./typographypara";
import Loader from "./Loader";
import podcast from "../assets/podcast.mp4";

const GrowComponentHeroSection = () => {
  return (
    <main className="my-10 md:my-20">
    <MaxWidthWrapper className="px-2 sm:px-4 md:px-0 py-10">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-8 place-items-center space-y-6">
        <div className="flex flex-col space-y-6 sm:space-y-6 lg:items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto">
          <div className="space-y-3 sm:space-y-6 mx-auto border-b-[1px] pb-8 border-zinc-300/25">
            <Motion direction="right" className="w-full -mb-4">
              <div className="inline-flex items-center justify-center py-1 transition ease-out hover:duration-300 mb-0 uppercase tracking-wider">
                <span className="text-lg items-center justify-center">
                  ALWAYS READY TO CAPTURE YOUR MOMENTS
                </span>
              </div>
            </Motion>
            <Motion direction="left">
              <h1 className="font-normal leading-snug lg:leading-[1.1]  text-4xl sm:text-5xl lg:text-6xl">
                Elevate Your Podcasting{" "}
                <span className="text-[#8f8ddc]">With Professional Editing</span>
              </h1>
            </Motion>
            <Motion direction="left">
              <p className="flex  tracking-tight md:font-normal max-w-xl mx-auto lg:max-w-none">
                Special Podcast with Former Lok Sabha Speaker Sumitra Mahajan: Dive into her journey of leadership, governance, and the future of Indian democracy in this insightful and inspiring conversation.
              </p>
            </Motion>
            <div className="flex flex-row items-center justify-center lg:justify-start gap-0 w-full">
              <Motion direction="left">
                <Button
                 border
                  href="/get-started"
                  className={
                    "transition-all backdrop-blur-xl  rounded-xl px-8 py-4 flex text-wrap font-semibold text-lg"
                  }
                >
                  Get Started
                </Button>
              </Motion>
              {/* <Motion direction="left">
                <Button
                  variant="link"
                  href="/play-video"
                  className="text-wrap font-semibold text-lg text-zinc-300 relative overflow-hidden"
                >
                  <span className="p-4 bg-zinc-50 rounded-full z-30">
                    <PlayIcon className="text-[#6f5fdc] size-8" />
                  </span>
                  Play Video
                </Button>
              </Motion> */}
            </div>
          </div>
          
        </div>
        <div className="flex items-center justify-center aspect-square lg:h-[35rem] relative py-14">
          <Motion direction="right" className="relative ml-0 lg:ml-24">
            <div className="absolute inset-0 w-full h-auto bg-[#908ce1] mx-auto rounded-3xl z-0 rotate-[12deg] lg:-rotate-[15deg]" />
            <div className="relative w-full lg:w-[38rem] h-auto lg:h-[24rem] mx-auto rounded-3xl overflow-clip z-40">
              <video
                loop
                controls
                playsInline
                src={podcast}
                alt="Editing workspace image"
                className="w-full h-full object-cover"
              />
            </div>
          </Motion>
        </div>
      </div>
    </MaxWidthWrapper>
  </main>
  
  );
};

export default GrowComponentHeroSection;
