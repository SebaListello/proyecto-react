import React from 'react'
import SvgShoppingCart from './Svg/SvgShoppingCart'

const ButtonShoppingCart = () => {
    return (
        <button className='flex flex-row items-center justify-center h-full mx-1 md:w-full'>
            <SvgShoppingCart/>
        </button>
    )
}

export default ButtonShoppingCart