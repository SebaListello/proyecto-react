import { MdOutlineShoppingCart } from 'react-icons/md';

export const ProductCard = ({product, onAdd}) => {

  const {id, imagen, icono, precio, nombre, descripcion} = product
  return (
    <div key={id} className="products__container-card flex flex-col md:items-center mx-auto h-[350px] bg-white border p-4 relative">
        <div className="products__container-card_img grid place-items-center">
            <img className="max-w-[146px]" src={imagen} alt="nombre"  />
        </div>

        <div className="products__container-card_text mt-[15px] text-left">
            <img className="w-[32px] h-[32px] " src={icono} alt="nombre" />
            <p className="text-sm text-[#2E2E2E] font-bold">${precio}</p>
            <h2 className="text-sm mt-1 text-[#2E2E2E]">{nombre}</h2>
        </div>

        <div className="products__container-card_footer absolute bottom-[3%] left-4 text-[#757575] text-xs">
            <p>{descripcion}</p>
        </div>

        <button onClick={()=> onAdd(product)} 
          className=" absolute top-0 right-0 p-2 bg-black text-white text-sm 
          active:bg-white 
          ">
          <MdOutlineShoppingCart size={24} color={"var(--clr-primary)"} />
        </button>
    </div>
  )
}
