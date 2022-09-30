import {NavBar, HomeSlider, ProductSlider, BrandSlider, OurBrands, NewsForm, SocialNetWorks} from './components'

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
    </div>
    
  );
};
