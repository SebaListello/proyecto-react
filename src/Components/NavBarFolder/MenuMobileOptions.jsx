import React from "react";
import { useState } from "react";
import { MdClose } from 'react-icons/md'

import Marcas from "./Marcas";

const MenuMobileOptions = ({ transition }) => {

  const [listMen, setListMen] = useState(false);
  const [listWomen, setListWomen] = useState(false);
  const [listBrands, setListBrands] = useState(false);

  return (
    <div
      className={`md:hidden absolute w-full bg-gradient-to-b from-orange-300 to-orange-500 top-[10%] transform transition duration-200 flex justify-center items-center py-[3%] ${transition}`}
    >
      <ul className="flex flex-col leading-8 text-[0.9rem] font-inter font-normal w-full text-white items-center border uppercase">
        <li>
          <a href="#">Inicio</a>
        </li>

        <li>
          <button onClick={() => setListMen(!listMen)}>
            Hombres
            {listMen && (
              <div  onClick={() => setListMen(!listMen)} className="flex flex-col text-[0.7rem] leading-5">
                
              </div>
            )}
          </button>
        </li>

        <li>
          <button onClick={() => setListWomen(!listWomen)}>
            Mujeres
            {listWomen && 
              <div>
                Calzado
              </div>}
          </button>
        </li>

        <li>
          <button className="flex flex-col items-center justify-center" onClick={() => setListBrands(!listBrands)}>
            {listBrands? <MdClose size={24} color={"orange"}/> : 'Marcas'}
            {listBrands && (
              <div className="flex flex-col text-[0.7rem] leading-5">
                {Marcas.map( item => <li>{item}</li>)}
              </div>
            )}
          </button>
        </li>

        <li>
          <a href="#">Contactos</a>
        </li>
      </ul>
    </div>
  );
};

export default MenuMobileOptions;
