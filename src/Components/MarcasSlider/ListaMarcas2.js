import React from 'react'


const ListaMarcas2 = ({ list2 }) => {
  return (
    <div className='flex flex-row justify-around items-center py-1 h-full lg:h-[320px] lg:w-full'>
        {list2.map((marca, index) => (
            <div className='flex items-center justify-center w-12 h-12 border-2 rounded-full shadow-lg lg:w-40 lg:h-40 shadow-gray-800' key={index}>
                <img className='object-contain w-8 h-8 lg:w-24 lg:h-24' src={marca.imagen} alt={marca.nombre} />
            </div>
        ))}
    </div>
  )
}

export default ListaMarcas2