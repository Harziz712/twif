import { images } from "@/lib/data";
import CarouselBox from "./carouselbox";

const Showcase = () => {
  return (
    <div className="pl-4 sm:pl-6 lg:pl-28 py-12 bg-gray-50 text-black md:h-screen overflow-x-visible">
     <div className=" mb-8 gap-4 grid grid-cols-1"> <h3 className="text-2xl text-left">
        Suits that are Elegantly Spoke, Perfectly fits</h3>
      <p className="text-left font-medium text-lg">New Arrivals Are Here. Shop the Latest Trends Now! </p>
      </div>
      <CarouselBox images={images} />
    </div>
  );
};

export default Showcase;
