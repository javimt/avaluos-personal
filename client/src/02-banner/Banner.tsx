import SectionOneBaner from "./SectionOneBaner"
import SectionTwoBaner from "./SectionTwoBaner"

export default function Banner() {
    return (
        <div>

            <div className="w-[100vw] h-[calc(100vh-100px)] relative mt-100px   xl:h-[700px] bg-no-repeat md:bg-cover md:bg-center bg-top  overflow-hidden shadow-2xl" style={{ backgroundImage: "url(https://www.lamudi.com.mx/journal/wp-content//uploads/2023/07/house-investments-elements-assortment-1024x683.jpg)" }}>
                <div className={` absolute top-0 left-0 w-full h-full bg-black/70 `}></div>
                <div className="relative mx-auto xl:px-52 md:px-20  grid xl:grid-cols-2 h-full" >
                    <SectionOneBaner/>
                    <SectionTwoBaner/>
                </div>
            </div>
        </div>
    )
}
