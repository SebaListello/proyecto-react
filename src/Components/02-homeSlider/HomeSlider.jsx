import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useFetch } from "../../hooks/useFetch";
import {Spinner} from '../spinner/Spinner'



export const HomeSlider = () => {

    const url = "http://localhost:8080/homeslider";
    const { data, isLoading } = useFetch(url);

    
  if(isLoading){
      return ( 
     <Spinner />
    )
  }
    
    const imagenesDesktop = Object.values(data.desktop);
    const imagenesMobile = Object.values(data.mobile);
  const settings = {
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    
    <div className="homeslider mt-[90px] md:mt-[120px] w-full">
      {/* Mobile home slider */}
      <div className="visible md:hidden p-4">
        <Slider {...settings}>
          {imagenesMobile.map((image, i) => (
            <div key={i} className="homeSlider__container-mobile">
              <a href="#">
               <img src={image} alt="ImageHomeSlider" />
              </a>
            </div>
          ))}
        </Slider>
      </div>

      <div className="hidden md:block">
        {/* Desktop home slider */}
        <Slider {...settings}>
          {imagenesDesktop.map((image, i) => (
            <div key={i} className="homeSlider__container-desktop ">
              <a href="#">
               <img src={image} alt="ImageHomeSlider" />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

