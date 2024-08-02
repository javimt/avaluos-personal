import logo1 from "../assets/logo1.jpeg"
import Li from "./Li"
import { GiVibratingSmartphone } from "react-icons/gi";
import Styles from './navbar.module.css'
import { BsMenuButtonWideFill } from "react-icons/bs";
import { useState } from "react";

export const NavBar = () => {
    const [show, setShow] = useState(false)
    return (
        <div className="mx-auto xl:px-52 md:px-20 px-2 xl:py-2 md:py-2 py-2  shadow-md relative">
           <div className="flex justify-between items-center relative" >
            <section className={`${Styles.logo} flex rounded-full overflow-hidden p-2 bg-primary opacity-0`}>
                <img className="size-[60px] " src={logo1} alt="" />
            </section>
            <section className={`md:flex hidden`}>
                <ul className="flex xl:gap-8 md:gap-5 gap-2">
                    <Li>Home</Li>
                    <Li>About</Li>
                    <Li>Services</Li>
                    <Li>Queries</Li>
                    <Li>Contact</Li>
                </ul>
            </section>
            {   
                show &&
                <section className={`block  md:hidden absolute z-[1000] bg-white top-10 w-svw -translate-x-2 translate-y-10 `}>
                <ul className="flex flex-col items-center xl:gap-8 md:gap-5 gap-2  ">
                    <li className="text-primary font-popins font-semibold hover:bg-secondary hover:text-white w-full text-center p-2">Home</li>
                    <li className="text-primary font-popins font-semibold hover:bg-secondary hover:text-white w-full text-center p-2">About</li>
                    <li className="text-primary font-popins font-semibold hover:bg-secondary hover:text-white w-full text-center p-2">Services</li>
                    <li className="text-primary font-popins font-semibold hover:bg-secondary hover:text-white w-full text-center p-2">Queries</li>
                    <li className="text-primary font-popins font-semibold hover:bg-secondary hover:text-white w-full text-center p-2">Contact</li>
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
                <BsMenuButtonWideFill className="text-[35px] mr-5 text-primary cursor-pointer hover:text-secondary"/>
            </section>

           </div>
            
        </div>
    )
}
