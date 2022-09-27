import { FaFacebook, FaInstagram, FaTwitter, FaFacebookMessenger, FaWhatsapp} from 'react-icons/fa'

export const Social = () => {
  return (
    <div className="social__container h-[35vh] bg-orange-500 flex flex-col items-center justify-center mt-10">
        <h2 className='uppercase font-bold text-2xl tracking-wider'>Seguinos</h2>
        <div className="social__container-group flex items-center gap-6 mt-5">
            <div className="social__container-social hover:text-white transition duration-100 ease-in-out hover:scale-[1.15]">
                <a href="#">
                    <FaFacebook size={34}/>
                </a>
            </div>
            <div className="social__container-social hover:text-white transition duration-100 ease-in-out hover:scale-[1.15]">
                <a href="#">
                    <FaInstagram size={34}/>
                </a>
            </div>
            <div className="social__container-social hover:text-white transition duration-100 ease-in-out hover:scale-[1.15]">
                <a href="#">
                    <FaTwitter size={34}/>
                </a>
            </div>
            <div className="social__container-social hover:text-white transition duration-100 ease-in-out hover:scale-[1.15]">
                <a href="#">
                    <FaFacebookMessenger size={34}/>
                </a>
            </div>
            <div className="social__container-social hover:text-white transition duration-100 ease-in-out hover:scale-[1.15]">
                <a href="#">
                    <FaWhatsapp size={34}/>
                </a>
            </div>
        </div>
    </div>
  )
}
