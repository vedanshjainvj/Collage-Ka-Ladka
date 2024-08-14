import {
  CheckCircle,
  Clock7,
  HandCoins,
  Handshake,
  User
} from "lucide-react";
import { BiBulb } from "react-icons/bi";
import { BsBuildings } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { PiShoppingBagOpenDuotone, PiUsersThreeFill } from "react-icons/pi";

export const serviceFeatures = [
  {
    title: "Email Marketing",
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu    ",
    icon: (
      <img
        src="../assets/email.png"
        width={80}
        height={80}
        className="w-20 h-20 mx-auto rounded-md object-cover"
        alt="email marketing"
      />
    ),
    href: "/email-marketing",
  },
  {
    title: "SEO Management",
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu    ",
    highlight: true,
    icon: (
      <img
        src="../assets/seo.png"
        className="w-20 h-20 mx-auto rounded-md object-cover"
        alt="seo management"
      />
    ),
    href: "/seo-management",
  },
  {
    title: "Content Writing",
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu    ",
    icon: (
      <img
        src="../assets/content.png"
        className="w-20 h-20 mx-auto rounded-md object-cover"
        alt="content writing"
      />
    ),
    href: "/content-writing",
  },
  {
    title: "Business Strategy",
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu    ",
    icon: (
      <img
        src="../assets/business.png"
        className="w-20 h-20 mx-auto rounded-md object-cover"
        alt="business strategy"
      />
    ),
    href: "/business-strategy",
  },
  {
    title: "Social Media Management",
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu    ",
    icon: (
      <img
        src="../assets/social-media-management.png"
        className="w-20 h-20 mx-auto rounded-md object-cover"
        alt="social media management"
      />
    ),
    href: "/social-media-management",
    color: true,
  },
];

export const aboutFeatures = [
  {
    title: "Creative Video Production",
    description:
      "Our expert team creates engaging videos tailored to your brand's vision, ensuring your message resonates with your audience.",
  },
  {
    title: "Comprehensive Content Strategy",
    description:
      "We help you listen and engage with your audience through well-planned content strategies that foster meaningful connections.",
    highlight: true,
  },

];

export const features = [
  {
    title: "Why Choose Us",
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu ",
    className:
      "md:rounded-tl-4xl lg:rounded-l-4xl md:border-r md:border-zinc-600/80 text-center",
  },
  {
    title: "Save Your Time",
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu ",
    icon: <Clock7 size={48} className="text-[#ff6400] " />,
    className: "rounded-tr-4xl lg:rounded-none ",
  },
  {
    title: "Affordable Price For You",
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu ",
    highlight: true,
    icon: <HandCoins size={48} className="text-[#28214c]" />,
    className: "rounded-4xl",
  },
  {
    title: "Best Strategy",
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu ",
    icon: <BiBulb size={48} className="text-[#ff6400]" />,
    className: "rounded-r-4xl",
  },
];

export const pricing = [
  {
    plan: "Personal Plan",
    price: 49.9,
    icon: (
      <User
        size={24}
        className="w-20 h-20 mx-auto mb-5 text-zinc-100"
        color="#ff6400"
      />
    ),
    billingCycle: "Annually",
    buttonText: "Get Started",
    href: "/buy/personal",
    features: [
      "25 Analytics Campaigns",
      "Includes Branded Reports",
      "300 Keywords for SEO",
      "24/7 Customer Support",
    ],
  },
  {
    plan: "Enterprise Plan",
    price: 149.9,
    icon: (
      <BsBuildings
        size={24}
        className="w-20 h-20 mx-auto mb-5 text-zinc-100"
        color="#ff6400"
      />
    ),
    billingCycle: "Annually",
    buttonText: "Get Started",
    href: "/buy/enterprise",
    features: [
      "25 Analytics Campaigns",
      "Includes Branded Reports",
      "300 Keywords for SEO",
      "15 Social Accounts",
      "24/7 Customer Support",
    ],
    enterprise: true,
  },
  {
    plan: "Business Plan",
    price: 89.9,
    icon: (
      <PiShoppingBagOpenDuotone
        size={24}
        className="w-20 h-20 mx-auto mb-5 text-zinc-100"
        color="#ff6400"
      />
    ),
    billingCycle: "Annually",
    buttonText: "Get Started",
    href: "/buy/business",
    features: [
      "25 Analytics Campaigns",
      "Includes Branded Reports",
      "300 Keywords for SEO",
      "24/7 Customer Support",
    ],
  },
];

export const numCard = [
  {
    title: "Satisfied Clients",
    value: "3460",
    icon: <FaUsers size={48} className="text-[#ff6400]" />,
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu ",
  },
  {
    title: "Successful Campaigns",
    value: "8550 ",
    icon: <CheckCircle size={48} className="text-[#ff6400]" />,
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu ",
  },
  {
    title: "Brands Joined",
    value: "180",
    icon: <Handshake size={48} className="text-[#ff6400]" />,
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu ",
  },
  {
    title: "Marketing Experts",
    value: "85",
    icon: <PiUsersThreeFill size={48} className="text-[#ff6400]" />,
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu ",
  },
];

export const partner = [
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAICLqn_cZUzh16ZmB_9JIhR43Dwv_ie4Xxw&s" },
  { src: "./assets/partner-2.png" },
  { src: "./assets/partner-3.png" },
  { src: "./assets/partner-4.png" },
];
