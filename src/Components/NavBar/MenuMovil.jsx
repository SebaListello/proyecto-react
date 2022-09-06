import React from 'react'

const MenuMovil = () => {
  return (
<div className='flex flex-col items-center bg-[#F96D00] md:hidden'>
    <ul className='p-[5%] flex flex-col leading-8 text-[1.1rem] font-inter font-normal capitalize tracking-widest text-center text-white'>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Hombres</a></li>
      <li><a href="#">Mujeres</a></li>
      <li><a href="#">Niños</a></li>
      <li><a href="#">Marca</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
</div>
  )
}

export default MenuMovil
