import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Spinner} from '../spinner/Spinner'
import { useFetch } from '../../hooks/useFetch'

export const BrandSlider = () => {
  const url = "http://localhost:8080/brandslider";
  const { data, isLoading } = useFetch(url);

  if(isLoading){
    return ( 
    <Spinner />
  )
}

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 710,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };

  return (
    <div className=" max-w-[850px] mx-auto my-[150px] px-4 ">
        <h2 className='text-2xl text-center uppercase font-bold mb-10'>Ver marcas</h2>
        <Slider {...settings}>
             {data.map(({id, image, title}) => (
                    <div key={id}>
                            <a href="#">
                              <img className="mx-auto max-w-[150px]" src={image} alt={title} />
                            </a>
                    </div>
                    ))}
        </Slider>
    </div>
  );
}