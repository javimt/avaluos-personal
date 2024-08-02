import Styles from "./banner.module.css"

export default function SectionTwoBaner() {
    
  return (
    <section className="flex justify-center items-center h-full xl:w-[900px] py-5 px-3 md:px-10 xl:px-0 relative">
                        <div className={`${Styles.contact} xl:w-1/2 w-full md:h-4/5  backdrop-blur-3xl  py-12 rounded-[30px] opacity-0 shadow-2xl `}>
                            <form action="" className="h-full flex flex-col justify-center gap-2 items-center w-full px-10 font-sans">
                                <div className={` ${Styles.input} flex gap-4  w-full  opacity-0 pt-2 justify-center text-white font-sans text-3xl font-[500]`}>
                                    <h2 className="text-third">Obtene tu avaluo!</h2>
                                </div>
                                <div className={` ${Styles.input} flex flex-col gap-4 xl:pb-5 pt-2 xl:px-5 w-full  opacity-0 font-[400]`}>
                                    <input type="text"  placeholder="name here!" className=" rounded p-2 border text-xs font-popins" />
                                </div>
                                <div className={` ${Styles.input} flex flex-col gap-4 xl:p-5 w-full  opacity-0`}>
                                    <input type="email" placeholder="email here!" className="rounded p-2 border text-xs font-[400] font-popins" />
                                </div>
                                <div className={` ${Styles.input} flex flex-col gap-4 xl:p-5 w-full  opacity-0`}>
                                    <textarea className="rounded p-2 border text-xs font-[400] font-popins" placeholder="message here!" rows={5} ></textarea>
                                </div>
                                <div className={`${Styles.input} xl:p-5 flex justify-center items-center w-full translate-y-20 opacity-0`}>
                                    <button className="w-full bg-secondary text-white font-popins font-semibold p-2 rounded hover:bg-primary hover:text-third transition-all delay-200">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </section>
  )
}
