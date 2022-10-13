import { useFetch } from '../../hooks/useFetch';
import { SliderL } from './SliderL';
import {Spinner} from '../spinner/Spinner'
import { CartItem } from './CartItem';
import { useState } from 'react';
import { MdClose, MdOutlineShoppingCart } from 'react-icons/md';

export const ProductSlider = () => {

    const url = "http://localhost:8080/productos";
    const { data, isLoading } = useFetch(url);
    const { bannershombres, bannersmujeres, productoshombres, productosmujeres} = data;
  
    const [cartItems, setCartItems] = useState([]);

    
  const [isOpenCart, setIsOpenCart] = useState(false);
  const openCloseCart = () => setIsOpenCart(!isOpenCart);
  
    /*Agregar item al carrito  */
    const onAdd = (product) =>{

      const exist = cartItems.find((x) => x.id === product.id);
      if(exist){
        const newCartItems = cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty + 1} : x);
        setCartItems(newCartItems);
      } else {
        const newCartItems = [...cartItems, {...product, qty: 1}];
        setCartItems(newCartItems);
      }
    }

    /*Eliminar item del carrito  */
    const onRemove = (product) =>{
      const exist = cartItems.find((x) => x.id === product.id);

      if(exist.qty === 1){
        const newCartItems = cartItems.filter((x) => x.id !== product.id);
        setCartItems(newCartItems);
      } else{
        const newCartItems = cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x);
        setCartItems(newCartItems);
      }
    }

    const onRemoveAll = (product) =>{
      const exist = cartItems.find((x) => x.id === product.id);

      if(exist){
        const newCartItems = cartItems.filter((x) => x.id !== product.id)
        setCartItems(newCartItems);
      }
      
    }

    const clearCart = () =>{
      setCartItems([])
    }

    if(isLoading){
      return ( 
      <Spinner />
    )
  }

  return (
    <div className="container px-5 mx-auto productsSlider__container md:px-0">
      <div className="my-[50px] grid grid-cols-1 md:grid-cols-[20%_80%] items-center">
        <div className="mb-4 product__slider-ad justify-self-center lg:mb-0 md:mr-auto">
          <img
            src={bannershombres.imagendesktop}
            className=" max-h-[160px] object-cover max-w-full  md:hidden"
            alt="ad"
          />
          <img
            src={bannershombres.imagenmobile}
            className="max-h-[360px] object-cover max-w-full hidden md:block"
            alt="ad"
          />
        </div>
        <SliderL data={productoshombres} onAdd={onAdd} onRemove={onRemove} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[80%_20%] items-center grid-col-reverse">
        <SliderL data={productosmujeres} onAdd={onAdd} onRemove={onRemove}/>
        <div className="order-first mb-4 product__slider-ad justify-self-center lg:mb-0 md:ml-auto md:order-none">
          <img
            src={bannersmujeres.imagendesktop}
            className=" max-h-[160px] object-cover max-w-full  md:hidden"
            alt="ad"
          />
          <img
            src={bannersmujeres.imagenmobile}
            className="max-h-[360px] object-cover max-w-full hidden md:block"
            alt="ad"
          />
        </div>
      </div>

      {/* SHOPPING CART */}
      <div className="cursor-pointer absolute top-[4.4%] right-[65px] z-50" onClick={openCloseCart} >
            {isOpenCart ? (
              <MdClose size={24} color={"var(--clr-primary)"} />
            ) : (
              <MdOutlineShoppingCart size={24} color={"var(--clr-primary)"} />
            )}
      </div>
      {
        isOpenCart &&  
        <div className="transform transition duration-300 flex z-[100] flex-col m-4 w-[200px] md:w-[500px] top-[55px] md:top-[40px] right-[2.4%] shadow-lg shadow-[#44444] absolute">
          <div>   
              <div className="flex flex-col items-center border border-orange-500 justify-center py-2 m-0 text-[#FD8526] bg-white">
                {cartItems.map((item) => (
                  <CartItem key={item.id} data={item} onRemove={onRemove} onRemoveAll={onRemoveAll}/>
                ))}
              </div>
          </div>
            <button onClick={clearCart} className='wpx-3 py-1 font-bold text-[#FD8526] transition duration-200 bg-white border-orange-500 hover:text-white border hover:bg-orange-500'>Limpiar carrito
            </button>
        </div>
      }
  </div>
  )
}
