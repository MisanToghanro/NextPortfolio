import Link from "next/link"


const HomePage = () => {

  return(
  <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 mt-5 gap-10">
    
    <img 
    src="/PortfolioPic.jpg" 
    alt="Profile picture" 
    className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full  shadow-lg shadow-blue-400 opacity-0 animate-fadeInUp"/>

    <div className="flex flex-col space-y-6 items-center md:items-start max-w-xl">
      <h1 className="text-4xl font-bold mb-2 opacity-0 animate-fadeInUp [animation-delay:200ms]">Hello there 👋</h1>

     <p className="text-2xl mb-4 font-semibold">I'm Misan</p>

     
      <p className="max-w-xl  opacity-0 animate-fadeInUp [animation-delay:400ms] mb-3">
      A Frontend Developer focused on building clean, modern websites with React, Next.js, and Tailwind.
      I learn, build, and share my journey one project at a time. 
      If you're a founder or small business owner,
       I can help you improve your online presence.
      </p>
       
          <Link href="/Contact" className="text-white bg-blue-500 hover:bg-blue-600 hover:scale-105 px-6 py-2 rounded-md shadow-md">
          Lets Connect
          </Link>
      

    
        <div className=" flex flex-col md:flex-row  items-center   justify-center gap-3 opacity-0 animate-fadeInUp [animation-delay:600ms]">

          <Link href="/About" className=" border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-500 hover:text-white transition">
          View My Work
          </Link>

          <Link href="https://drive.google.com/file/d/1QurSm5JfXjNRetZPewsM_zWGw70JJTMe/view?usp=sharing" target="blank"  className="border border-gray-400 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-100 transition">📄 My Resume</Link>
        </div>

    </div>
    
  </section>
  )
}

export default HomePage
