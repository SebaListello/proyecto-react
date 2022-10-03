import FooterList from "./FooterList";
import logoSportwear from '../../assets/LogoSportwear.svg';



const FooterItems = () => {
  return (
    <div className="grid w-full h-auto text-white bg-black md:grid-cols-3 md:h-auto lg:grid-cols-5 lg:h-2/5" >
      <img className="mt-8" src={logoSportwear} alt="logomarca"/>
      <FooterList title="NOSOTROS" id1="Acerca de Sportswear" id2="Sucursales" id3="Contacto" id4="Trabaja con nosotros" id5="Terminos y condiciones"/>
      <FooterList title="INFORMACION" id1="Medios de Pago" id2="Preguntas frecuentes" id3="Politicas" id4="Como comprar" id5="Sorteos"/>
      <FooterList title="AYUDA" id1="sportswear@gmail.com" id2="0800-777-6789"/>
    </div>
  )
}

export default FooterItems