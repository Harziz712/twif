import Hero from "@/components/hero";
import Showcase from "@/components/ui/Showcase";
import TailoringSection from "@/components/TailoringSection";
import ProductListing from "@/components/ProductListing";

const Home = () => {
  return (
    <div className="w-full  ">
    <Hero/>
    <Showcase/>
    <TailoringSection/>
    <ProductListing/>
    </div>
  )
} 

export default Home;