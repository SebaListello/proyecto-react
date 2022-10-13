import Slider from 'react-slick';
import { ProductCard } from '../productCard/ProductCard'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './productslider.css'


export const SliderL = ({data, onAdd, onRemove}) => {

  const settings = {
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
    <>
        <Slider {...settings}>
          {data?.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product}
                  onAdd={onAdd}
                  />
              ))}  
        </Slider>
    </>
        
  );
}