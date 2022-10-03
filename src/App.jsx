import {NavBar, HomeSlider, ProductSlider, BrandSlider, OurBrands, NewsForm, SocialNetWorks} from './Components'
import FooterItems from "./Components/08-FooterFolder/FooterItems"

export const App = () => {
  return (

    <div className="h-screen overflow-x-hidden">
      <NavBar />
      <HomeSlider />
      <ProductSlider />
      <BrandSlider />
      <OurBrands />
      <NewsForm />
      <SocialNetWorks />
      <FooterItems />
    </div>
    
  );
};
