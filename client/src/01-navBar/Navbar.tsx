import logo1 from "../assets/logo1.jpeg"
import Li from "./Li"


export const NavBar = () => {
    return (
        <div className="mx-auto00 xl:px-52 md:px-20 px-2 xl:py-2 md:py-2 py-2  shadow-md">
           <div className="flex justify-between items-center">
            <div className="flex rounded-full overflow-hidden p-2 bg-primary">
                <img className="size-[60px] " src={logo1} alt="" />
            </div>
            <div>
                <ul className="flex xl:gap-8 md:gap-5 gap-2">
                    <Li>Home</Li>
                    <Li>About</Li>
                    <Li>Services</Li>
                    <Li>Queries</Li>
                    <Li>Contact</Li>
                </ul>
            </div>
            <div>

            </div>

           </div>
            
        </div>
    )
}
