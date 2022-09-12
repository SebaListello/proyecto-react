import React from 'react'

const ButtonSearch = () => {
  return (
      <button className='flex-row items-center justify-center hidden h-full mx-1 md:flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F96D00" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
      </button>
  )
}

export default ButtonSearch