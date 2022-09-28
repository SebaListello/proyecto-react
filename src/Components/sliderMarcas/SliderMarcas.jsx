import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { adidas, nike, fila, montange, reebok, puma, topper, underarmour } from '../../assets/brandSlider/index'

const brands = [
    {
        id: 1,
        image: adidas,
        title: "Adidas"
    },
    {
        id: 2,
        image: nike,
        title: "Nike"
    },
    {
        id: 3,
        image: fila,
        title: "Fila"
    },
    {
        id: 4,
        image: montange,
        title: "Montange"
    },
    {
        id: 5,
        image: reebok,
        title: "Reebok"
    },
    {
        id: 6,
        image: puma,
        title: "Puma"
    },
    {
        id: 7,
        image: topper,
        title: "Topper"
    },
    {
        id: 8,
        image: underarmour,
        title: "Under armour"
    },
    
]


export const SliderMarcas = () => {
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
        <h2 className='text-2xl text-center uppercase font-bold mb-10'>Nuestras marcas</h2>
        <Slider {...settings}>
             {brands.map(({id, image, title}) => (
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