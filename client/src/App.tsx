import { Route, Routes } from "react-router-dom";
import { NavBar } from "./01-navBar/Navbar";
import Banner from "./02-banner/Banner";
import Services from "./03-service/Services";
import Queries from "./04-queries/Queries";
import Footer from "./05-footer/Footer";




export default function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div>
          <NavBar />
          <Banner />
          <Services />
          <Queries />
          <Footer />
        </div>
      } />

    </Routes>
  )
}
