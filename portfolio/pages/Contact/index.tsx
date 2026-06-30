import {
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

import { motion } from "motion/react";




const container = {
  hidden:{},
  show:{
    transition:{
      staggerChildren:0.15
    }
  }
}

const item ={
  hidden:{
    opacity:0,
    y:20
  },
  show:{
    opacity:1,
    y:0
  }
}

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-[#41C9B9]/10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[#5648B7]/10 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
        initial={{opacity:0 ,y:40}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true, amount:0.3}}
        transition={{duration:0.7}}
         className="text-center mb-24">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#41C9B9]/30 bg-[#41C9B9]/10 px-5 py-2 text-sm font-medium text-[#41C9B9] mb-5">
            Let's Connect
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#5648B7]">
            Have an Idea?
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-500 leading-8">
            Whether you're looking for a frontend developer, want to discuss
            a project, or simply want to say hello, I'd love to hear from you.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
          initial={{opacity:0, x:-60}}
          whileInView={{opacity:1, x:0}}
          viewport={{once:true, amount:0.3}}
          transition={{duration:0.8}}
          >

            <h3 className="text-3xl font-bold text-[#5648B7] mb-6">
              Let's build something together.
            </h3>

            <p className="text-gray-600 leading-8 mb-10">
              I'm always interested in collaborating on meaningful
              projects, freelance opportunities, or discussing new ideas.
              If you think we'd make a great team, don't hesitate to reach
              out.
            </p>

            {/* Email Card */}
            <motion.div 
            whileHover={{
              y:-5,
              scale:1.02
            }}
            transition={{duration:0.25}}

            className="group flex items-center gap-5 rounded-2xl border border-[#41C9B9]/20 bg-white p-6 shadow-lg shadow-[#41C9B9]/10 ">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#41C9B9]/10 text-[#41C9B9]">
                <FaEnvelope size={24} />
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Email
                </p>

                <a
                  href="mailto:tmisan657@gmail.com"
                  className="font-semibold text-[#5648B7] hover:text-[#41C9B9]"
                >
                  tmisan657@gmail.com
                </a>
              </div>

            </motion.div>

            {/* Socials */}

            <div className="mt-10">

              <p className="text-gray-500 mb-5">
                Find me on
              </p>

              <div className="flex gap-5">

                <motion.a
               whileHover={{
                  y:-8,
                  scale:1.12,
                  rotate:-6
                }}
                whileTap={{
                  scale:0.95
                }}
                transition={{
                  type:"spring", stiffness:200
                }}
                  href="https://www.linkedin.com/in/misan-toghanro"
                  target="_blank"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#41C9B9]/20 bg-white text-[#5648B7] shadow-md hover:-translate-y-1 hover:bg-[#41C9B9] hover:text-white transition"
                >
                  <FaLinkedin />
                </motion.a>

                <motion.a
                whileHover={{
                  y:-8,
                  scale:1.12,
                  rotate:-6
                }}
                whileTap={{
                  scale:0.95
                }}
                transition={{
                  type:"spring", stiffness:200
                }}
                  href="https://x.com/MisanToghanro"
                  target="_blank"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#41C9B9]/20 bg-white text-[#5648B7] shadow-md hover:-translate-y-1 hover:bg-[#41C9B9] hover:text-white transition"
                >
                  <FaTwitter />
                </motion.a>

                <motion.a
              whileHover={{
                  y:-8,
                  scale:1.12,
                  rotate:-6
                }}
                whileTap={{
                  scale:0.95
                }}
                transition={{
                  type:"spring", stiffness:200
                }}
                  href="https://github.com/"
                  target="_blank"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#41C9B9]/20 bg-white text-[#5648B7] shadow-md hover:-translate-y-1 hover:bg-[#41C9B9] hover:text-white transition"
                >
                  <FaGithub />
                </motion.a>

              </div>

            </div>

          </motion.div>

          {/* Contact Form */}

          <motion.div 
          initial={{opacity:0, x:60}}
          whileInView={{opacity:1, x:0}}
          viewport={{once:true, amount:0.3}}
          transition={{duration:0.8}}
          className="rounded-3xl border border-[#41C9B9]/20 bg-white p-8 shadow-xl shadow-[#41C9B9]/10">

            <h3 className="text-2xl font-bold text-[#5648B7] mb-6">
              Send Me a Message
            </h3>

            <form
              action="https://formspree.io/f/xpwkabaw"
              method="POST"
              className="space-y-6"
            >

              <div>
                <label className="block mb-2 font-medium text-[#5648B7]">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-[#41C9B9] focus:ring-2 focus:ring-[#41C9B9]/20 outline-none transition"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-[#5648B7]">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-[#41C9B9] focus:ring-2 focus:ring-[#41C9B9]/20 outline-none transition"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-[#5648B7]">
                  Message
                </label>

                <textarea
                  rows={6}
                  name="message"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-[#41C9B9] focus:ring-2 focus:ring-[#41C9B9]/20 outline-none transition resize-none"
                />
              </div>

              <motion.button
                whileHover={{
                scale: 1.02,
                 y: -3,
                  }}
                 whileTap={{
                 scale: 0.98,
                   }}
                transition={{ type: "spring", stiffness: 300 }}
                type="submit"
                className="w-full rounded-xl bg-[#5648B7] py-3 font-semibold text-white transition  hover:bg-[#4637a5] flex justify-center gap-3 cursor-pointer"
              >
                Send Message 
                <span >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
                </span>
              </motion.button>

              <input
                type="hidden"
                name="_next"
                value="https://misandev.vercel.app/thankyou"
              />

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;