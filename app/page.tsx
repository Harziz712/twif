import Hero from "@/components/hero";
import Showcase from "@/components/ui/Showcase";
import TailoringSection from "@/components/TailoringSection";
import ProductListing from "@/components/ProductGrid";
import ReviewSection from "@/components/ReviewSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="w-full  ">
    <Hero/>
    <Showcase/>
    <TailoringSection/>
    <ProductListing/>
    <ReviewSection/>
    <Footer/>
    </div>
  )
} 

export default Home;