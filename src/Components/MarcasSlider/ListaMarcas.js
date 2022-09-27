import React from 'react'


const ListaMarcas = ({ list }) => {
  return (
    <div className='container mx-auto flex flex-row justify-around items-center  h-full lg:h-[320px] lg:w-full'>
        {list.map((marca, index) => (
            <div className='flex items-center justify-center w-10 h-10 border-2 rounded-full shadow-lg lg:w-40 lg:h-40 shadow-gray-300' key={index}>
                <img className='object-contain w-8 h-8 lg:w-24 lg:h-24' src={marca.imagen} alt={marca.nombre} />
            </div>
        ))}
    </div>
  )
}

export default ListaMarcas