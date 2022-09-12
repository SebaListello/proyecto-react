import React from 'react'

const MenuOptions = () => {
  return (
    <div className='absolute md:hidden w-full bg-orange-500 top-[10%] flex justify-center items-center py-[3%]'>
        <ul className='flex flex-col leading-8 text-[0.9rem] font-inter font-normal text-white tracking-widest items-center'>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Hombres</a></li>
            <li><a href="#">Mujeres</a></li>
            <li><a href="#">Marcas</a></li>
            <li><a href="#">Contactos</a></li>
        </ul>
   </div>
  )
}

export default MenuOptions