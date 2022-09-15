import React from 'react'
import SvgLogin from './Svg/SvgLogin'

const ButtonLogin = () => {
    return (
        <button className='flex-row items-center justify-center hidden h-full mx-1 md:flex'>
            <SvgLogin/>
        </button>
    )
}

export default ButtonLogin