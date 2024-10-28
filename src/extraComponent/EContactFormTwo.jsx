import { Phone } from "lucide-react";
import React,{useState} from "react";
import { LuMail } from "react-icons/lu";
import Button from "./Button";
import { Motion } from "./Motion";
import { H3 } from "./typographyh3";
import { H4 } from "./typographyh4";
import { P } from "./typographypara";
import MaxWidthWrapper from "./MaxWidthWrapper";
import emailjs from '@emailjs/browser';
import { set } from "date-fns";

const EContactFormTwo = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICEID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATEID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLICKEY;

  const templateParams = {
    from_name: name,
    from_email: email,
    projectType: projectType,
    phone: phone,
    to_name: "CKL Empire Agency", 
    message: message,
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        alert("SUCCESS!", response.status, response.text);
        setName("");
        setEmail("");
        setProjectType("");
        setPhone("");
        setMessage("");
      },
    ).catch(
      (error) => {
        alert("FAILED...", error);
      }
    );
  
    
  }
  return (
    <MaxWidthWrapper className="py-16 px-0 overflow-auto">
      <div className="mx-auto max-w-screen-xl p-8 sm:px-6 lg:px-8 lg:pr-32  rounded-xl border-[1.6px] border-zinc-300/10">
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="rounded-lg p-4 lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit} action="#" className="space-y-4">
              <Motion direction="left">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      className="w-full bg-[#e1e1e2] rounded-lg border-[1.6px] border-zinc-300/10 px-6 py-4 text-base text-zinc-900"
                      placeholder="Your Name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id="name"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="text">
                      Project Type
                    </label>
                    <input
                      className="w-full bg-[#e1e1e2] rounded-lg border-[1.6px] border-zinc-300/10 px-6 py-4 text-base text-zinc-900"
                      placeholder="Project Type"
                      type="text"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      id="text"
                    />
                  </div>
                </div>
              </Motion>

              <Motion direction="left">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full bg-[#e1e1e2] rounded-lg border-[1.6px] border-zinc-300/10 px-6 py-4 text-base text-zinc-900"
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full bg-[#e1e1e2] rounded-lg border-[1.6px] border-zinc-300/10 px-6 py-4 text-base text-zinc-900"
                      placeholder="Phone"
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      id="phone"
                    />
                  </div>
                </div>
              </Motion>

              <Motion direction="left">
                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full bg-[#e1e1e2] rounded-lg border-[1.6px] border-zinc-300/10 px-6 py-4 text-base text-zinc-900"
                    placeholder="Tell us about your project"
                    rows="8"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                  ></textarea>
                </div>
              </Motion>
              <div className="mt-10">
                <Motion direction="left">
                  <Button
                    bg
                    type="submit"
            
                    className="w-full bg-[#908ce1] transition-all hover:bg-[#7f7bcd] rounded-xl px-10 py-4 flex items-center justify-center text-wrap"
                  >
                    <span className="capitalize">Send Message</span>
                  </Button>
                </Motion>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full flex-1 lg:col-span-2 lg:py-12">
            <Motion direction="right">
              <div className="inline-flex items-center justify-center py-1 transition ease-out text-orange-500 hover:duration-300 mb-3 uppercase tracking-wide">
                <span className="text-xl tracking-wider">Get In Touch</span>
              </div>
            </Motion>
            <Motion direction="right">
              <H3 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-primary">
                Let's discuss your next big project
              </H3>
            </Motion>
            <Motion
              direction="right"
              className="border-b-[1px] border-zinc-200/20 pb-6"
            >
              <P className="text-zinc-400 font-semibold md:text-xl">
                Whether you're planning a creative campaign or need top-notch video content, we're here to help.
              </P>
            </Motion>
            <Motion direction="right" className="w-full">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                <div className="flex items-center gap-4">
                  <span className="p-2 rounded-xl bg-[#65cdaa]">
                    <LuMail className="text-zinc-200" size={24} />
                  </span>
                  <div>
                    <H4 className="text-lg font-bold text-primary tracking-tight sm:text-xl mb-1">
                      Our Email
                    </H4>
                    <P className="text-zinc-600 md:text-base">contact@  collagekaladka.com</P>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="p-2 rounded-xl bg-[#908ce1]">
                    <Phone className="text-zinc-200 rotate-90" size={24} />
                  </span>
                  <div>
                    <H4 className="text-lg font-bold text-primary tracking-tight sm:text-xl mb-1">
                      Our Phone
                    </H4>
                    <P className="text-zinc-600 md:text-base">
                      (+91) 9713385080
                    </P>
                  </div>
                </div>
              </div>
            </Motion>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default EContactFormTwo;
