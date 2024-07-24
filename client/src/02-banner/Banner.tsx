import Styles from "./banner.module.css"

export default function Banner() {
    return (
        <div>

            <div className="w-[100vw] relative   h-[700px] bg-no-repeat bg-cover bg-center overflow-hidden shadow-2xl" style={{ backgroundImage: "url(https://www.lamudi.com.mx/journal/wp-content//uploads/2023/07/house-investments-elements-assortment-1024x683.jpg)" }}>
                <div className={`${Styles.filter} absolute top-0 left-0 w-full h-full bg-primary opacity-50 translate-x-full`}></div>
                <div className={`${Styles.filter2} absolute top-0 left-0 w-full h-full bg-secondary opacity-50 `}></div>
                <div className={`${''} absolute top-0 left-0 w-full h-full bg-black/70 `}></div>

                <div className="grid xl:grid-cols-2 h-full">
                    <section className="flex justify-center">

                    </section>
                    <section className="flex justify-center items-center h-full px-5 md:px-10 xl:px-0 relative">
                        <div className={`${Styles.contact} xl:w-1/2 w-full h-4/5  backdrop-blur-xl border-[2px] border-secondary rounded-lg opacity-0 shadow-2xl`}>
                            <form action="" className="h-full flex flex-col justify-center gap-2 items-center w-full px-10">
                                <div className={` ${Styles.input} flex gap-4  w-full text-xl opacity-0 pt-2 justify-center text-white`}>
                                    <h2>Obtene tu avaluo!</h2>
                                </div>
                                <div className={` ${Styles.input} flex flex-col gap-4 pb-5 pt-2 px-5 w-full  opacity-0`}>
                                    <input type="text" placeholder="name here!" className="rounded p-2 border text-xs " />
                                </div>
                                <div className={` ${Styles.input} flex flex-col gap-4 p-5 w-full  opacity-0`}>
                                    <input type="email" placeholder="email here!" className="rounded p-2 border text-xs" />
                                </div>
                                <div className={` ${Styles.input} flex flex-col gap-4 p-5 w-full  opacity-0`}>
                                    <textarea className="rounded p-2 border text-xs" placeholder="message here!" rows={5}></textarea>
                                </div>
                                <div className={`${Styles.input} p-5 flex justify-center items-center w-full translate-y-20 opacity-0`}>
                                    <button className="w-full bg-secondary text-white font-semibold p-2 rounded hover:bg-primary hover:text-third transition-all delay-200">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
