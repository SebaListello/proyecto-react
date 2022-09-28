import FooterList from "./FooterList";
import logoSportwear from '../../assets/LogoSportwear.svg';

const FooterItems = () => {
  return (
    <>
        <div className="grid grid-cols-5">
            <img className="text-white"src={logoSportwear} alt="logomarca"/>
            <FooterList />
            <FooterList />
            <FooterList />
            <FooterList />
        </div>
    </>
  )
}

export default FooterItems