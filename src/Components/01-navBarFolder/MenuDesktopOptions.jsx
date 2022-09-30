import { useState } from "react";
import { Indumentaria, Marcas } from "./Data/DataProducts";

const MenuDesktopOptions = ({ nameButton }) => {
  /*    ESTADOS   */
  const [click, setClick] = useState({
    men: false,
    women: false,
    brands: false,
  });

  /*    ESTILOS   */
  const menuOptionsList = "flex justify-center mx-10";
  const styleSubMenuOptionsList = `absolute grid grid-cols-2 w-[300px] top-[98%] bg-gradient-to-b from-orange-700 to-orange-400 uppercase border-white text-gray-200 font text-[0.8rem] leading-7 p-2 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]`;

  return (
    <div
      className={`absolute z-50 hidden w-full bg-gradient-to-b grid-cols-2 from-orange-400 to-orange-700 top-[100%] md:flex justify-center items-center`}
    >
      <ul className="flex flex-row leading-10 text-[1rem] font-inter font-normal text-white">
        <li>
          <a className={`${menuOptionsList}`} href="#">
            {nameButton.button1}
          </a>
        </li>

        <li>
          <button
            className={`${menuOptionsList}`}
            onClick={() => setClick({ ...click.men, men: !click.men })}
          >
            {nameButton.button2}
            {click.men && (
              <div className={`${styleSubMenuOptionsList}`}>
                {Indumentaria.map((item) => (
                  <a className="hover:font-semibold" href="#">
                    {item}
                  </a>
                ))}
              </div>
            )}
          </button>
        </li>

        <li>
          <button
            className={`${menuOptionsList}`}
            onClick={() => setClick({ ...click.women, women: !click.women })}
          >
            {nameButton.button3}

            {click.women && (
              <div className={`${styleSubMenuOptionsList}`}>
                {Indumentaria.map((item) => (
                  <a className="hover:font-semibold" href="#">
                    {item}
                  </a>
                ))}
              </div>
            )}
          </button>
        </li>

        <li>
          <button
            className={`${menuOptionsList}`}
            onClick={() => setClick({ ...click.brands, brands: !click.brands })}
          >
            {nameButton.button4}

            {click.brands && (
              <div className={`${styleSubMenuOptionsList}`}>
                {Marcas.map((item) => (
                  <a className="hover:font-semibold" href="#">
                    {item}
                  </a>
                ))}
              </div>
            )}
          </button>
        </li>

        <li>
          <a className={`${menuOptionsList}`} href="#">
            {nameButton.button5}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuDesktopOptions;
