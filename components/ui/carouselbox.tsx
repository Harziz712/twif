// // "use client";

// // import React, { useState, useEffect, useRef } from "react";
// // import { gsap } from "gsap";
// // import ImageCard from "./ImageCard";
// // import { Image } from "./ImageCard";

// // const Carousel = ({ images }: { images: Image[] }) => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const visibleSlides = 3;
// //   const maxIndex = images.length - visibleSlides;
// //   const carouselRef = useRef(null);

// //   useEffect(() => {
// //     if (currentIndex >= maxIndex) {
// //       return; // Do not start auto-scroll if already at the last slide
// //     }

// //     const interval = setInterval(() => {
// //       setCurrentIndex((prevIndex) => {
// //         if (prevIndex >= maxIndex - 1) {
// //           clearInterval(interval); // Stop auto-scroll when reaching the last slide
// //           return prevIndex + 1;
// //         }
// //         return prevIndex + 1;
// //       });
// //     }, 5000); // Auto-scroll every 5 seconds

// //     return () => clearInterval(interval);
// //   }, [currentIndex, maxIndex]);

// //   useEffect(() => {
// //     if (carouselRef.current) {
// //       gsap.to(carouselRef.current, {
// //         x: `-${currentIndex * (100 / visibleSlides)}%`,
// //         duration: 0.5,
// //         ease: "power2.inOut",
// //       });
// //     }
// //   }, [currentIndex, visibleSlides]);

// //   const nextSlide = () => {
// //     if (currentIndex >= maxIndex) {
// //       // If currently showing last visible slide, loop back to the start
// //       setCurrentIndex(0);
// //     } else {
// //       setCurrentIndex((prevIndex) => prevIndex + 1);
// //     }
// //   };

// //   const prevSlide = () => {
// //     setCurrentIndex((prevIndex) =>
// //       prevIndex <= 0 ? maxIndex : prevIndex - 1
// //     );
// //   };

// //   return (
// //     <div className="relative w-full overflow-visible">
// //       <div className="relative overflow-hidden w-full pl-10">
        // <div
        //   ref={carouselRef}
        //   className="flex gap-4"
        // >
        //   {images.map((image, index) => (
        //     <ImageCard key={index} {...image} />
        //   ))}
        // </div>

// //         <button
// //           onClick={prevSlide}
// //           className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full ${currentIndex === 0 ? 'hidden' : ''}`}
// //         >
// //           &lt;
// //         </button>
// //         <button
// //           onClick={nextSlide}
// //           className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full ${currentIndex >= maxIndex ? 'hidden' : ''}`}
// //         >
// //           &gt;
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Carousel;

// import * as React from "react"
// import ImageCard from "./ImageCard";
// import { Image } from "./ImageCard";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";
// import { i } from "framer-motion/client";

// const CarouselBox = ({ images }: { images: Image[] }) => {
//   return (
//     <Carousel
//       opts={{
//         align: "start",
//       }}
//       className="w-full max-w-sm"
//     >
//       <CarouselContent>
//         {Array.from({ length: images.length }).map((_, index) => (
//           <CarouselItem key={index} className="relative overflow-hidden w-full pl-10">
//       <div
//           className="flex gap-4"
//         >
//           {images.map((image, index) => (
//             <ImageCard key={index} {...image} />
//           ))}
//         </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   )
// }

// export default CarouselBox
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
            style={{ minWidth: `${group.length * 316 + 10}px` }} // 300px card + 16px gap (gap-4) + 10px padding
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