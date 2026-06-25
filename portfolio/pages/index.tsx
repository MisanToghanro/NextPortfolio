import HomePage from "./Hero"
import ServicesPage from "./Services"
import Contact from "./Contact"
import AboutPage from "./About"
import Link from "next/link"


const indexPage = () => {

return(
  <main>

    <section id="home"> 
        <HomePage/>
    </section>

  
    <section id="about">
      <AboutPage/>
    </section>


    <section id="services">
      <ServicesPage/>
    </section>

    <section className="mt-5 text-center">
          <p className=" mb-4">Interested in collaborating or hiring me for your next project?</p>
         <Link href="/Contact"  className="bg-[#5648B7] text-white px-6 py-2 rounded-lg hover:bg-[#453aa2] transition service-contact">
         Let’s Work Together
          </Link>
   </section>

   <section id="contact">
    <Contact/>
   </section>
  </main>
)
}

export default indexPage

