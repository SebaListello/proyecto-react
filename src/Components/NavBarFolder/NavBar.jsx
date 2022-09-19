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
      <nav className="flex flex-row w-full h-[10%] justify-between md:justify-end items-center">
        {/* BOTON DE MENÚ MOVIL */}
        <button className="flex items-center justify-center mx-3 md:hidden">
          <div onClick={openClose}>{isOpen ? <SvgCruz /> : <SvgMenu />}</div>
        </button>

        {/* LOGO */}
        <div className="flex flex-row items-center justify-center h-full md:w-full">
          <LogoSportwear />
        </div>

        {/* BOTON DE CARRITO, USER, SEARCH */}
        <div className="flex justify-center h-full md:h-[10%] mx-3 md:absolute flex-rows">
          <ButtonSearch />
          <ButtonShoppingCart />
          <ButtonLogin />
        </div>

        {/* MENU MOVIL */}
        <MenuMobileOptions
          nameButton={nameButtons}
          openClose={openClose}
          transition={isOpen ? "translate-x-0" : "translate-x-full"}
        />

        {/* MENU DESKTOP */}
        <MenuDesktopOptions nameButton={nameButtons} />
      </nav>
    </>
  );
};

export default NavBar;
