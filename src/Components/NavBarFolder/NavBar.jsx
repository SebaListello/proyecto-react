import { useState } from 'react'
import { MdMenu, MdClose, MdOutlineShoppingCart, MdOutlineSearch, MdLogin} from 'react-icons/md'
import MenuMobileOptions from './MenuMobileOptions'
import logoSportwear from '../../assets/LogoSportwear.svg'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openClose = () => setIsOpen(!isOpen)

  //>>>>>>>>>>ESTILOS BOTONES MENU DESKTOP<<<<<<<<<<<
  const styleButtons = 'hover:text-[.85rem] rounded-lg p-1 hover:text-orange-300 grad mx-2 duration-100 ease-in-out uppercase '

  return (
    <>
      <nav className="flex flex-row w-full h-[10%] justify-between md:justify-end items-center">
        {/* BOTON DE MENÚ MOVIL */}
        <button className="flex items-center justify-center mx-3 md:hidden">
          <div onClick={openClose}>{isOpen ? <MdClose size={24} color={"orange"}/> : <MdMenu size={24} color={"orange"}/>}</div>
        </button>

        {/* LOGO */}
        <div className="flex flex-row items-center justify-center h-full md:w-full">
          <img src={logoSportwear} alt="Sportswear" />
        </div>

        {/* BOTON DE CARRITO, USER, SEARCH */}
        <div className="flex items-center justify-center h-full md:h-[10%] mx-3 md:absolute flex-rows">
          <MdOutlineSearch size={28} color={"orange"}/>
          <MdOutlineShoppingCart size={24} color={"orange"}/>
          <MdLogin size={24} color={"orange"}/>
        </div>

        {/* MENU MOVIL */}
        <MenuMobileOptions transition={isOpen? 'translate-x-0' : 'translate-x-full'}/>
        
        {/* MENU DESKTOP */}
        <div className="absolute hidden md:flex justify-center items-center text-[.8rem] font-inter font-normal bg-gradient-to-b from-gray-700 via-gray-900 to-black  py-6 text-white h-[5%] top-[10%] w-full">
          <button className={`${styleButtons}`} href="#">Inicio</button>
          <button className={`${styleButtons}`} href="#">Hombres</button>
          <button className={`${styleButtons}`} href="#">Mujeres</button>
          <button className={`${styleButtons}`} href="#">Marcas</button>
          <button className={`${styleButtons}`} href="#">Contactos</button>
        </div>
      </nav>
    </>
  );
}

export default NavBar