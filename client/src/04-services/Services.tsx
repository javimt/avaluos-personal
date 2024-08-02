
import ServiceSection from "./ServiceSection";
import { servicesInfo } from "./servicesInfo";
import { HiInformationCircle } from "react-icons/hi";

export default function Services() {
    return (
        <div>
            <section className="flex gap-3 justify-center items-center h-[300px]">
                <div className="w-[150px] rounded-lg  h-[10px] bg-third" />
                <HiInformationCircle className="text-third text-[70px]" />
                <div className="w-[150px] rounded-lg h-[10px] bg-third" />
            </section>
            {
                servicesInfo.map((item, index) => {
                    return (
                        <div>

                            <section>
                                <ServiceSection key={index} title={item.title} subtitle={item.subtitle} description={item.description} image={item.image} number={item.number} inversed={item.inversed} />
                            </section>
                        </div>
                    )
                })
            }
        </div>
    )
}
