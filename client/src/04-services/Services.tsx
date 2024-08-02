
import ServiceSection from "./ServiceSection";
import { servicesInfo } from "./servicesInfo";
import { HiInformationCircle } from "react-icons/hi";
import { useState, useEffect } from 'react';

export default function Services() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <section className="flex gap-3 justify-center items-center h-[300px]">
        <div className="w-[150px] rounded-lg  h-[10px] bg-third" />
        <HiInformationCircle className="text-third text-[70px]" />
        <div className="w-[150px] rounded-lg h-[10px] bg-third" />
      </section>
      {servicesInfo.map((item, index) => (
        <div key={index}>
          <section>
            <ServiceSection 
              title={item.title} 
              subtitle={item.subtitle} 
              description={item.description} 
              image={item.image} 
              number={item.number} 
              inversed={screenWidth < 450 ? true : item.inversed} 
            />
          </section>
        </div>
      ))}
    </div>
  );
}
