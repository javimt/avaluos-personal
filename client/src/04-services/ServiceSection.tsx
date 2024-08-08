import React from "react";
import GridContainer from "../Global/containers/GridContainer";
import Container from "../Global/containers/Container";
import Styles from './services.module.css'


export default function ServiceSection({ image, title, subtitle, description, number, inversed, children }: { image: string, title: string, subtitle: string, description: string, number: number, inversed: boolean, children?: React.ReactNode }) {
    return (
        <Container>

            {
                inversed ?
                    <GridContainer>
                        <section className="flex justify-center items-center   ">
                            <div className={`${Styles.imageSection} md:size-[450px] size-[300px] bg-cover  bg-center rounded-full relative`} style={{ backgroundImage: `url(${image})` }}>
                                <div className="absolute top-0 left-0 w-full h-full rounded-full bg-black/40"></div>
                            </div>
                        </section>
                        {/* ---------- */}
                        <section >
                            <div className="">
                                <h1 className="text-primary text-[50px] my-2 font-popins">{"#" + number}</h1>
                            </div>
                            <div className="max-w-[700px]">
                                <h1 className="text-primary text-4xl my-2 font-popins">{title}</h1>
                                <h2 className="text-secondary text-2xl font-popins">{subtitle}</h2>
                                <p className="text-primary text-[16px] mt-2 xl:w-2/3 font-popins font-[300]">{description}</p>
                                {children}
                            </div>
                        </section>
                    </GridContainer>
                    :
                    <GridContainer>
                        <section className="flex flex-col items-end" >
                            <div className="flex flex-col max-w-[700px]">
                                <div className=" ">
                                    <h1 className="text-gray-400 text-[50px] my-2 font-popins">{"#" + number}</h1>
                                </div>
                                <h1 className="text-primary text-4xl my-2 font-popins">{title}</h1>
                                <h2 className="text-secondary text-2xl font-popins">{subtitle}</h2>
                                <p className="text-primary text-[16px] mt-2 xl:w-2/3 font-popins font-[300]">{description}</p>
                            </div>
                            {children}
                        </section>
                        {/* ---------- */}
                        <section className="flex  items-center justify-center md:justify-start ">
                            <div className={`${Styles.imageSection} md:size-[450px]  size-[300px] bg-cover  bg-center rounded-full relative`} style={{ backgroundImage: `url(${image})` }}>
                                <div className="absolute top-0 left-0 w-full h-full rounded-full bg-black/40"></div>
                            </div>
                        </section>
                    </GridContainer>
            }
        </Container>
    )
}
