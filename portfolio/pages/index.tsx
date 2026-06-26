import HomePage from "./Hero"
import ServicesPage from "./Services"
import Contact from "./Contact"
import AboutPage from "./About"



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

   <section id="contact">
    <Contact/>
   </section>
  </main>
)
}

export default indexPage

