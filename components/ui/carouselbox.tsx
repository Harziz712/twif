// "use client";

// import * as React from "react";
// import { useState, useEffect } from "react";
// import ImageCard from "./ImageCard";
// import { Image } from "./ImageCard";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";

// const CarouselBox = ({ images }: { images: Image[] }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const visibleSlides = 3;
//   const maxIndex = Math.ceil(images.length / visibleSlides) - 1;

//   useEffect(() => {
//     if (currentIndex >= maxIndex) {
//       return; // Do not start auto-scroll if already at the last slide
//     }

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => {
//         if (prevIndex >= maxIndex - 1) {
//           clearInterval(interval); // Stop auto-scroll when reaching the last slide
//           return prevIndex + 1;
//         }
//         return prevIndex + 1;
//       });
//     }, 5000); // Auto-scroll every 5 seconds

//     return () => clearInterval(interval);
//   }, [currentIndex, maxIndex]);

//   // Group images into chunks of visibleSlides (3)
//   const groupedImages = [];
//   for (let i = 0; i < images.length; i += visibleSlides) {
//     groupedImages.push(images.slice(i, i + visibleSlides));
//   }

//   return (
//     <Carousel
//       opts={{
//         align: "start",
//         active: true,
//         slidesToScroll: 1,
//       }}
//       setApi={(api) => {
//         if (api) {
//           api.scrollTo(currentIndex); // Sync carousel with currentIndex
//           api.on("select", () => {
//             setCurrentIndex(api.selectedScrollSnap());
//           });
//         }
//       }}
//       className="w-full"
//     >
//       <CarouselContent className="-ml-0">
//         {groupedImages.map((group, groupIndex) => (
//           <CarouselItem
//             key={groupIndex}
//             className="basis-auto"
//             style={{ minWidth: `${group.length * 316 + 10}px` }} // 300px card + 16px gap (gap-4) + 10px padding
//           >
//             <div className="flex gap-4 ">
//               {group.map((image, index) => (
//                 <ImageCard key={index} {...image} />
//               ))}
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious
//         className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full ${
//           currentIndex === 0 ? "hidden" : ""
//         }`}
//       />
//       <CarouselNext
//         className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full ${
//           currentIndex >= maxIndex ? "hidden" : ""
//         }`}
//       />
//     </Carousel>
//   );
// };

// export default CarouselBox;

"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import { Image } from "./ImageCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";

const CarouselBox = ({ images }: { images: Image[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = 3;
  const maxIndex = Math.ceil(images.length / visibleSlides) - 1;

  useEffect(() => {
    if (currentIndex >= maxIndex) {
      return; // Do not start auto-scroll if already at the last slide
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= maxIndex - 1) {
          clearInterval(interval); // Stop auto-scroll when reaching the last slide
          return prevIndex + 1;
        }
        return prevIndex + 1;
      });
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, maxIndex]);

  // Group images into chunks of visibleSlides (3)
  const groupedImages = [];
  for (let i = 0; i < images.length; i += visibleSlides) {
    groupedImages.push(images.slice(i, i + visibleSlides));
  }

  return (
    <Carousel
      opts={{
        align: "start",
        active: true,
        slidesToScroll: 1,
      }}
      setApi={(api) => {
        if (api) {
          api.scrollTo(currentIndex); // Sync carousel with currentIndex
          api.on("select", () => {
            setCurrentIndex(api.selectedScrollSnap());
          });
        }
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-0">
        {groupedImages.map((group, groupIndex) => (
          <CarouselItem
            key={groupIndex}
            className="basis-auto"
            style={{ minWidth: `${group.length * 316 + 10}px` }} // 300px card + 16px gap + 10px padding
          >
            <div className="flex gap-4 ">
              {group.map((image, index) => (
                <ImageCard key={index} {...image} />
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full ${
          currentIndex === 0 ? "hidden" : ""
        }`}
      />
      <CarouselNext
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full ${
          currentIndex >= maxIndex ? "hidden" : ""
        }`}
      />
    </Carousel>
  );
};

export default CarouselBox;