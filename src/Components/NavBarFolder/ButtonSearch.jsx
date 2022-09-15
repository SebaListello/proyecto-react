import React from 'react'
import SvgSearch from './Svg/SvgSearch'

const ButtonSearch = () => {
  return (
      <button className='flex-row items-center justify-center hidden h-full mx-1 md:flex'>
        <SvgSearch/>
      </button>
  )
}

export default ButtonSearch