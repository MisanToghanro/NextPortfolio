
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

const Contact: React.FC = () =>{

return (
  <div className="min-h-screen flex flex-col items-center px-6 py-16 contact-container">

    {/* Intro */}
    <div className="max-w-2xl text-center animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4 text-[#5648B7]">Let’s Connect</h1>
      <p className="text-lg text-gray-700 intro">
        Whether you want to collaborate, bring an idea to life, or just say hi —
        I’d love to hear from you. Let’s build something meaningful together.
      </p>
    </div>

    {/* Contact Info Card */}
    <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg border border-[#41C9B9]/30 max-w-lg w-full text-center contact-info-card">
      <p className="text-gray-600 mb-6">You can reach me directly at:</p>

      <a
        href="mailto:tmisan657@gmail.com"
        className="text-[#5648B7] font-semibold hover:underline flex items-center justify-center gap-2 mb-6"
      >
        <FaEnvelope /> tmisan657@gmail.com
      </a>

      <p className="text-gray-600 mb-4">Or connect with me on:</p>

      <div className="flex items-center justify-center gap-6 text-xl">
        <a
          href="https://www.linkedin.com/in/misan-toghanro"
          target="_blank"
          className="hover:text-[#41C9B9] transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://x.com/MisanToghanro"
          target="_blank"
          className="hover:text-[#41C9B9] transition"
        >
          <FaTwitter />
        </a>
      </div>

      <p className="text-gray-400 text-sm mt-6">
        I usually reply within 24–48 hours.
      </p>
    </div>

    {/* Contact Form */}
    <form
      action="https://formspree.io/f/xpwkabaw"
      method="POST"
      className="max-w-md w-full shadow-lg rounded-2xl border border-[#41C9B9]/30 p-6 space-y-4 mt-12 bg-white "
    >
      <h2 className="font-semibold mb-3 text-xl text-[#5648B7]">
        Leave a message
      </h2>

      <div className="flex flex-col text-left">
        <label htmlFor="name" className="font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="border bg-gray-100 rounded-md px-3 py-2 transition focus:outline-none focus:ring-2 focus:ring-[#41C9B9]"
        />
      </div>

      <div className="flex flex-col text-left">
        <label htmlFor="email" className="font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="border bg-gray-100 rounded-md px-3 py-2 transition focus:outline-none focus:ring-2 focus:ring-[#41C9B9]"
        />
      </div>

      <div className="flex flex-col text-left">
        <label htmlFor="message" className="font-medium mb-1">Message</label>
        <textarea
          name="message"
          id="message"
          rows={5}
          required
          className="border bg-gray-100 rounded-md px-3 py-2 transition focus:outline-none focus:ring-2 focus:ring-[#41C9B9]"
        />
      </div>

      <button
        type="submit"
        className="bg-[#5648B7] text-white font-medium px-6 py-2 rounded-md hover:bg-[#4637a5] transition w-full cursor-pointer"
      >
        Send Message
      </button>

      <input type="hidden" name="_next" value="https://misandev.vercel.app/thankyou" />
    </form>

  </div>
);

}

export default Contact;