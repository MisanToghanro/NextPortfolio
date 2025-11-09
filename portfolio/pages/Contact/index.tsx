
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

const Contact: React.FC = () =>{

    return(
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16">

          {/*intro*/}
            <div className="max-w-2xl">
                <h1 className="text-3xl font-bold mb-4">Lets Connect</h1>
                <p className="text-lg text-gray-700">
          Whether you’re looking to collaborate, need help bringing your idea to life, 
          or just want to say hi — I’d love to hear from you!  
          Let’s build something meaningful together.
                </p>
            </div>

            {/*contact info*/}
            <div className="flex flex-col justify-center items-center mt-10 max-w-xl">
                
                <p className="text-gray-600 mb-5">You can reach my directly at:</p>

                <a href="mailto:tmisan657@gmail.com" className="text-blue-600 font-semibold hover:underline flex items-center gap-2 mb-5">
                    <FaEnvelope />tmisan657@gmail.com 
                </a>
               
                <p className="mb-5 ">Or through:</p>

                 <a href="https://www.linkedin.com/in/misan-toghanro" target="_blank" className="hover:text-blue-600 transition flex items-center gap-2" >
                    Linkedin <FaLinkedin />
                </a> 
            </div>

            {/* Contact Form */}
            <form
            action="https://formspree.io/f/xpwkabaw"
            method="POST"
            className="max-w-md w-full shadow-lg shadow-blue-400 rounded-md p-6 space-y-4 mt-10">

                <h2 className="font-semibold mb-3 text-xl">Leave a message</h2>

                <div className="flex flex-col">
                    <label htmlFor="name" className="font-medium mb-1">Name</label>
                    <input 
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="border bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 px-3 py-2"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="font-medium mb-1">Email</label>
                    <input 
                    type="email"
                    name="email"
                    id="email"
                    required
                     className="border bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 px-3 py-2"
                    />
                </div>
                
                <div className="flex flex-col text-left">
                <label htmlFor="message" className="font-medium mb-1">Message</label>
                <textarea
                 name="message"
                 id="message"
                 rows={5}
                required
                 className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>        
                 </div>

                 <button
                  type="submit"
                   className="bg-blue-600 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer ">
                    Send Message
                  </button>

                  <input type="hidden" name="_next" value="https://your-portfolio.vercel.app/thankyou" />

            </form>
            
        </div>
    )
}

export default Contact;