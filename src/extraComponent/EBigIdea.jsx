import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Motion } from "./Motion";
import Badge from "./Badge";
import { H2 } from "./typographyh2";
import { P } from "./typographypara";
import Button from "./Button";
import AvatarCircles from "./Avatar";
import {
  ArrowRight,
  CheckCircle,
  CheckIcon,
  Circle,
  PlayCircle,
} from "lucide-react";

const EBigIdea = () => {
  return (
    <MaxWidthWrapper className="py-16 overflow-auto">
  <div className="bg-zinc-100 p-6 rounded-xl border-b-[3px] md:border-[#feb954]">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-4">
      <div className="flex flex-col items-center justify-center space-y-5 lg:space-y-4">
        <Motion
          direction="left"
          className="text-center lg:text-left space-y-4"
        >
          <Badge className="inline-block uppercase tracking-wide">
            HOW ABOUT A CHAT?
          </Badge>
          <H2 className="text-4xl text-center lg:text-left tracking-normal font-extrabold sm:text-5xl md:text-6xl lg:text-5xl border-0 -mb-6">
            <span className="block text-balance text-zinc-900 xl:inline leading-none lg:leading-none">
              Have a <span className="text-[#368764]">BIG IDEA</span> in mind? Let's discuss what we can achieve together.
            </span>
          </H2>
          <P className="mt-3 text-base font-medium text-center lg:text-left text-zinc-600 sm:mt-5 sm:text-lg lg:text-xl">
            We are here to bring your concepts to life with our expertise in video editing, design, and content creation. Let's collaborate to make something extraordinary.
          </P>
          <div className="flex items-center justify-start">
            <>
              
            </>
            <div className="px-4 grid place-items-start">
            <Button onClick={() => {
                  window.scrollTo(0,0);
                }}
                      bg
                      href="/contact"
                      className={
                        "bg-[#292d39]  hover:-translate-y-2 transition-all hover:bg-[#ff6400] rounded-full py-4"
                      }
                      icon={<ArrowRight size={16} />}
                    >
                      Contact Now !
                    </Button>
            </div>
          </div>
        </Motion>
      </div>
      <Motion direction="right">
        <div className="w-full lg:w-[28rem] h-[26rem] mx-auto rounded-3xl overflow-clip z-30">
          <img
            src="https://png.pngtree.com/png-clipart/20220911/original/pngtree-shining-bright-light-bulb-png-image_8539561.png"
            alt="creative workspace image"
            width={300}
            className="w-full h-full object-cover rounded-xl z-30"
          />
        </div>
      </Motion>
    </div>
  </div>
</MaxWidthWrapper>
  );
};

export default EBigIdea;
