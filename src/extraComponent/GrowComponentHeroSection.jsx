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
    <main className="bg-[#151820] my-10 md:my-20">
      <MaxWidthWrapper className="px-2 sm:px-4 md:px-0 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 place-items-center space-y-6">
          <div className="flex flex-col space-y-6 sm:space-y-6 lg:items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto">
            <div className="space-y-3 sm:space-y-6 mx-auto border-b-[1px] pb-8 border-zinc-300/25">
              <Motion direction="right" className="w-full -mb-4">
                <div className="inline-flex items-center justify-center py-1 transition ease-out text-[#66a28e] hover:duration-300 mb-0 uppercase tracking-wider">
                  <span className="text-lg items-center justify-center">
                    ALWAYS READY TO CAPTURE YOUR MOMENTS
                  </span>
                </div>
              </Motion>
              <Motion direction="left">
                <h1 className="font-normal leading-snug lg:leading-[1.1] text-zinc-200 text-4xl sm:text-5xl lg:text-6xl">
                  Elevate Your Podcasting{" "}
                  <span className="text-[#8f8ddc]">With Professional Editing</span>
                </h1>
              </Motion>
              <Motion direction="left">
                <p className="flex text-gray-400 tracking-tight md:font-normal max-w-xl mx-auto lg:max-w-none">
                Special Podcast with Former Lok Sabha Speaker Sumitra Mahajan: Dive into her journey of leadership, governance, and the future of Indian democracy in this insightful and inspiring conversation.                </p>
              </Motion>
              <div className="flex flex-row items-center justify-center lg:justify-start gap-0 w-full">
                <Motion direction="left">
                  <Button
                    variant={"outline"}
                    href="/get-started"
                    className={
                      "transition-all backdrop-blur-xl bg-zinc-600/30 border-[1px] border-zinc-300/25 rounded-xl px-8 py-4 flex text-wrap font-semibold text-lg text-zinc-300"
                    }
                  >
                    Get Started
                  </Button>
                </Motion>
                <Motion direction="left">
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
                </Motion>
              </div>
            </div>
            <div className="w-full mt-6">
              <div className="flex items-center justify-start">
                <>
                  <AvatarCircles
                    avatarUrls={[
                      "https://i.pravatar.cc/300?img=1",
                      "https://i.pravatar.cc/300?img=2",
                      "https://i.pravatar.cc/300?img=3",
                      "https://i.pravatar.cc/300?img=4",
                    ]}
                  />
                </>
                <div className="px-4 grid place-items-start gap-y-1">
                  <span className="grid grid-cols-5">
                    <Star className="text-yellow-600" />
                    <Star className="text-yellow-600" />
                    <Star className="text-yellow-600" />
                    <Star className="text-yellow-600" />
                    <Star className="text-yellow-600" />
                  </span>
                  <span className="text-base font-medium text-zinc-300">
                    Reviews <span className="font-bold">(4.8 of 5)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center aspect-square lg:h-[35rem] relative py-14">
            <Motion direction="right" className="relative ml-24">
              <div className="absolute inset-0 lg:-top-20 w-full lg:w-[24rem] h-auto lg:h-[35rem] bg-[#908ce1] mx-auto rounded-3xl z-0 -rotate-[12deg] lg:-rotate-[15deg]" />
              <div className="relative w-full lg:w-[38rem] h-auto lg:h-[24rem] mx-auto rounded-3xl overflow-clip z-40">
                {/* <div className="absolute inset-0 bg-black/50 z-50 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Special Podcast with Sumitra Mahajan</span>
                </div> */}
                <video loop controls playsInline
                  src={podcast}
                  alt="Editing workspace image"
                  width={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <Motion
                direction="left"
                className="absolute top-32 lg:top-40 -left-28 z-50 hidden sm:block bg-[#2b2f3b] border-[1px] border-zinc-400/20 rounded-3xl max-w-96"
              >
                <div className="flex flex-col items-center justify-center px-2 py-2">
                </div>
              </Motion>
              <Motion
                direction="left"
                className="absolute bottom-32 lg:bottom-8 -right-14 z-50 hidden sm:block bg-[#2b2f3b] border-[1px] border-zinc-400/20 rounded-3xl max-w-96"
              >
                <div className="flex flex-col items-center justify-center px-2 py-2">
                </div>
              </Motion>
            </Motion>
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default GrowComponentHeroSection;
