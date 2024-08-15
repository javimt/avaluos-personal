//import { Route, Routes } from "react-router-dom";
import { NavBar } from "./src/01-navBar/Navbar";
import Banner from "./src/02-banner/Banner";
import Services from "./src/04-services/Services";
import Footer from "./src/06-footer/Footer";
import About from "./src/03-about/About";
import Contact from "./src/05-contact/Contacto";

export default function App() {

  return (


    <div>
      <NavBar />
      <section id="inicio">
        <Banner />
      </section>
      <section id="acercaDe">
        <About />
      </section>
      <section id="servicios">
        <Services />
      </section>
      <section id="preguntas">
        <Contact />
      </section>
      <Footer />
    </div>



  )
}
