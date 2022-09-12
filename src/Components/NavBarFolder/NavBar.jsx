import { useState } from 'react'
import React from 'react'
import ButtonLogin from './ButtonLogin'
import ButtonSearch from './ButtonSearch'
import ButtonShoppingCart from './ButtonShoppingCart'
import MenuOptions from './MenuOptions'
import SvgCruz from './SvgCruz'
import SvgMenu from './SvgMenu'
import LogoSportwear from './LogoSportwear'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openClose = () => setIsOpen(!isOpen)
  
  return ( 
  <>
    <nav className='flex flex-row w-full h-[10%] justify-between md:justify-end items-center'>

      {/* BOTON DE MENÚ MOVIL */}
      <button className='flex items-center justify-center h-full mx-3 md:hidden'>
        <div onClick={openClose}>
          {isOpen ? 
          <SvgCruz/>
          :
          <SvgMenu/> } 
        </div>
      </button>

      {/* LOGO */}
      <div className='flex flex-row items-center justify-center h-full md:w-full'>
        <LogoSportwear/>
      </div>

      {/* BOTON DE CARRITO, USER, SEARCH */}
      <div className='flex justify-center h-full md:h-[10%] mx-3 md:absolute flex-rows'>
        <ButtonSearch />
        <ButtonShoppingCart />
        <ButtonLogin />
      </div>

      {/* MENU MOVIL-DESKTOP */}
      {isOpen && (<MenuOptions/>)}
    </nav>

  </>

// LISTA OPCIONES DESKTOP
// LISTA OPCIONES MOVIL
  )
}

export default NavBar