import NavBar from "./Components/NavBarFolder/NavBar";
import { ProductsSlider } from "./Components/produtcsSlider/ProductsSlider";
import  Footer  from "./Components/FooterFolder/Footer";
import {
  buzo01h,
  buzo02h,
  zapatilla01h,
  zapatilla02h,
  zapatilla03h,
  zapatilla04h,
  reloj01h,
  pantalon01h,
  ad01h,
  ad02h,
  buzo01m,
  buzo02m,
  buzo03m,
  zapatilla01m,
  zapatilla02m,
  calza01m,
  conjunto01m,
  bolso01m,
  ad01m,
  ad02m,
  adidas,
  nike,
  puma,
  fila,
  lecoq,
} from "./assets/index.js";
import { HomeSlider } from "./Components/HomeSlider/HomeSlider";
const productosHombre = [
  {
    id: 1,
    imagen: zapatilla01h,
    marca: "Adidas",
    icono: adidas,
    precio: "$36.999",
    nombre: "Zapatillas Adidas Forum Mid de Hombre",
    descripcion: "3 cuotas de $12.333 sin interés",
  },
  {
    id: 2,
    imagen: zapatilla02h,
    marca: "Nike",
    icono: nike,
    precio: "$42.999",
    nombre: "Zapatillas Nike Air Max 90 Se de Hombre",
    descripcion: "3 cuotas de $14.333 sin interés",
  },
  {
    id: 3,
    imagen: zapatilla03h,
    marca: "Le Coq",
    icono: lecoq,
    precio: "$20.999",
    nombre: "Zapatillas Le Coq Sportif R850 Colors de Hombre",
    descripcion: "3 cuotas de $5.666 sin interés",
  },
  {
    id: 4,
    imagen: buzo01h,
    marca: "Adidas",
    icono: adidas,
    precio: "$16.999",
    nombre: "Buzo Adidas Trefoil Hoodie de Hombre",
    descripcion: "3 cuotas de $5.666 sin interés",
  },
  {
    id: 5,
    imagen: zapatilla04h,
    marca: "Nike",
    icono: nike,
    precio: "$42.999",
    nombre: "Zapatillas Nike Air Max 90 Se de Hombre",
    descripcion: "3 cuotas de $14.333 sin interés",
  },
  {
    id: 6,
    imagen: buzo02h,
    marca: "Adidas",
    icono: adidas,
    precio: "$23.099",
    nombre: "Buzo adidas Forum De Hombre",
    descripcion: "3 cuotas de $ 7.699,66 sin interés",
  },
  {
    id: 7,
    imagen: pantalon01h,
    marca: "Adidas",
    icono: adidas,
    precio: "$28.999",
    nombre: "Pantalón adidas Adicolor Colorblock De Hombre",
    descripcion: "3 cuotas de $ 9.666,33 sin interés",
  },
  {
    id: 8,
    imagen: reloj01h,
    marca: "Adidas",
    icono: adidas,
    precio: "$20.099",
    nombre: "Reloj Mistral Smart L13 De Hombre",
    descripcion: "3 cuotas de $ 6.699,66 sin interés",
  },
  {
    id: 9,
    imagen: reloj01h,
    marca: "Adidas",
    icono: adidas,
    precio: "$20.099",
    nombre: "Reloj Mistral Smart L13 De Hombre",
    descripcion: "3 cuotas de $ 6.699,66 sin interés",
  },
  {
    id: 10,
    imagen: reloj01h,
    marca: "Adidas",
    icono: adidas,
    precio: "$20.099",
    nombre: "Reloj Mistral Smart L13 De Hombre",
    descripcion: "3 cuotas de $ 6.699,66 sin interés",
  },
];

const productosMujer = [
  {
    id: 1,
    imagen: buzo01m,
    marca: "Adidas",
    icono: adidas,
    precio: "$19.999",
    nombre: "Buzo adidas Trifolio De Mujer",
    descripcion: "3 cuotas de $ 6.599,66 sin interés",
  },
  {
    id: 2,
    imagen: zapatilla01m,
    marca: "Nike",
    icono: nike,
    precio: "$35.999",
    nombre: "Zapatillas Nike Blazer Mid 77 De Mujer",
    descripcion: "3 cuotas de $ 11.999,66 sin interés",
  },
  {
    id: 3,
    imagen: buzo02m,
    marca: "Puma",
    icono: puma,
    precio: "$22.999",
    nombre: "Buzo Puma Classics Block De Mujer",
    descripcion: "3 cuotas de $ 7.666,33 sin interés",
  },
  {
    id: 4,
    imagen: calza01m,
    marca: "Fila",
    icono: fila,
    precio: "$14.999",
    nombre: "Calza Fila Classics Wonder Woman De Mujer",
    descripcion: "3 cuotas de $ 4.866,33 sin interés",
  },
  {
    id: 5,
    imagen: bolso01m,
    marca: "Adidas",
    icono: adidas,
    precio: "$19.999",
    nombre: "Bolso adidas Shopper Metalizado De Mujer 19 Litros",
    descripcion: "3 cuotas de $ 6.416,33 sin interés",
  },
  {
    id: 6,
    imagen: buzo03m,
    marca: "Adidas",
    icono: adidas,
    precio: "$27.099",
    nombre: "Campera adidas Floral De Mujer",
    descripcion: "3 cuotas de $ 9.166,33 sin interés",
  },
  {
    id: 7,
    imagen: pantalon01h,
    marca: "Adidas",
    icono: adidas,
    precio: "$27.999",
    nombre: "Campera adidas Floral De Mujer",
    descripcion: "3 cuotas de $ 9.666,33 sin interés",
  },
  {
    id: 8,
    imagen: zapatilla02m,
    marca: "Fila",
    icono: fila,
    precio: "$23.099",
    nombre: "Zapatillas Fila Sandenal Wedge De Mujer",
    descripcion: "3 cuotas de $ 7.916,33 sin interés",
  },
  {
    id: 9,
    imagen: bolso01m,
    marca: "Adidas",
    icono: adidas,
    precio: "$19.999",
    nombre: "Bolso adidas Shopper Metalizado De Mujer 19 Litros",
    descripcion: "3 cuotas de $ 6.416,33 sin interés",
  },
  {
    id: 10,
    imagen: pantalon01h,
    marca: "Adidas",
    icono: adidas,
    precio: "$27.999",
    nombre: "Campera adidas Floral De Mujer",
    descripcion: "3 cuotas de $ 9.666,33 sin interés",
  },
];

export const App = () => {
  return (
    <div className="h-screen">
      {/* Parte de seba */}
      <NavBar></NavBar>

      {/* Aca va la parte de pablo, es solo un separador esto  */}
      <section className="w-full h-[60vh] border border-red-500">
        <HomeSlider></HomeSlider>
      </section>

      {/* Parte de Julian */}
      <div className="container px-5 mx-auto productsSlider__container md:px-0">
        <div className="my-[50px] grid grid-cols-1 md:grid-cols-[20%_80%] items-center">
          <div className="mb-4 product__slider-ad justify-self-center lg:mb-0 md:mr-auto">
            <img
              className=" max-h-[160px] object-cover max-w-full  md:hidden"
              src={ad01h}
              alt="ad"
            />
            <img
              className="max-h-[360px] object-cover max-w-full hidden md:block"
              src={ad02h}
              alt="ad"
            />
          </div>
          <ProductsSlider products={productosHombre} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[80%_20%] items-center grid-col-reverse">
          <ProductsSlider products={productosMujer} />
          <div className="order-first mb-4 product__slider-ad justify-self-center lg:mb-0 md:ml-auto md:order-none">
            <img
              className=" max-h-[160px] object-cover max-w-full  md:hidden"
              src={ad01m}
              alt="ad"
            />
            <img
              className="max-h-[360px] object-cover max-w-full hidden md:block"
              src={ad02m}
              alt="ad"
            />
          </div>
        </div>
      </div>
      {/* Parte de Julian */}
      <Footer />
    </div>
  );
};
