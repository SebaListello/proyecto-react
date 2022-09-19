import React from "react";
import { useState } from "react";
import { Indumentaria, Marcas } from "./Data/DataProducts";
import SvgClose from "./Svg/SvgClose";

const MenuMobileOptions = ({ nameButton, transition, openClose }) => {

  /*    ESTADOS   */
  const [click, setClick] =
    useState({
      men: false,
      women: false,
      brands: false,
    });

  /*    ESTILOS   */
  const styleMenuOptionsList = 'flex flex-col items-center justify-center';
  const styleSubMenuOptionsList = 'flex flex-col border-y rounded-lg uppercase border-white text-gray-200 font text-[0.7rem] leading-7 py-2';


  return (
    <div
      className={`md:hidden shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] absolute w-full bg-gradient-to-b from-orange-400 to-orange-700 top-[10%] transform transition duration-200 flex justify-center items-center py-[3%] ${transition}`}>

      <ul className="flex flex-col leading-10 text-[1rem] font-inter font-normal text-white items-center">

        <li>
          <a onClick={openClose} href="#">{nameButton.button1}</a>
        </li>

        <li>
          <button className={`${styleMenuOptionsList}`} onClick={() => setClick({ men: !click.men })}>

            {click.men ? <SvgClose /> : nameButton.button2}
            {click.men && (
              <div className={`${styleSubMenuOptionsList}`}>
                {Indumentaria.map((item) => <a href="#">{item}</a>)}
              </div>)}
          </button>
        </li>

        <li>
          <button className={`${styleMenuOptionsList}`} onClick={() => setClick({ women: !click.women })}>

            {click.women ? <SvgClose /> : nameButton.button3}

            {click.women && (
              <div className={`${styleSubMenuOptionsList}`}>
                {Indumentaria.map((item) => <a href="#">{item}</a>)}
              </div>)}
          </button>
        </li>

        <li>
          <button className={`${styleMenuOptionsList}`} onClick={() => setClick({ brands: !click.brands })}>

            {click.brands ? <SvgClose /> : nameButton.button4}

            {click.brands && (
              <div className={`${styleSubMenuOptionsList}`}>
                {Marcas.map((item) => <a href="#">{item}</a>)}
              </div>)}
          </button>
        </li>

        <li>
          <a onClick={openClose} href="#">{nameButton.button5}</a>
        </li>

      </ul>
    </div>
  );
};

export default MenuMobileOptions;
