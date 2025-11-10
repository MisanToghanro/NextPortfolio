import Link from "next/link"


const HomePage = () => {

  return(
  <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 mt-5">
    <img 
    src="/PortfolioPic.jpg" 
    alt="Profile picture" 
    className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full mb-6 shadow-lg shadow-blue-400 opacity-0 animate-fadeInUp"/>

    <h1 className="text-3xl font-bold mb-2 opacity-0 animate-fadeInUp [animation-delay:200ms]">Hello there 👋</h1>

     <p className="text-xl mb-4">I'm Misan</p>

     <p className="max-w-2xl text-left opacity-0 animate-fadeInUp [animation-delay:400ms]">
      I’m a frontend developer passionate about turning ideas into interactive, 
      visually engaging web experiences. 
      Combining creativity with technical precision, 
      I build responsive and user-friendly applications using modern tools like React and Next.js.
      What drives me is helping brands and business owners bring their visions to life through clean design and intuitive functionality.
      I believe great digital experiences shouldn’t just look good — they should make life easier, more enjoyable, and more accessible for users everywhere.</p>

        <div className="mt-6 flex flex-col md:flex-row gap-3 opacity-0 animate-fadeInUp [animation-delay:600ms]">
          <Link href="/About" className="text-white bg-blue-500 hover:bg-blue-600 hover:scale-105 px-6 py-2 rounded-md shadow-md">
          View My Work
          </Link>

          <Link href="/Contact" className="text-white bg-blue-500 hover:bg-blue-600 hover:scale-105 px-6 py-2 rounded-md shadow-md">
          Contact Me
          </Link>
        </div>


  </div>
  )
}

export default HomePage
