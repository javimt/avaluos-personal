import Styles from "./banner.module.css"


export default function SectionOneBaner() {
  return (
    <section className="flex flex-col gap-2 justify-center items-center md:items-start  h-full w-full relative z-[200] text-start pt-16 md:py-2 px-5 ">
      <div className={`${Styles.title} text-white  font-semibold flex  translate-y-[20%] opacity-0 z-[200]  `} >
        <h1 className="text-[40px] m-0  text-center md:text-[70px] md:text-start font-popins">​Nacional de Avaluos</h1>
      </div>
      <div className={`${Styles.subTitle} text-third   flex  translate-y-[20%] opacity-0 z-[200] pb-2`}>
        <h2 className="text-[20px] md:text-[40px] m-0 text-center md:text-start font-popins">Avalúos en Medellín</h2>
      </div>
      <div className={`${Styles.barra} border-[4px] border-secondary w-[20%] md:my-4 rounded-lg opacity-0`}></div>
      <div>
        <p className={`${Styles.description} text-center xl:text-start text-white font-popins text-2xl opacity-0`}>Pedi tu avalúo rapido y con solo un click!</p>
      </div>
      <div className="flex justify-center xl:justify-start items-center w-full xl:py-5">
        <button className={`bg-secondary text-white px-8 py-4 mt-16 font-popins font-bold rounded-lg cursor-pointer hover:bg-primary hover:text-third transition-all delay-200  ${Styles.button} opacity-0 text-xl `}>Mas informacion</button>
      </div>
    </section>
  )
}
