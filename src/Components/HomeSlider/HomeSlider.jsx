import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  home_1,
  home_2,
  home_3,
  home_4,
} from "../../assets/ImageHomeSlider/index";

const ImageHomeSlider = [home_1, home_2, home_3, home_4];

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
  };

  return (
    <div>
      <Slider {...settings}>
        {ImageHomeSlider.map((image, i) => (
          <div className="homeSlider__container">
            <img src={image} alt="ImageHomeSlider" />
          </div>
        ))}
      </Slider>
      );
    </div>
  );
};

export default HomeSlider;
