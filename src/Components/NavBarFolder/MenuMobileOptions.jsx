import React from 'react'

const MenuMobileOptions = ({openClose,transition}) => {
  return (
    <div className={`md:hidden absolute w-full bg-black top-[10%] transform transition duration-300 flex justify-center items-center py-[3%] ${transition}`}>
        <ul onClick={openClose} className='flex flex-col leading-8 text-[0.9rem] font-inter font-normal text-white items-center'>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Hombres</a></li>
            <li><a href="#">Mujeres</a></li>
            <li><a href="#">Marcas</a></li>
            <li><a href="#">Contactos</a></li>
        </ul>
   </div>
  )
}

export default MenuMobileOptions