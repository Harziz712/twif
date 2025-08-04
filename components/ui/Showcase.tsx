import { images } from "@/lib/data";
import CarouselBox from "./carouselbox";

const Showcase = () => {
  return (
    <div className="pl-4 sm:pl-6 lg:pl-28 py-12 bg-gray-50 text-black md:h-screen overflow-x-visible">
      <h3 className="text-2xl mb-8 text-left">Elegantly Spoke, Perfectly fits</h3>
      <CarouselBox images={images} />
    </div>
  );
};

export default Showcase;
