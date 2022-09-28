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
      <div className='flex flex-col max-w-[1376px] items-center my-[100px] justify-center overflow-hidden-x mx-auto px-3 max-h-[320px]'>
        <h2 className="font-semibold text-gray-900 lg:relative lg:text-[1.3rem] lg:top-[50px] uppercase"> Nuestras marcas</h2>
        <Slider className='w-full' {...settings}>
          <div className='flex flex-row mx-0'>
            <ListaMarcas list={marcasListas}/>
          </div>
          <div className='flex flex-row p-0 mx-0'>
            <ListaMarcas2 list2={marcasListas2}/>
          </div>
        </Slider>
      </div>
    );
  }
}