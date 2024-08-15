import GridContainer from "../Global/containers/GridContainer";
import Container from "../Global/containers/Container";
import Styles from './about.module.css'
import { MdBusinessCenter } from "react-icons/md";

export default function About() {
    return (
       
        
        <Container>
            <div className="flex gap-3 justify-center items-center h-[100px] mb-20 ">
                <div className="w-[150px] rounded-lg  h-[10px] bg-primary" />
                <MdBusinessCenter className="text-primary text-[70px]" />
                <div className="w-[150px] rounded-lg h-[10px] bg-primary" />
            </div>
            <GridContainer>
                <section className="flex justify-center items-center">
                    <div className={`${Styles.imageSection} md:size-[450px] size-[300px] bg-cover  bg-center rounded-full relative`} style={{ backgroundImage: `url(${'https://pqs.pe/wp-content/uploads/2015/10/pqs_emprende-800x386.jpg'})` }}>
                        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-black/40"></div>
                    </div>
                </section>
                {/* ---------- */}
                <section >
                    <h1 className="text-primary text-4xl my-2 font-popins">Nacional de Avalùos</h1>
                    <h2 className="text-secondary text-2xl font-popins">Avaluos en toda Medellìn</h2>
                    <p className="text-gray-500 text-[16px] mt-2 xl:w-2/3 font-popins font-[400]">En Nacional de Avaluos, somos más que un servicio de avalúos; somos tus aliados en la toma de decisiones importantes sobre tu propiedad. Con una profunda experiencia en el mercado inmobiliario de Medellín y una pasión por lo que hacemos, nos dedicamos a ofrecerte valoraciones precisas y honestas que te proporcionen la tranquilidad de saber que estás obteniendo la información más confiable.</p>
                    <p className="text-gray-500 text-[16px] mt-2 xl:w-2/3 font-popins font-[400]">Nuestro equipo de expertos combina conocimiento técnico con un enfoque personalizado, entendiendo que cada propiedad tiene una historia y un valor único. Creemos en el poder de la transparencia y la confianza, y trabajamos contigo para ayudarte a entender el verdadero valor de tu inmueble, ya sea que estés comprando, vendiendo, o simplemente quieras conocer su valor actual.
Nos enorgullecemos de nuestro compromiso con la excelencia y nuestra capacidad para adaptarnos a las necesidades de nuestros clientes, brindando un servicio ágil y cercano que refleja la calidez y el profesionalismo que nos distingue.</p>
                </section>
            </GridContainer>
        </Container>
      
    )
}


