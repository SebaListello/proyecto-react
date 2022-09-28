import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  imagen_1_desktop, imagen_1_mobile, imagen_2_desktop, imagen_2_mobile, imagen_3_desktop, imagen_3_mobile, imagen_4_desktop, imagen_4_mobile, imagen_5_desktop, imagen_5_mobile
} from "../../assets/imageHomeSlider/index";

const ImageHomeSliderDesktop = [imagen_1_desktop, imagen_2_desktop, imagen_3_desktop, imagen_4_desktop, imagen_5_desktop ];
const ImageHomeSliderMobile = [imagen_1_mobile, imagen_2_mobile, imagen_3_mobile, imagen_4_mobile, imagen_5_mobile ];

export const HomeSlider = () => {
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
    <div>
      {/* Mobile home slider */}
      <div className="visible md:hidden p-4">
        <Slider {...settings}>
          {ImageHomeSliderMobile.map((image, i) => (
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
          {ImageHomeSliderDesktop.map((image, i) => (
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

