import { useReducer } from 'react'
import { TYPES } from '../../actions/actions'
import { Product } from './Product'
import { CartItem } from './CartItem'
import {shoppingInitialState, shoppingReducer} from '../../reducer/shoppingReducer'
            
export const ShoppingCart = ({transitionCartItem}) => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const {products, cart } = state;

    const addToCart = (id) => {
      dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    };
        
    const deleteFromCart = (id, all = false) => {
      console.log(id, all);
      if (all) {
        dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
      } else {
        dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
      }
    };
        
    const clearCart = () => {
      dispatch({ type: TYPES.CLEAR_CART });
    };
        
  return (
    <>
      <div className={`transform transition duration-300 ${transitionCartItem} flex z-[100] flex-col m-4 w-[200px] md:w-[300px] top-[55px] md:top-[45px] right-[5%] shadow-xl shadow-black absolute`}>
        
        {/* <h2 className='flex justify-center bg-white'>Productos</h2>
        <div className="box grid-responsive">
          {products.map((product) => (
            <Product key={product.id} data={product} addToCart={addToCart} />
          ))}
        </div>  */}
        
        <div className="flex flex-col items-center justify-center py-2 m-0 text-orange-500 bg-white">
          {cart.map((item, index) => (
            <CartItem key={index} data={item} deleteFromCart={deleteFromCart} />
          ))}
        </div>
        <button
          className="px-2 py-1 font-bold text-orange-500 transition duration-200 bg-white border-orange-500 hover:text-white border-y hover:bg-orange-500"
          onClick={clearCart}
        >
          Limpiar Carrito
        </button>
      </div>
    </>
  );
}
     