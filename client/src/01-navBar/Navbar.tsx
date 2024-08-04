import logo1 from "../assets/logo nav.jpeg"
import Li from "./Li"
import { GiVibratingSmartphone } from "react-icons/gi";
import Styles from './navbar.module.css'
import { BsMenuButtonWideFill } from "react-icons/bs";
import { useState } from "react";
import {Link} from "react-scroll";

export const NavBar = () => {
  const [show, setShow] = useState(false)
  return (
    <div className="mx-auto xl:px-52 md:px-20 px-2 xl:py-2 md:py-2 py-2  shadow-md relative">
      <div className="flex justify-between items-center relative" >
        <section className={`${Styles.logo} flex overflow-hidden p-2 opacity-0`}>
          <img className="size-[100px] w-[230px] h-[50px]" src={logo1} alt="" />
        </section>
        <section className={`md:flex hidden`}>
          <ul className="flex xl:gap-8 md:gap-5 gap-2">
            <li>
              <Link to="inicio">Inicio</Link> 
            </li>
            <li>
              <Link to="acercaDe">Acerca de</Link>
            </li>
            <li>
              <Link to="servicios" >Services</Link>
            </li>
            <li>
              <Link to="preguntas">Preguntas</Link>
            </li>
            <li>
              <Link to="contacto">Contacto</Link>
            </li>
          </ul>
        </section>
        {
          show &&
          <section className={`block  md:hidden absolute z-[1000] bg-white top-10 w-svw -translate-x-2 translate-y-10 `}>
            <ul className="flex flex-col items-center xl:gap-8 md:gap-5 gap-2  ">
              <li className="text-primary font-popins font-semibold hover:bg-secondary hover:text-white w-full text-center p-2">Inicio</li>
              <li className="text-primary font-popins font-semibold hover:bg-secondary hover:text-white w-full text-center p-2">Acerca de</li>
              <li className="text-primary font-popins font-semibold hover:bg-secondary hover:text-white w-full text-center p-2">Servicios</li>
              <li className="text-primary font-popins font-semibold hover:bg-secondary hover:text-white w-full text-center p-2">Consultas</li>
              <li className="text-primary font-popins font-semibold hover:bg-secondary hover:text-white w-full text-center p-2">Contacto</li>
            </ul>
          </section>
        }
        <section className=" gap-2 justify-center items-center hidden md:flex ">
          <div className="">
            <GiVibratingSmartphone className="size-[30px] text-secondary animate-pulse" />
          </div>
          <div className="text-primary font-popins">
            +57 300 7754216
          </div>
        </section>
        <section className="md:hidden" onClick={() => setShow(!show)}>
          <BsMenuButtonWideFill className="text-[35px] mr-5 text-primary cursor-pointer hover:text-secondary" />
        </section>

      </div>

    </div>
  )
}
