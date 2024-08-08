
import { GrStatusGood } from "react-icons/gr";

export const servicesInfo = [
   
    {
        title: 'Que es un avaluo?',
        subtitle: 'Avaluos en toda Medellìn',
        description:'Un avalúo es como una radiografía del valor de una propiedad en un momento determinado. Cuando se realiza un avalúo, un experto analiza cada detalle del inmueble—su ubicación, su estado, y cómo está el mercado—para ayudarte a entender cuánto vale realmente. Es una herramienta esencial cuando estás pensando en comprar, vender, o incluso asegurar tu propiedad, porque te da una visión clara y confiable sobre su verdadero valor.', 
        image: 'https://dineroynegocios.mx/wp-content/uploads/2024/03/27-como-ser-un-emprendedor-exitoso-2-800x529-1.jpg',
        number: 1,
        inversed: false,
        child:<List items={['opcion 1', 'opcion 2', 'opcion 3']}/>
    },
    {
        title: 'Qué tipo de avalúos realizamos?',
        subtitle: 'Avaluos en toda Medellìn',
        description:'Realizamos avalúos personalizados para todo tipo de propiedades en Medellín y sus alrededores. Esto incluye desde viviendas, como casas y apartamentos, hasta propiedades comerciales e industriales. Ya sea que necesites un avalúo para vender, comprar, refinanciar, o simplemente para conocer el valor real de tu propiedad, nuestro equipo de expertos está aquí para ofrecerte un servicio preciso y confiable, adaptado a tus necesidades específicas.',
        image: 'https://i0.wp.com/accounter.co/cdn/2020/01/avaluo.jpg?fit=768%2C480&ssl=1',
        number: 2,
        inversed: true,
        child:<List items={['opcion 1', 'opcion 2', 'opcion 3']}/>
    },
    {
        title: 'Qué tipos de inmuebles avaluamos?',
        subtitle: 'Avaluos en toda Medellìn',
        description:'Avaluamos una amplia variedad de inmuebles para que puedas tener una visión clara y precisa del valor de tu propiedad, sea cual sea su naturaleza. Esto incluye:', 
        image: 'https://solucionesinmobiliariascol.com/wp-content/uploads/2021/07/avaluosinmobiliarios.jpg',
        number: 3,
        inversed: false,
        child:<></>
    }
    ,{
        title: 'Porque Nosotros?',
        subtitle: 'Avaluos en toda Medellìn',
        description:'Los Avalúos de propiedad raíz son en definición una estimación comercial del valor de un inmueble reflejado en cifras monetarias por medio de un dictamen técnico imparcial',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOD8UaooG5XIwWMAPY1y2PlCJ_uDBD4s4v5_ujIW9O7DOf3i_8oorhFAB_Io7Jx_uzYU&usqp=CAU',
        number: 4,
        inversed: true,
        child:<></>
        
    }
]
    


function List ({items}:{items:string[]}){



    return (
        
            <ul className="flex flex-col gap-2 items-start w-full md:px-8 py-5">
            {
                items && items.map((item) => (
                    <li className="flex   items-start justify-start gap-2  max-w-[700px] w-full ">
                        <GrStatusGood className="text-secondary"/>
                        <p className="text-primary font-popins font-[400] ">{item}</p>
    
                    </li>
                ))
            }
            </ul>
        
    )

}

