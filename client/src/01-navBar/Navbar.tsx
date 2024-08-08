import logo1 from "../assets/definitivo.jpeg"
import Li from "./Li"
import { GiVibratingSmartphone } from "react-icons/gi";
import Styles from './navbar.module.css'
import { BsMenuButtonWideFill } from "react-icons/bs";
import { useState } from "react";
import useHandleScroll from "./hooks/useScroll";
import { Link } from "react-scroll";

export const NavBar = () => {
  const [show, setShow] = useState(false)
  const { scrolling } = useHandleScroll()
  return (
    <div className="mx-auto xl:px-52 md:px-20 px-2 xl:py-2 md:py-2 py-2  shadow-md relative">
      <div className="flex justify-between items-center relative" >
        <img className="w-[250px]" src={logo1} alt="" />
        {
          !scrolling ?
            <section className={`md:flex hidden`}>
              <ul className="flex xl:gap-8 md:gap-5 gap-2 text-primary ">
                <li>
                  <Link activeClass="active" to="inicio" spy={true} smooth={true} offset={-70} duration={500}>Inicio</Link>
                </li>
                <li>
                  <Link activeClass="active" to="acercaDe" spy={true} smooth={true} offset={-70} duration={500}>Acerca de</Link>
                </li>
                <li>
                  <Link activeClass="active" to="servicios" spy={true} smooth={true} offset={-70} duration={500}>Services</Link>
                </li>
                <li>
                  <Link activeClass="active" to="preguntas" spy={true} smooth={true} offset={-70} duration={500}>Preguntas</Link>
                </li>
                <li>
                  <Link activeClass="active" to="contacto" spy={true} smooth={true} offset={-70} duration={500}>Contacto</Link>
                </li>
              </ul>
            </section>
            :
            <section className={`md:flex hidden fixed top-10 w-[500px] z-[1000] right-[calc(50%-250px)] p-2 backdrop-blur-3xl justify-center rounded-2xl`}>
              <ul className="flex xl:gap-8 md:gap-5 gap-2 text-white">
                <Li color="white"><Link activeClass="active" to="inicio" spy={true} smooth={true} offset={-70} duration={500}>Inicio</Link></Li>
                <Li color="white"><Link activeClass="active" to="acercaDe" spy={true} smooth={true} offset={-70} duration={500}>Acerca de</Link></Li>
                <Li color="white"><Link activeClass="active" to="servicios" spy={true} smooth={true} offset={-70} duration={500}>Services</Link></Li>
                <Li color="white"><Link activeClass="active" to="preguntas" spy={true} smooth={true} offset={-70} duration={500}>Preguntas</Link></Li>
                <Li color="white"><Link activeClass="active" to="contacto" spy={true} smooth={true} offset={-70} duration={500}>Contacto</Link></Li>
              </ul>
            </section>
        }
        {
          show &&
          <section className={`block  md:hidden absolute z-[1000] bg-white top-10 w-svw -translate-x-2 translate-y-10 `}>
            <ul className="flex flex-col items-center xl:gap-8 md:gap-5 gap-2  ">
              <li className="text-primary font-popins font-semibold hover:bg-secondary hover:text-white w-full text-center p-2">
                <Link activeClass="active" to="inicio" spy={true} smooth={true} offset={-70} duration={500}>Inicio</Link>
              </li>
              <li className="text-primary font-popins font-semibold hover:bg-secondary hover:text-white w-full text-center p-2">
                <Link activeClass="active" to="acercaDe" spy={true} smooth={true} offset={-70} duration={500}>Acerca de</Link>
              </li>
              <li className="text-primary font-popins font-semibold hover:bg-secondary hover:text-white w-full text-center p-2">
                <Link activeClass="active" to="servicios" spy={true} smooth={true} offset={-70} duration={500}>Services</Link>
              </li>
              <li className="text-primary font-popins font-semibold hover:bg-secondary hover:text-white w-full text-center p-2">
                <Link activeClass="active" to="preguntas" spy={true} smooth={true} offset={-70} duration={500}>Preguntas</Link>
              </li>
              <li className="text-primary font-popins font-semibold hover:bg-secondary hover:text-white w-full text-center p-2">
                <Link activeClass="active" to="contacto" spy={true} smooth={true} offset={-70} duration={500}>Contacto</Link>
              </li>
            </ul>
          </section>
        }
        <section className=" gap-2 justify-center items-center hidden md:flex ">
          <div className="">
            <GiVibratingSmartphone className="size-[30px] text-secondary animate-pulse" />
          </div>
          <div className="text-primary font-popins">
            +54 11 2542 0570
          </div>
        </section>
        <section className="md:hidden" onClick={() => setShow(!show)}>
          <BsMenuButtonWideFill className="text-[35px] mr-5 text-primary cursor-pointer hover:text-secondary" />
        </section>

      </div>

    </div>
  )
}
