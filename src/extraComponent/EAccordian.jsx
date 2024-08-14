import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Motion } from "./Motion";
import { H2 } from "./typographyh2";
import { P } from "./typographypara";

const EAccordian = () => {
  return (
    <MaxWidthWrapper className="py-10 md:my-10 overflow-auto">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center">
        <div className="max-w-prose flex flex-1 flex-col items-center justify-center space-y-5 lg:space-y-4">
          <Motion direction="left">
            <H2 className="text-4xl text-center lg:text-left tracking-normal font-extrabold sm:text-5xl md:text-6xl lg:text-5xl border-0 -mb-6 ">
              <span className="block text-zinc-900 xl:inline leading-none lg:leading-none">
                Elevating Your Visual Storytelling with Creativity & Precision
              </span>
            </H2>
          </Motion>
          <Motion direction="left">
            <P className="mt-3 text-base font-medium  text-center     lg:text-left text-zinc-600 sm:mt-5 sm:text-lg lg:text-xl">
              At "Collage ka Ladka," we bring your vision to life with
              exceptional video editing, content creation, and design services.
              Let's make your brand stand out!
            </P>
          </Motion>
          <Motion direction="left">
            <div class="grid grid-cols-2 divide-x-2 divide-zinc-200">
              <div className="pr-6">
                <div className="text-4xl font-bold text-[#368764]">250+</div>
                <P className="text-base text-zinc-600">
                  Projects Completed
                </P>
              </div>
              <div className="pl-8">
                <div className="text-4xl font-bold text-[#368764]">115+</div>
                <P className="text-base text-zinc-600">
                  Satisfied Clients
                </P>
              </div>
            </div>
          </Motion>
        </div>
        <div className="w-full px-3 lg:px-8 flex items-start justify-center">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Video Editing</AccordionTrigger>
              <AccordionContent>
                From reels and YouTube videos to commercial shoots and podcasts,
                our expert editors craft visually stunning and engaging content
                tailored to your audience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Graphic & Logo Design</AccordionTrigger>
              <AccordionContent>
                Whether you need a striking brand logo, eye-catching posters, or
                custom YouTube thumbnails, our design team delivers creative
                solutions that make an impact.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Scripting & Content Creation</AccordionTrigger>
              <AccordionContent>
                Our skilled writers craft compelling scripts, captions, blogs,
                and research-based content to effectively communicate your
                message and enhance your brand’s voice.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Social Media Management</AccordionTrigger>
              <AccordionContent>
                We handle your social media presence on platforms like Instagram,
                YouTube, Facebook, and LinkedIn, driving engagement and growth
                with strategic content and management.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default EAccordian;
