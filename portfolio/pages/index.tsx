import HomePage from "./Hero"
import ServicesPage from "./Services"
import Contact from "./Contact"
import WorkPage from "./Work"
import AboutPage from "./About"

const indexPage = () => {

return(
  <main>
    <HomePage/>

    <section>
      <AboutPage/>
    </section>


    <section>
      <ServicesPage/>
    </section>

   <section>
     <WorkPage/>

   </section>

   <section>
    <Contact/>
   </section>
  </main>
)
}

export default indexPage

