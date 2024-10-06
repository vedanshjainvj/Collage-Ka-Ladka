import { ChevronRight } from "lucide-react";
import React from "react";
import { FaFacebookF, FaPhone } from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";
import { ImLinkedin2 } from "react-icons/im";
import { IoLogoInstagram, IoLogoTwitter, IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import ckllogo2 from "../assets/ckllogo2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[url('../assets/bg-footer.png')] bg-[#292d39] bg-blend-overlay">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 place-items-center">
          <div className="w-full bg-[#21232d] p-8 rounded-lg divide-y-[1px] divide-zinc-500/25">
            <Link to="/" className="block mb-6 ">
              <p className="text-white text-xl">College Ka Ladka</p>
            </Link>
            <div className="space-y-4 text-zinc-200 pt-4">
              <p className="flex items-center gap-3">
                <HiMapPin className="text-[#ff6400] flex-shrink-0" />
                <span>Bhopal Madhya Pradesh</span>
              </p>
              <p className="flex items-center gap-3">
                <IoMail className="text-[#ff6400] flex-shrink-0" />
                <span>ankitsahu00001@gmail.com</span>
              </p>
              <p className="flex items-center gap-3">
                <FaPhone className="text-[#ff6400] rotate-90 flex-shrink-0" />
                <span>(+91) 97133885080</span>
              </p>
            </div>
          </div>

          <div className="w-full md:flex md:flex-col md:items-center md:justify-center px-4 md:px-0">
            <h2 className="text-zinc-200 text-lg font-semibold mb-4">
              Other Pages
            </h2>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "Contact", path: "/contact" },
              ].map(({ name, path }) => (
                <li key={name} className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-[#ff6400]" />
                  <Link
                   onClick={() => window.scrollTo(0, 0)}
                    to={path} // Use the path variable here
                    className="text-zinc-300 hover:text-[#ff6400] transition-colors duration-200"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:flex md:flex-col md:items-center md:justify-center px-4 md:px-0">
            <h2 className="text-zinc-200 text-lg font-semibold mb-4">
              Other Links
            </h2>
            <ul className="space-y-2">
              {[
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms Of Service", path: "/terms-of-service" },
                { name: "Disclaimer", path: "/disclaimer" },
                { name: "Credits", path: "/credits" },
                { name: "FAQ", path: "/faq" },
              ].map(({ name, path }) => (
                <li key={name} className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-[#ff6400]" />
                  <Link  onClick={() => window.scrollTo(0, 0)}
                    to={path} // Use the path variable here
                    className="text-zinc-300 hover:text-[#ff6400] transition-colors duration-200"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-zinc-200 text-lg font-semibold mb-4">
                Newsletter
              </h2>
              <form className="relative max-w-lg">
                <input
                  className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm"
                  type="email"
                  placeholder="Your Email Address"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-[#3b3b3b] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#ff6400] transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-zinc-200 text-lg font-semibold mb-4">
                Get the latest news & updates
              </h2>
              <div className="flex space-x-4">
                {[FaFacebookF, IoLogoTwitter, IoLogoInstagram, ImLinkedin2].map(
                  (Icon, index) => (
                    <Link
                      key={index}
                     
                      to="#"
                      className="text-zinc-100 bg-[#ff6400] p-2 rounded-full hover:bg-[#28214c] transition-colors duration-200"
                    >
                      <Icon size={24} />
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-500/35">
          <div className="flex flex-col md:flex-row justify-between items-center text-zinc-200 text-sm">
            <p>College Ka Ladka Editing Agency</p>
            <p>&copy; {currentYear} All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
