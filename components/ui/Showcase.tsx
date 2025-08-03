import { images } from "@/lib/data";
import CarouselBox from "./carouselbox";

const Showcase = () => {
  return (
    <div className="pl-4 sm:pl-6 lg:pl-28 py-12 md:h-screen overflow-x-visible">
      <h3 className="text-xl mb-8 text-left">Tailored to perfection</h3>
      <CarouselBox images={images} />
    </div>
  );
};

export default Showcase;
