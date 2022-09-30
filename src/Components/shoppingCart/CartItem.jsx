export const CartItem = ({ data, deleteFromCart }) => {
  let { id, name, price, quantity } = data;
  return (
    <div className="cart-item">
      <h4>{name}</h4>
      <h5>
        ${price} x {quantity} = ${price * quantity}
      </h5>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteFromCart(id)}>Eliminar uno</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
    </div >
  );
};


