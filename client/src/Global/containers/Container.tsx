
import React, { useRef, useEffect } from "react";
import Styles from './containers.module.css'

export default function Container({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                   if(ref.current){
                        ref.current.classList.add(Styles.inView)
                   }
                } else {
                    // if (ref.current) {
                    //   ref.current.classList.remove(Styles.inView); 
                    // }
                }
            });
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div ref={ref}  className="relative flex flex-col mx-auto xl:px-52 md:px-5 px-2 xl:py-20 md:py-12 py-10  h-full opacity-0 overflow-hidden">
            { children }
        </div>
    );
}
