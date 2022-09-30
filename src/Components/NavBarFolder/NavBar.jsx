import { useState } from "react";
import React from "react";
import MenuMobileOptions from "./MenuMobileOptions";
import MenuDesktopOptions from "./MenuDesktopOptions";
import { MdMenu, MdClose, MdOutlineShoppingCart, MdOutlineSearch, MdLogin} from 'react-icons/md'
import logoSportwear from '../../assets/LogoSportwear.svg'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openClose = () => setIsOpen(!isOpen);

  const nameButtons = {
    button1: "INICIO",
    button2: "Hombres",
    button3: "Mujeres",
    button4: "Marcas",
    button5: "CONTACTOS",
  };

  return (
    <>
      <nav className=" flex z-50 bg-white opacity-100 fixed flex-row w-full h-[90px] justify-between md:justify-end items-center">
        {/* BOTON DE MENÚ MOVIL */}
        <button className="flex items-center justify-center mx-3 md:hidden">
          <div onClick={openClose}>{isOpen ? <MdClose size={24} color={"var(--clr-primary)"} /> : <MdMenu size={24} color={"var(--clr-primary)"}/>}</div>
        </button>

        {/* LOGO */}
        <div className="flex md:absolute flex-row items-center justify-center h-[100%] w-full">
          <img src={logoSportwear} alt="Logo" />
        </div>

        {/* BOTON DE CARRITO, USER, SEARCH */}
        <div className="flex items-center justify-center h-full md:h-[100%] mx-4 md:absolute flex-rows">
          <MdOutlineSearch size={24} color={"var(--clr-primary)"}/>
          <MdOutlineShoppingCart size={24} color={"var(--clr-primary)"}/>
          <MdLogin size={24} color={"var(--clr-primary)"}/>
        </div>

        {/* MENU MOVIL */}
        <MenuMobileOptions
          nameButton={nameButtons}
          openClose={openClose}
          transitionMenuGral={
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }
          transitionMenuButton={
            isOpen ? "translate-x-0 opacity-100" : "translate-x-48 opacity-0"
          }
        />

        {/* MENU DESKTOP */}
      
        <MenuDesktopOptions nameButton={nameButtons} />
      
      </nav>
    </>
  );
};

export default NavBar;
