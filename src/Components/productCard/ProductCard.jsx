
export const ProductCard = ({id, imagen, icono, precio, nombre, descripcion}) => {
  return (
    <div key={id} className="products__container-card w-[211px] h-[360px] bg-white border p-4">
        <div className="products__container-card_img grid place-items-center">
            <img className="max-w-[156px]" src={imagen} alt="nombre"  />
        </div>

        <div className="products__container-card_text mt-[25px] text-left">
            <img className="w-[32px] h-[32px] " src={icono} alt="nombre" />
            <p className="text-sm text-[#2E2E2E] font-bold">{precio}</p>
            <h2 className="text-sm mt-1 text-[#2E2E2E]">{nombre}</h2>
        </div>

        <div className="products__container-card_footer absolute bottom-[3%] text-[#757575] text-xs">
            <p>{descripcion}</p>
        </div>
    </div>
  )
}
