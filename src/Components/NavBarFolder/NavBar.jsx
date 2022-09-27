import { useState } from "react";
import React from "react";
import ButtonLogin from "./ButtonLogin";
import ButtonSearch from "./ButtonSearch";
import ButtonShoppingCart from "./ButtonShoppingCart";
import MenuMobileOptions from "./MenuMobileOptions";
import SvgCruz from "./Svg/SvgCruz";
import SvgMenu from "./Svg/SvgMenu";
import LogoSportwear from "./Svg/LogoSportwear";
import MenuDesktopOptions from "./MenuDesktopOptions";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openClose = () => setIsOpen(!isOpen);

  const nameButtons = {
    button1: "Inicio",
    button2: "Hombres",
    button3: "Mujeres",
    button4: "Marcas",
    button5: "Contactos",
  };

  return (
    <>
      <nav className=" flex z-50 bg-white opacity-100 fixed flex-row w-full h-[10%] justify-between md:justify-end items-center">
        {/* BOTON DE MENÚ MOVIL */}
        <button className="flex items-center justify-center mx-3 md:hidden">
          <div onClick={openClose}>{isOpen ? <SvgCruz /> : <SvgMenu />}</div>
        </button>

        {/* LOGO */}
        <div className="flex md:absolute flex-row items-center justify-center md:h-[100%] w-full">
          <LogoSportwear />
        </div>

        {/* BOTON DE CARRITO, USER, SEARCH */}
        <div className="flex justify-center h-full md:h-[100%] mx-3 md:absolute flex-rows">
          <ButtonSearch />
          <ButtonShoppingCart />
          <ButtonLogin />
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
