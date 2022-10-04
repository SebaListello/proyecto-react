export const CartItem = ({ data, deleteFromCart }) => {
  let { id, name, price, quantity } = data;
  return (
    <div className={`flex flex-row items-center ${quantity > 1 ? "justify-between" : "justify-center"} w-full h-[90px] md:h-[100px] md:my-2 border-y border-white border-opacity-50`}>
      <img
        className="m-1 shadow-slate-600 shadow-md w-[65px] h-[65px] md:w-[90px] md:h-[90px]"
        src="data:image/png;base64,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"
        alt=""
      />

      <div className="md:mx-2 flex flex-col items-center justify-center text-[.55rem] md:text-[.8rem]">
        <div className="flex items-center justify-center h-full">
          <h5 className="m-2 text-[.55rem] md:text-[.8rem] tracking-widest">
            ${price} x {quantity}u. = ${price * quantity}
          </h5>
        </div>
        <div className="flex flex-row">
          <button
            className="px-[3px] mx-[2px] md:mx-[2.5px] font-bold text-white shadow shadow-black bg-orange-500 hover:bg-orange-700"
            onClick={() => deleteFromCart(id)}
          >
            {quantity <=1 ? "Eliminar item" : "Eliminar uno"}
          </button>

          <button
            className={`px-[3px] mx-[2px] md:mx-[2.5px] font-bold text-white shadow shadow-black bg-orange-500 hover:bg-orange-700 ${quantity > 1 ? "block" : "hidden"}`}
            onClick={() => deleteFromCart(id, true)}>
            Eliminar todos
          </button>
        </div>
      </div>
    </div>
  );
};
