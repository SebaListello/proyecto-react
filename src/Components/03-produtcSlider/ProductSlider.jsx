import { SliderL } from './SliderL';
import { useFetch } from '../../hooks/useFetch';
import {Spinner} from '../spinner/Spinner'
export const ProductSlider = () => {

    const url = "http://localhost:8080/productos";
    const { data, isLoading } = useFetch(url);
    const { bannershombres, bannersmujeres, productoshombres, productosmujeres} = data;
  
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
      <SliderL data={productoshombres}/>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-[80%_20%] items-center grid-col-reverse">
      <SliderL data={productosmujeres}/>
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
  </div>
  )
}
