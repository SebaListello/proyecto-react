import { ourbrands_1, ourbrands_2, ourbrands_3, ourbrands_4 } from '../../assets/ourBrands/index'
import {FaTruck, FaRegCreditCard, FaUndo} from 'react-icons/fa'
const ourbrands = [ourbrands_1, ourbrands_2, ourbrands_3, ourbrands_4]

export const OurBrands = () => {
  return (
    <div className='ourbrands__container container mx-auto w-full px-4 md:px-1'>

        <div className='grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {ourbrands.map((brand, i) => (
                <div key={i} className="ourbrands__card border-round rounded-lg max-w-[350px] transition duration-200 ease-in-out hover:scale-[1.05] shadow hover:shadow-lg outline-none border-none overflow-hidden"> 
                    <a href="#">
                        <img src={brand} alt="Marcas" />  
                    </a>
                </div>
            ))}
        </div>

        <div className="ourbrands__benefits w-full flex justify-center flex-wrap  my-[160px] items-stretch gap-[100px]">
            <div className="ourbrands__benefits-benefit flex flex-col text-center items-center justify-between">
                <FaTruck color='var(--clr-primary)' size={30}/>
                <h2 className='uppercase my-3 font-bold '>Envios gratis desde $19.99</h2>
                <a className="underline underline-offset-2 text-[#757575] hover:text-[#FD8526] transition duration-200 ease-in-out" href="#">Mas informacion</a>
            </div>
            <div className="ourbrands__benefits-benefit  flex flex-col text-center items-center justify-between">
                <FaRegCreditCard color='var(--clr-primary)' size={30}/>
                <h2 className='uppercase my-3 font-bold'>3 Cuotas sin interés ahora 6 y 12</h2>
                <a className="underline underline-offset-2 text-[#757575] hover:text-[#FD8526] transition duration-200 ease-in-out" href="#">Mas informacion</a>
            </div>
            <div className="ourbrands__benefits-benefit flex flex-col text-center items-center justify-between">
                <FaUndo color='var(--clr-primary)' size={28}/>
                <h2 className='uppercase my-3 font-bold'>Primer cambio gratis</h2>
                <a className="underline underline-offset-2 text-[#757575] hover:text-[#FD8526] transition duration-300 ease-in-out" href="#">Mas informacion</a>
            </div>
        </div>
        
    </div>
  )
}
