import FooterList from "./FooterList";
import logoSportwear from '../../assets/InvertedLogo.svg';



const FooterItems = () => {
  return (
    <div className="bg-black  w-full min-h-[40vh]">
      <div className="mx-auto container w-full h-full text-white flex items-center text-sm flex-col md:flex-row justify-around p-2 py-[100px] sm:py-5 text-center sm:text-left">
        <div className="">
          <img className="w-[200px] " src={logoSportwear} alt="logomarca"/>
        </div>
        <div className="flex space-x-8">
          <FooterList title="NOSOTROS" id1="Acerca de Sportswear" id2="Sucursales" id3="Contacto" id4="Trabaja con nosotros" id5="Terminos y condiciones"/>
          <FooterList title="INFORMACION" id1="Medios de Pago" id2="Preguntas frecuentes" id3="Politicas" id4="Como comprar" id5="Sorteos"/>
          <FooterList title="AYUDA" id1="sportswear@gmail.com" id2="0800-777-6789"/>
        </div>
      </div>
    </div>
  )
}

export default FooterItems