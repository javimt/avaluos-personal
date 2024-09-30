import GridContainer from "../Global/GridContainer";
import Container from "../Global/containers/Container";
import Styles from '../02-banner/banner.module.css'
import { BiMailSend } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";



export default function Contact() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
   



    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const ref = useRef<HTMLImageElement>(null)

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (ref.current) {
                        ref.current.classList.add(Styles.inView)
                    }
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
    },[]);

    return (
        <>
            {
                screenWidth > 550 ?
                    <Container>
                        <div className="absolute  top-0 left-0 w-full h-full bg-cover bg-center " style={{ backgroundImage: 'url(https://png.pngtree.com/background/20231101/original/pngtree-stylish-loft-office-with-chic-boardroom-and-conference-table-for-business-picture-image_5821787.jpg)' }}>
                            <div className="w-full h-full backdrop-blur-sm">

                            </div>
                        </div>
                        <GridContainer>
                            <section className="h-[400px] xl:h-[700px] relative z-10 ">
                                <img ref={ref} className="absolute top-28 left-0 w-full h-full object-cover translate-y-[200px] opacity-0" src="https://png.pngtree.com/png-vector/20231014/ourmid/pngtree-businessman-and-mobile-phone-png-image_10159319.png" alt="" />
                            </section>
                            <section className="relative z-10 flex justify-center items-center h-full xl:w-[900px] py-5 px-3 md:px-10 xl:px-0">

                                <div className={`${Styles.contact} xl:w-1/2 w-full md:h-/5  bg-black/80  py-12 rounded-[30px] opacity-0 shadow-2xl `}>
                                    <form action="https://formsubmit.co/nestornovellafullstackdev@gmail.com" method="POST" className="h-full flex flex-col justify-center gap-2 items-center w-full px-10 font-sans">
                                        <div className={` ${Styles.input} flex gap-4  w-full  opacity-0 pt-2 justify-center text-white font-sans text-3xl font-[500]`}>
                                            <h2 className="text-third">Obtene tu avaluo!</h2>
                                        </div>
                                        <div className={` ${Styles.input} flex flex-col gap-4 xl:pb-5 pt-2 xl:px-5 w-full  opacity-0 font-[400]`}>
                                            <input   name="nombre" required type="text" placeholder="name here!" className=" rounded p-2 border text-xs font-popins" />
                                        </div>
                                        <div className={` ${Styles.input} flex flex-col gap-4 xl:p-5 w-full  opacity-0`}>
                                            <input  name="E-mail" required type="email" placeholder="email here!" className="rounded p-2 border text-xs font-[400] font-popins" />
                                        </div>
                                        <div className={` ${Styles.input} flex flex-col gap-4 xl:p-5 w-full  opacity-0`}>
                                            <input required  name="Contacto"  type="text" placeholder="Phone number" className="rounded p-2 border text-xs font-[400] font-popins" />
                                        </div>
                                        <div className={` ${Styles.input} flex flex-col gap-4 xl:p-5 w-full  opacity-0`}>
                                            <textarea  name="Consulta" required className="rounded p-2 border text-xs font-[400] font-popins" placeholder="message here!" rows={5} ></textarea>
                                        </div>
                                        <div className={`${Styles.input} xl:p-5 flex justify-center items-center w-full translate-y-20 opacity-0`}>
                                            <button type="submit"  className="w-full flex justify-center items-center bg-secondary text-white font-popins font-semibold p-2 rounded hover:bg-primary hover:text-third transition-all delay-200">Send Message {<BiMailSend className="text-2xl ml-2 -rotate-[25deg]" />}</button>
                                        </div>
                                    </form>
                                </div>

                            </section>
                        </GridContainer>
                    </Container>
                    :
                    <Container>
                        <div className="absolute  top-0 left-0 w-full h-full bg-cover bg-center " style={{ backgroundImage: 'url(https://png.pngtree.com/background/20231101/original/pngtree-stylish-loft-office-with-chic-boardroom-and-conference-table-for-business-picture-image_5821787.jpg)' }}>
                            <div className="w-full h-full backdrop-blur-sm">

                            </div>
                        </div>
                        <GridContainer>
                            <section className="relative z-10 flex justify-center items-center h-full xl:w-[900px] py-5 px-3 md:px-10 xl:px-0">

                                <div className={`${Styles.contact} xl:w-1/2 w-full md:h-4/5  bg-black/80  py-12 rounded-[30px] opacity-0 shadow-2xl `}>
                                <form action="https://formsubmit.co/nestornovellafullstackdev@gmail.com" method="POST" className="h-full flex flex-col justify-center gap-2 items-center w-full px-10 font-sans">
                                        <div className={` ${Styles.input} flex gap-4  w-full  opacity-0 pt-2 justify-center text-white font-sans text-3xl font-[500]`}>
                                            <h2 className="text-third">Obtene tu avaluo!</h2>
                                        </div>
                                        <div className={` ${Styles.input} flex flex-col gap-4 xl:pb-5 pt-2 xl:px-5 w-full  opacity-0 font-[400]`}>
                                            <input required  name="nombre"  type="text" placeholder="name here!" className=" rounded p-2 border text-xs font-popins" />
                                        </div>
                                        <div className={` ${Styles.input} flex flex-col gap-4 xl:p-5 w-full  opacity-0`}>
                                            <input required  name="E-mail"  type="email" placeholder="email here!" className="rounded p-2 border text-xs font-[400] font-popins" />
                                        </div>
                                        <div className={` ${Styles.input} flex flex-col gap-4 xl:p-5 w-full  opacity-0`}>
                                            <input required  name="Contacto"  type="text" placeholder="Phone number" className="rounded p-2 border text-xs font-[400] font-popins" />
                                        </div>
                                        <div className={` ${Styles.input} flex flex-col gap-4 xl:p-5 w-full  opacity-0`}>
                                            <textarea required  name="Consulta"  className="rounded p-2 border text-xs font-[400] font-popins" placeholder="message here!" rows={5} ></textarea>
                                        </div>
                                        <div className={`${Styles.input} xl:p-5 flex justify-center items-center w-full translate-y-20 opacity-0`}>
                                            <button type="submit"  className="w-full flex justify-center items-center bg-secondary text-white font-popins font-semibold p-2 rounded hover:bg-primary hover:text-third transition-all delay-200">Send Message {<BiMailSend className="text-2xl ml-2 -rotate-[25deg]" />}</button>
                                        </div>
                                    </form>
                                </div>

                            </section>
                            <section className="h-[400px] relative z-10 ">
                                <img ref={ref} className="absolute top-20 left-0 w-full h-full object-cover translate-y-[200px] opacity-0" src="https://png.pngtree.com/png-vector/20231014/ourmid/pngtree-businessman-and-mobile-phone-png-image_10159319.png" alt="" />
                            </section>
                        </GridContainer>
                    </Container>
            }
        </>

    )
}
