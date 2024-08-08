import logo1 from "../assets/logo elegido.jpeg"
import Li from "./Li"
import { GiVibratingSmartphone } from "react-icons/gi";
import Styles from './navbar.module.css'
import { BsMenuButtonWideFill } from "react-icons/bs";
import { useState } from "react";
import useHandleScroll from "./hooks/useScroll";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { BsQuestionSquareFill } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";
import { HiChatBubbleLeftEllipsis } from "react-icons/hi2";

export const NavBar = () => {
    const [show, setShow] = useState(false)
    const { scrolling } = useHandleScroll()
    return (
        <div className="mx-auto xl:px-52 md:px-10 px-2 xl:py-2 md:py-2 py-2  shadow-md relative">
            <div className="flex justify-between items-center relative" >
                <section className={``}>
                    <img className="w-[250px]" src={logo1} alt="" />
                </section>
                {
                    !scrolling ?
                        <section className={`md:flex hidden`}>
                            <ul className="flex xl:gap-8 md:gap-5 gap-2">
                                <Li>{<div className="flex gap-1 justify-center items-center"><HiMiniBuildingOffice2 className="text-[18px] text-third" /> <p>Home</p></div>}</Li>
                                <Li>{<div className="flex gap-1 justify-center items-center"><BsQuestionSquareFill className="text-[18px] text-third" /> <p>Queries</p></div>}</Li>
                                <Li>{<div className="flex gap-1 justify-center items-center"><RiContactsFill className="text-[18px] text-third" /> <p>About</p></div>}</Li>
                                <Li>{<div className="flex gap-1 justify-center items-center"><HiChatBubbleLeftEllipsis className="text-[18px] text-third" /> <p>Contact</p></div>}</Li>
                            </ul>
                        </section>
                        :
                        <section className={`md:flex hidden fixed top-10 w-[500px] z-[1000] right-[calc(50%-250px)] p-2 backdrop-blur-3xl   justify-center rounded-2xl` }>
                            <ul className="flex xl:gap-8 md:gap-5 gap-2 text-white">
                                <Li color="white">{<div className="flex gap-1 justify-center items-center"><HiMiniBuildingOffice2 className="text-[18px] text-third" /> <p>Home</p></div>}</Li>
                                <Li color="white">{<div className="flex gap-1 justify-center items-center"><BsQuestionSquareFill className="text-[18px] text-third" /> <p>Queries</p></div>}</Li>
                                <Li color="white">{<div className="flex gap-1 justify-center items-center"><RiContactsFill className="text-[18px] text-third" /> <p>About</p></div>}</Li>
                                <Li color="white">{<div className="flex gap-1 justify-center items-center"><HiChatBubbleLeftEllipsis className="text-[18px] text-third" /> <p>Contact</p></div>}</Li>
                            </ul>
                        </section>
                }
                {
                    show &&
                    <section className={`block  md:hidden absolute z-[1000] bg-white top-4 w-svw -translate-x-2 translate-y-10 `}>
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
                    <BsMenuButtonWideFill className="text-[35px] mr-5 text-primary cursor-pointer hover:text-secondary" />
                </section>

            </div>

        </div>
    )
}
