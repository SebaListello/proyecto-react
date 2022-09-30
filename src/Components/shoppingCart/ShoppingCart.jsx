import { useState, useEffect, useReducer } from 'react'
import { TYPES } from '../../actions/actions'
import { Product } from './Product'
import { CartItem } from './CartItem'
import {shoppingInitialState, shoppingReducer} from '../../reducer/shoppingReducer'
import './styles.css'
            
export const ShoppingCart = () => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const {products, cart } = state;

    const addToCart = (id) => {
      dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    };
        
    const deleteFromCart = (id, all = false) => {
      console.log(id, all);
      // Explicar esto antes que la programación del reducer
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
      <h2>Carrito de Compras</h2>

      <h3>Productos</h3>
      <div className="box grid-responsive">
        {products.map((product) => (
          <Product key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>

      <h3>Cart</h3>
      <div className="box">
        {cart.map((item, index) => (
          <CartItem key={index} data={item} deleteFromCart={deleteFromCart} />
        ))}
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={clearCart}>Limpiar Carrito</button>
    </>
  );
}
     