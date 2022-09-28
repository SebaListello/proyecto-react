import React from "react";
import { useState } from "react";
import { Indumentaria, Marcas } from "./Data/DataProducts";
import { MdClose } from 'react-icons/md'


const MenuMobileOptions = ({
  nameButton,
  transitionMenuGral,
  transitionMenuButton,
  openClose,
}) => {
  /*    ESTADOS   */
  const [click, setClick] = useState({
    men: false,
    women: false,
    brands: false,
  });

  /*    ESTILOS   */
  const menuOptionsList = `p-1 m-1 flex flex-col items-center justify-center ${transitionMenuButton} transform transition delay-300 duration-300 `;
  const subMenuOptionsList = 'flex flex-col border-y rounded-lg uppercase border-white text-gray-200 font text-[0.7rem] leading-7 py-2 opacity-100 transform transition duration-300';
  const transitionSubMenu = 'h-0 w-0 opacity-0 transform duration-300 translate-x-full scale-0';

  return (
    <div
      className={`md:hidden z-50 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] absolute w-full bg-gradient-to-b from-orange-400 to-orange-700 top-[100%] transform transition duration-300 flex justify-center items-center py-[3%] ${transitionMenuGral}`}
    >
      <ul className="flex flex-col leading-10 text-[1rem] font-inter font-normal text-white items-center">
        <li>
          <a className={`${menuOptionsList}`} onClick={openClose} href="#">
            {nameButton.button1}
          </a>
        </li>

        <li>
          <button
            className={`${menuOptionsList}`}
            onClick={() => setClick({ men: !click.men })}
          >
            {click.men ? <MdClose size={24} color={"white"} /> : nameButton.button2}

            <div
              className={click.men? subMenuOptionsList : transitionSubMenu}
            >
              {Indumentaria.map((item, i) => (
                <a key={i} className={!click.men && 'opacity-0'} href="#">{item}</a>
              ))}
            </div>
          </button>
        </li>

        <li>
          <button
            className={`${menuOptionsList}`}
            onClick={() => setClick({ women: !click.women })}
          >
            {click.women ? <MdClose size={24} color={"white"} /> : nameButton.button3}

            <div
              className={click.women? subMenuOptionsList : transitionSubMenu}
            >
              {Indumentaria.map((item, i) => (
                <a key={i} className={!click.women && 'opacity-0'} href="#">{item}</a>
              ))}
            </div>
          </button>
        </li>

        <li>
          <button
            className={`${menuOptionsList}`}
            onClick={() => setClick({ brands: !click.brands })}
          >
            {click.brands ? <MdClose size={24} color={"white"} /> : nameButton.button4}

            <div
              className={click.brands? subMenuOptionsList : transitionSubMenu}
            >
              {Marcas.map((item, i) => (
                <a key={i} className={!click.brands && 'opacity-0'} href="#">{item}</a>
              ))}
            </div>
          </button>
        </li>

        <li>
          <a className={`${menuOptionsList}`} onClick={openClose} href="#">
            {nameButton.button5}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuMobileOptions;
