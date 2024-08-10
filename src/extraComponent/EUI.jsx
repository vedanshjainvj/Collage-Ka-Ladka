import React from "react";
import { FaFigma } from "react-icons/fa";
import Badge from "./Badge";
import Button from "./Button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Motion } from "./Motion";
import { H2 } from "./typographyh2";
import { P } from "./typographypara";
import { CirclePlus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";

const ServicesSection = () => {
  return (
    <MaxWidthWrapper className="py-10 overflow-auto">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="flex flex-col items-center justify-center space-y-5 lg:space-y-4">
          <Motion
            direction="left"
            className="text-center lg:text-left space-y-4"
          >
            <Badge className="inline-block uppercase tracking-wide">
              Our Services
            </Badge>
            <H2 className="text-4xl text-center lg:text-left tracking-normal font-extrabold sm:text-5xl md:text-6xl lg:text-5xl border-0 -mb-6">
              <span className="block text-balance text-zinc-900 xl:inline leading-none lg:leading-none">
                Tailored
              </span>
              <br className="hidden md:block"/>
              <span className="block text-balance text-zinc-900 xl:inline leading-none lg:leading-none">
                Solutions
              </span>
            </H2>
            <P className="mt-3 text-base font-medium text-center lg:text-left text-zinc-600 sm:mt-5 sm:text-lg lg:text-xl">
              We offer a variety of services to elevate your brand and engage your audience.
            </P>
            <div className="pr-6">
              <div className="text-4xl font-bold text-zinc-800">
                Starting at 999.<span className="text-2xl text-zinc-600">00</span>
              </div>
              <div className="flex mx-auto items-center justify-center md:justify-start gap-4 mt-4">
                <Button
                  bg
                  href="/get-started"
                  className={
                    "bg-zinc-900 transition-all hover:bg-zinc-950 rounded-full px-10 py-4 flex text-wrap"
                  }
                >
                  <FaFigma className="size-4 lg:size-8" />
                  Explore Services
                </Button>
                <CirclePlus className="size-4 lg:size-8" />
              </div>
            </div>
          </Motion>
        </div>

        <div className="relative w-full lg:w-[24rem] h-auto lg:h-[35rem] mx-auto rounded-3xl overflow-clip z-40">
          <img
            src="https://www.kindpng.com/picc/m/108-1082179_startup-rocket-png-transparent-png.png"
            alt="service image"
            width={300}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="w-full px-3 lg:px-8 flex items-center justify-center">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Video Production</AccordionTrigger>
              <AccordionContent>
                Our team specializes in creating captivating videos that tell your brand's story and engage your audience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Social Media Management</AccordionTrigger>
              <AccordionContent>
                We manage your social media presence, crafting compelling content that resonates with your followers and enhances engagement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Content Creation</AccordionTrigger>
              <AccordionContent>
                Our creative team produces high-quality content tailored to your needs, ensuring your brand stands out in a crowded marketplace.
              </AccordionContent>
              
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Graphic & Logo Design</AccordionTrigger>
              <AccordionContent>
              Whether you need a striking brand logo, eye-catching posters, or custom YouTube thumbnails, our design team delivers creative solutions that make an impact.              </AccordionContent>
              
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ServicesSection;
