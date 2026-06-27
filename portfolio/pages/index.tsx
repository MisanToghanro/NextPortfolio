import HomePage from "./Hero"
import ServicesPage from "./Services"
import Contact from "./Contact"
import AboutPage from "./About"
import Carousel from "@/Components/MotionCarousel"



const indexPage = () => {

return(
  <main>

    <section id="home"> 
        <HomePage/>
        <Carousel/>
    </section>

  
    <section id="about">
      <AboutPage/>
    </section>


    <section id="services">
      <ServicesPage/>
    </section>

   <section id="contact">
    <Contact/>
   </section>
  </main>
)
}

export default indexPage

