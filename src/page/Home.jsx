import {
  ArrowRight,
  CheckCircle,
  CheckIcon,
  Circle,
  PlayCircle,
} from "lucide-react";
import React from "react";
import aboutnik from "../assets/about-nik.jpg"
import { BiSolidQuoteAltRight } from "react-icons/bi";
import herovideobg from "../assets/hero-video-bg.png"
import { twMerge } from "tailwind-merge";
import aboutusimg from "../assets/aboutusimg.png";
import AvatarCircles from "../components/Avatar";
import Badge from "../components/Badge";
import BlogCard from "../components/BlogCard";
import Button from "../components/Button";
import Card from "../components/Card";
import ScrollTextAnimation from "../components/Text";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Motion } from "../components/Motion";
import NumCard from "../components/NumCard";
import Ripple from "../components/Ripple";
import { H1 } from "../components/typographyh1";
import { H2 } from "../components/typographyh2";
import { H3 } from "../components/typographyh3";
import { H4 } from "../components/typographyh4";
import { InlineCode } from "../components/typographyInlineCode";
import ankitsahu from "../assets/ankitsahu.png";
import mylogo from "../assets/mylogo.png";
import ckllogo from '../assets/ckllogo.png'
import { P } from "../components/typographypara";
import EUI from "../extraComponent/EUI";
import herovideo from "../assets/hero-video.mp4"
import Video from "../components/Video";
import {
  aboutFeatures,
  features,
  numCard,
  partner,
  pricing,
  serviceFeatures,
} from "../config";
import EAccordian from "../extraComponent/EAccordian";
import GrowComponentHeroSection from "../extraComponent/GrowComponentHeroSection";
import EBigIdea from "../extraComponent/EBigIdea";
import EContactFormTwo from "../extraComponent/EContactFormTwo";
import ankitimg from "../assets/ankitimg.png";
import AnimatedText from "../components/AnimatedText";
import heroimg from "../assets/hero-img.png";



const Home = () => {
  const serviceOne = serviceFeatures.slice(0, 2);
  const serviceTwo = serviceFeatures.slice(2, 5);
  

  return (
    <>
     <MaxWidthWrapper className="md:pt-0 md:mb-10 py-0">
  <MaxWidthWrapper className="px-0 sm:px-0 md:px-0">
    <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center place-items-center">
      {/* Left side content */}
      <div className="text-center mb-10 md:mb-0 md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left space-y-5 flex flex-col justify-center h-full">
        <Motion direction="left">
          <Badge className="inline-block uppercase tracking-wide">
            College Ka Ladka
          </Badge>
        </Motion>
        <H1 className="text-4xl text-center lg:text-left tracking-normal font-extrabold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <span className="block text-zinc-900 xl:inline">
            Transforming Your Ideas into Stunning Visuals
          </span>
        </H1>
        <Motion direction="left">
          <P className="mt-3 text-base font-medium text-zinc-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Expert Video Editing, Content Creation, and Design Services Tailored
            to Your Needs
          </P>
        </Motion>
        <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Motion direction="right">
              <Button
                border
                href="/watch-intro"
                className="px-6 py-4"
                icon={<PlayCircle size={16} />}
              >
                Watch Intro
              </Button>
            </Motion>
           
            
            <div className="mt-6">
          <div className="flex items-center justify-center lg:justify-start">
            <AvatarCircles
              avatarUrls={[
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP9_pOtGguTfvWCRBEHYlOueBWgccNMvKN_A&s",
                "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833546.jpg",
                "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833562.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726012800&semt=ais_hybrid",
                "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg",
              ]}
            />
            <span className="ml-3 text-sm font-medium text-zinc-600">
              15+ Satisfied Clients
            </span>
          </div>
        </div>
      </div>
      </div>
      </div>
          
      
      {/* Right side video */}
      <div className="relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 flex justify-center items-center">
        <div className="relative mx-auto w-full rounded-lg lg:max-w-md flex justify-center">
          <video
            controls
            playsInline
            className="md:max-w-xl h-auto rounded-lg aspect-video"
            src={herovideo}
            poster={herovideobg}
            alt="ankit_sahu_hero"
          />
        </div>
      </div>
    </div>
  </MaxWidthWrapper>
</MaxWidthWrapper>





      <EAccordian></EAccordian>
     
      
      
      
  <MaxWidthWrapper className="px-6 py-0 sm:px-0 md:px-0 ">
    <div className="grid grid-flow-dense items-center gap-x-12 gap-y-10 place-items-center lg:grid-cols-2 pb-8">
      <div className="h-full  w-full flex items-center justify-center">
        
          <img
            className="w-full lg:w-full h-[20rem] sm:h-[36rem] lg:h-auto z-30 -mb-2 md:mb-14 rounded-lg mix-blend-multiply"
            src={aboutnik}
            alt="College ka Ladka Team Here"
          />
  
      </div>
      <div className="space-y-4">
        <Motion direction="right">
          <Badge className="inline-block uppercase tracking-wide">
            About College ka Ladka
          </Badge>
        </Motion>
        <H1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Crafting Visual Stories with Creativity & Passion
        </H1>
        <P className=" text-[#27272a]/80 md:text-xl text-balance">
          At "College ka Ladka," we specialize in bringing your ideas to life
          through exceptional video editing, content creation, and design
          services. 
        </P>
        <div className="pt-5 space-y-6">
          {aboutFeatures.map((feature, index) =>
            feature.highlight === true ? (
              <Motion direction="right">
                <div
                  key={index}
                  className="flex items-center gap-4 translate-x-2 md:translate-x-6 px-4 py-3 bg-[#edeaff] rounded-5xl"
                >
                  <span className="p-2">
                    <CheckCircle
                      className="p-3 mx-auto size-14 text-[#a5a3ef] bg-zinc-50 rounded-full"
                      size={12}
                    />
                  </span>
                  <div>
                    <H2 className="text-base md:text-lg lg:text-xl border-none font-semibold">
                      {feature.title}
                    </H2>
                    <P className="text-gray-500 tracking-wide leading-1 ">
                      {feature.description}
                    </P>
                  </div>
                </div>{" "}
              </Motion>
            ) : (
              <Motion direction="right">
                <div key={index} className="flex items-center gap-4">
                  <span className="p-2">
                    <CheckCircle
                      className="p-3 mx-auto size-14 text-[#a5a3ef] bg-[#e6e5ff] rounded-full"
                      size={12}
                    />
                  </span>
                  <div>
                    <H2 className="text-base md:text-lg lg:text-xl border-none font-semibold">
                      {feature.title}
                    </H2>
                    <P className="text-gray-500 tracking-wide leading-1 ">
                      {feature.description}
                    </P>
                  </div>
                </div>
              </Motion>
            )
          )}
        </div>
      </div>
    </div>
 
</MaxWidthWrapper>

<AnimatedText></AnimatedText>
<ScrollTextAnimation></ScrollTextAnimation>


<EUI></EUI>
<Video />



      
      {/* <GrowComponentHeroSection></GrowComponentHeroSection> */}

      <MaxWidthWrapper className="">
  <div className="w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
      <div className="space-y-4">
        <Motion direction="left">
          <Badge className="inline-block uppercase tracking-wide">
            Milestones
          </Badge>
        </Motion>
        <H1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Our Key Achievements
        </H1>
        <P className="max-w-prose text-zinc-400 md:text-xl text-balance font-thin pt-2 pb-8">
          Discover how we've transformed brands and empowered teams with our innovative solutions. Explore the milestones that define our journey.
        </P>
        <Button
          bg
          href="/projects"
          className={
            "bg-[#292d39] hover:-translate-y-2 transition-all hover:bg-[#ff6400] rounded-full px-6 py-4"
          }
        >
          Learn More
        </Button>
      </div>
      <div className="relative flex items-center justify-center py-10 md:pt-20 pb-10">
        <Circle
          strokeWidth={0.1}
          strokeDasharray={0.3}
          className="absolute z-0 w-64 h-64 md:w-96 md:h-96"
        />
        <div className="grid grid-cols-2 gap-4 md:gap-8 relative z-10">
          {numCard.map((item, index) => (
            <NumCard
              key={index}
              className={`${
                Math.floor(index / 2) % 2 === 0
                  ? index % 2 === 0
                    ? "bg-[#ffe0cc]"
                    : "bg-[#eeedfe]"
                  : index % 2 === 0
                  ? "bg-[#eeedfe]"
                  : "bg-[#ffe0cc]"
              }`}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="pt-8">
      <span className="relative flex justify-center">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-zinc-600 to-transparent opacity-75"></div>
      </span>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10 place-items-center">
      {partner.map((item, index) => (
        <div
          key={index}
          className="w-full h-16 flex justify-center items-center opacity-90 hover:opacity-100 transition-all"
        >
          <img
            src={item.src}
            alt="partner"
            className="w-auto h-11 object-cover"
          />
        </div>
      ))}
    </div>
  </div>
</MaxWidthWrapper>

     
     
    

      {/* <MaxWidthWrapper className="max-w-full w-full  py-4 pt-20  lg:pt-28 pb-8">
        <MaxWidthWrapper className="px-0 sm:px-0 md:px-0">
          <div className="container w-full mx-auto gap-x-12 lg:grid-cols-2">
            <div className="w-full flex flex-col items-center justify-center mx-auto sm:text-center space-y-4">
              <Motion direction="up">
                <Badge className="inline-block uppercase tracking-wide">
                  Our Pricing
                </Badge>
              </Motion>
              <H1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                The Best Price Just For You
              </H1>
              <P className="max-w-prose text-[#27272a]/80 md:text-xl text-balance text-center font-thin">
                Empower your team to build and deploy faster with our
                cutting-edge platform. Unlock new possibilities and
                revolutionize your web presence.
              </P>
            </div>

            <div className="w-full">
              <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <Motion direction="up" duration={1.8} up={120}>
                  <div className="grid grid-cols-1 gap-4 lg:gap-0  lg:grid-cols-3 sm:items-center">
                    {pricing.map((item, index) => (
                      <div
                        className={
                          item.enterprise
                            ? "rounded-5xl bg-[#eeedfe] p-6 py-14 sm:py-28 sm:px-8 lg:p-12 z-20"
                            : item.plan === "Personal Plan"
                            ? "rounded-5xl md:rounded-l-5xl  p-6 sm:px-8 lg:p-12 lg:shadow-2xl"
                            : "rounded-5xl md:rounded-r-5xl p-6 sm:px-8 lg:p-12 lg:shadow-2xl"
                        }
                        key={index}
                      >
                        <div className="text-center">
                          {item.icon}
                          <h2 className="text-lg font-medium text-gray-900">
                            {item.plan}
                            <span className="sr-only">Plan</span>
                          </h2>
                          <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                              ${item.price}
                            </strong>
                          </p>
                          <p className="mt-2 text-sm text-[#27272a]/80 leading-wide">
                            Billed {item.billingCycle}
                          </p>
                        </div>

                        <div className="w-full mt-8 flex items-center justify-center mx-auto">
                          <Button
                            bg
                            href={item.href}
                            className="bg-[#3d3568] hover:-translate-y-2 transition-all hover:bg-[#ff6400] rounded-full px-6 py-4"
                            icon={<ArrowRight size={16} />}
                          >
                            Get Started
                          </Button>
                        </div>

                        <div className="w-full flex items-center justify-center">
                          <ul className="text-left mt-6 space-y-2 mx-auto">
                            {item.features.map((feature, featureIndex) => (
                              <li
                                className="flex items-center gap-1 py-1"
                                key={featureIndex}
                              >
                                <CheckIcon className="size-5 text-[#ff6400]" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </Motion>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </MaxWidthWrapper> */}

      {/* <MaxWidthWrapper className="max-w-full  overflow-visible py-4 pt-10 lg:pt-6 h-[2200px] md:h-[1200px]  lg:h-[600px] bg-[#141025] ">
        <MaxWidthWrapper className="px-0 sm:px-0 md:px-0 flex items-center justify-center mx-auto">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
              <div className="space-y-4 flex flex-col items-center justify-center md:items-start  ">
                <Motion direction="left">
                  <Badge className="inline-block uppercase tracking-wide">
                    Our Projects
                  </Badge>
                </Motion>
                <H1 className="text-zinc-100 text-3xl font-bold tracking-tight sm:text-4xl">
                  Project We Have Done
                </H1>
              </div>
              <div className="flex  flex-col items-center md:items-start justify-start space-y-5">
                <P className="max-w-prose text-center md:text-left  text-zinc-400 md:text-xl text-balance font-thin pb-2">
                  Empower your team to build and deploy faster with our
                  cutting-edge platform. Unlock new possibilities and
                  revolutionize your web presence.
                </P>
                <Button
                  bg
                  href="/projects"
                  className={
                    "bg-[#3d3568]  hover:-translate-y-2 transition-all hover:bg-[#ff6400] rounded-full px-6 py-4"
                  }
                >
                  View All Projects
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 pb-10 place-items-center">
              <Card
                title={"Social Media Ads"}
                description={
                  "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                }
                img={
                  "https://images.unsplash.com/photo-1529692776239-19cbd1334490?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              />
              <Card
                title={"Email Marketing"}
                description={
                  "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                }
                img={
                  "https://images.unsplash.com/photo-1721814734819-11db590e88e8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              />
              <Card
                title={"Content Writter"}
                description={
                  "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                }
                img={
                  "https://images.unsplash.com/photo-1721818767842-e7a2b1b69b9a?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              />
              <Card
                title={"Business Strategy"}
                description={
                  "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                }
                img={
                  "https://images.unsplash.com/photo-1527556897832-0c6492fa56cd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </MaxWidthWrapper> */}




      {/* <MaxWidthWrapper className="max-w-full w-full mx-auto pt-5 lg:pt-8 bg-[url('../assets/bg-footer.png')] bg-[#141025] bg-blend-overlay brightness-75  pb-8">
        <MaxWidthWrapper className="px-0 sm:px-0 md:px-0 flex flex-col items-center mx-auto">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center mb-8">
              <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
                <Motion direction="left">
                  <Badge className="inline-block uppercase tracking-wide">
                    Testimonials
                  </Badge>
                </Motion>
                <H1 className="text-zinc-100 text-3xl font-bold tracking-tight sm:text-4xl">
                  What Client Says About Socialzy
                </H1>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <P className="max-w-prose text-center text-zinc-400 md:text-xl font-thin">
                  Empower your team to build and deploy faster with our
                  cutting-edge platform. Unlock new possibilities and
                  revolutionize your web presence.
                </P>
              </div>
            </div>

            <Motion direction="up" duration={1.8} up={120}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full py-6">
                <div className="flex items-center justify-center col-span-1 md:col-span-1">
                  <div className="p-6 rounded-lg shadow-md flex flex-col items-center justify-start gap-4">
                    <div className="w-full flex flex-col items-center text-center space-y-4">
                      <div className="w-full flex items-center justify-center gap-2">
                        <H3 className="text-2xl font-bold text-[#ff6400]">
                          250%
                        </H3>
                        <P className="text-lg text-zinc-300 mt-1">
                          - Follower Growth
                        </P>
                      </div>
                      <div className="w-full flex items-center justify-center gap-2">
                        <H3 className="text-2xl font-bold text-[#ff6400]">
                          80%
                        </H3>
                        <P className="text-lg text-zinc-300 mt-1">
                          - Increase Sales
                        </P>
                      </div>
                      <div className="w-full flex items-center justify-center gap-2">
                        <H3 className="text-2xl font-bold text-[#ff6400]">
                          140%
                        </H3>
                        <P className="text-lg text-zinc-300 mt-1">
                          - Total Engagement
                        </P>
                      </div>
                      <div className="w-full flex items-center justify-center gap-2">
                        <H3 className="text-2xl font-bold text-[#ff6400]">
                          75%
                        </H3>
                        <P className="text-lg text-zinc-300 mt-1">
                          - Income Growth
                        </P>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="shadow-md flex items-center justify-center order-1 md:order-2 md:col-span-1 col-span-1">
                  <img
                    src="https://images.unsplash.com/photo-1524799526615-766a9833dec0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-[85%] h-96 object-cover rounded-3xl"
                    alt="image"
                  />
                </div>

                <div className="p-4 rounded shadow-md flex flex-col items-center justify-center order-2 md:order-3 md:col-span-1 col-span-1">
                  <H3 className="text-2xl font-bold text-center text-[#ff6400] mb-4">
                    Fantastic Job Done by Socialzy
                  </H3>
                  <div className="max-w-lg flex items-center justify-center space-x-5">
                    <div>
                      <BiSolidQuoteAltRight
                        className="text-[#ff6400] mb-4"
                        size={96}
                      />
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <InlineCode className="text-zinc-100">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididu ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation
                      </InlineCode>
                      <div className="mt-1">
                        <H4 className="text-zinc-100">Steve Prosser</H4>
                        <P className="text-gray-600">CEO - Mindtech</P>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Motion>
          </div>
        </MaxWidthWrapper>
      </MaxWidthWrapper> */}

      
    </>
  );
};

export default Home;
