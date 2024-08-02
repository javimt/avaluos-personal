import GridContainer from "../Global/containers/GridContainer";
import Container from "../Global/containers/Container";
import Styles from './about.module.css'
import { MdBusinessCenter } from "react-icons/md";

export default function About() {
    return (
        <Container>
            <div className="flex gap-3 justify-center items-center h-[300px] ">

                <div className="w-[150px] rounded-lg  h-[10px] bg-primary" />
                <MdBusinessCenter className="text-primary text-[70px]" />
                <div className="w-[150px] rounded-lg h-[10px] bg-primary" />
            </div>
            <GridContainer>
                <section className="flex justify-center items-center">
                    <div className={`${Styles.imageSection} size-[400px] bg-cover  bg-center rounded-full relative`} style={{ backgroundImage: `url(${'https://pqs.pe/wp-content/uploads/2015/10/pqs_emprende-800x386.jpg'})` }}>
                        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-black/40"></div>
                    </div>
                </section>
                {/* ---------- */}
                <section >
                    <h1 className="text-primary text-4xl my-2 font-popins">Nacional de Avalùos</h1>
                    <h2 className="text-secondary text-2xl font-popins">Avaluos en toda Medellìn</h2>
                    <p className="text-gray-400 text-[16px] mt-2 xl:w-2/3 font-popins font-[300]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam impedit quisquam rerum voluptatum totam dignissimos corporis laudantium nostrum deleniti iste, odio officia omnis nobis cumque ut doloribus? Minus facere mollitia error laborum ab recusandae, illum repellat quia, consequatur provident delectus cupiditate, qui enim dolorem. Ab vero dicta quod ipsam ea reprehenderit exercitationem mollitia fuga veniam debitis, modi atque distinctio eveniet.</p>
                    <p className="text-gray-400 text-[16px] mt-2 xl:w-2/3 font-popins font-[300]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam impedit quisquam rerum voluptatum totam dignissimos corporis laudantium nostrum deleniti iste, odio officia omnis nobis cumque ut doloribus? Minus facere mollitia error laborum ab recusandae, illum repellat quia, consequatur provident delectus cupiditate, qui enim dolorem. Ab vero dicta quod ipsam ea reprehenderit exercitationem mollitia fuga veniam debitis, modi atque distinctio eveniet.</p>
                </section>
            </GridContainer>
        </Container>
    )
}


