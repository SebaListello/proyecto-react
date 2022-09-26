import React, { Component } from "react";
import Slider from "react-slick";
import ListaMarcas from './ListaMarcas';
import { marcasListas } from "./data";
import ListaMarcas2 from './ListaMarcas2';
import { marcasListas2 } from './data2';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className='flex flex-col max-w-[1376px] border-2 items-center justify-center my-[100px] overflow-hidden mx-auto max-h-[320px]'>
        <h2 className="text-gray-900"> Nuestras marcas</h2>
        <Slider className='w-full mx-auto' {...settings}>
          <div className='flex flex-row'>
            <ListaMarcas list={marcasListas}/>
          </div>
          <div className='flex flex-row'>
            <ListaMarcas2 list2={marcasListas2}/>
          </div>
        </Slider>
      </div>
    );
  }
}