export const CartItem = ({ data, onRemove, onRemoveAll }) => {
    let { id, nombre, imagen, precio, qty } = data;
    
    return (
      <div className={`flex md:flex-row justify-between items-center w-full h-auto px-5 py-3 flex-col`}>
        <div className="flex flex-col items-center">
            <img
            src={imagen}
            className="w-[100px] block"
            alt=""
            />
            <h3 className="text-xs block w-[200px] text-center px-2">{nombre}</h3>
        </div>

  
        <div className="flex flex-col items-center justify-center text-[.55rem] md:text-[.8rem]">
          <div className="flex items-center justify-center">
            <h5 className="m-2 text-[.55rem] md:text-[.8rem] tracking-widest">
              ${precio} ({ qty }u.) = ${(precio * qty).toFixed(3)}
            </h5>
          </div>
          <div className="flex flex-row">
            <button
              className="px-[3px] mx-[2px] md:mx-[2.5px] font-bold text-white shadow shadow-[#44444] bg-orange-500 hover:bg-orange-700"
              onClick={() => onRemove(data)}
            >
              {qty <=1 ? "Eliminar item" : "Eliminar uno"}
            </button>
  
            <button
              className={`px-[3px] mx-[2px] md:mx-[2.5px] font-bold text-white shadow shadow-[#44444] bg-orange-500 hover:bg-orange-700 ${qty > 1 ? "block" : "hidden"}`}
              onClick={() => onRemoveAll(data)}>
              Eliminar todos
            </button>
          </div>
        </div>
      </div>
    );
  };