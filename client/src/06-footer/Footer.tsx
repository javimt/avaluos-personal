import { FaHandsHelping } from "react-icons/fa";
import { TiSocialInstagram, TiSocialFacebook } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="h-full bg-black/90 text-white flex items-center justify-around">
      <div className="flex flex-col md:flex-row m-2">
        <p className="text-xs flex flex-wrap text-center items-center justify-center text-secondary"> 
          Copyright © 2024. By Alliance Developers&nbsp; <FaHandsHelping className="text-[#D2CB3C]"/>.&nbsp; All right reserved
        </p>
        <div className="flex ml-[200px] gap-5 text-white flex-col ">
          {/* <a href="">
            <TiSocialInstagram className="size-9 " />
          </a>
          <a href="">
            <TiSocialFacebook className=" size-9" />
          </a> */}
          <a href="https://api.whatsapp.com/send?phone=+573007754216&text=hola">
            <FaWhatsapp className="size-9 text-secondary " />
          </a>
        </div>
      </div>
    </footer>
  )
}
