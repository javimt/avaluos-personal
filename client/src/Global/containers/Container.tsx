import { useRef } from "react";


export default function Container({ children }: { children: React.ReactNode }) {

    const ref = useRef(null)

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                //entry.target.classList.add("show");
                console.log(entry.target)
            } else {
                //entry.target.classList.remove("show");
                console.log(entry.target)
            }
        });
    })
    ref.current &&
    observer.observe(ref.current);

    return (
        <div ref={ref} className="relative flex flex-col mx-auto xl:px-52 md:px-20 px-2 xl:py-20 md:py-12 py-10  h-full">
            {children}
        </div>
    )
}



