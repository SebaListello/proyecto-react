import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './productsslider.css'

export const ProductsSlider = ({products}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1064,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
        <Slider {...settings}>
            
        {products.map((product, i) => (
                        
                        <div key={product.id} className="products__container-card w-[211px] h-[360px] bg-white border p-4">
                            <div className="products__container-card_img grid place-items-center">
                                <img className="max-w-[156px]"src={product.imagen} alt={product.nombre} />
                            </div>

                            <div className="products__container-card_text mt-[25px] text-left">
                                <img className="w-[32px] h-[32px] " src={product.icono} alt={product.nombre} />
                                <p className="text-sm text-[#2E2E2E] font-bold">{product.precio}</p>
                                <h2 className="text-sm mt-1 text-[#2E2E2E]">{product.nombre}</h2>
                            </div>

                            <div className="products__container-card_footer absolute bottom-[3%] text-[#757575] text-xs">
                                <p>{product.descripcion}</p>
                            </div>
                        </div>

                    ))}
        </Slider>
   
  );
}