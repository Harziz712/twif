import Hero from "@/components/hero";
import Showcase from "@/components/ui/Showcase";
import TailoringSection from "@/components/TailoringSection";
import ProductListing from "@/components/ProductGrid";
import ReviewSection from "@/components/ReviewSection";
import Footer from "@/components/Footer";
import ScrollVelocity from "@/components/BrandScroll";

const Home = () => {
  return (
    <div className="w-full  ">
    <Hero/>
    <Showcase/>
    <TailoringSection/>
    <ProductListing/>
    <ScrollVelocity
  texts={['TWIF TWIF', 'THE WAY IT FITS']} 
  velocity={100} 
  className="custom-scroll-text text-gray-800  "
/>
    <ReviewSection/>
    <Footer/>
    </div>
  )
} 

export default Home;