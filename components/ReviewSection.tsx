"use client";

import { Star } from "@phosphor-icons/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dot } from "lucide-react"; // optional dot icon
import React, { useEffect, useRef, useState } from "react";
import { reviews } from "@/lib/data";

const ReviewSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Autoplay logic
  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 4000); // Change slide every 4s
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <section className="px-4 md:px-12 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 md:mb-0">
            Customer Reviews
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-gray-900">4.9/5</span>
            <span className="text-sm text-gray-600">
              from over 19,000 reviews
            </span>
          </div>
        </div>

        <div
          className="relative w-full max-w-6xl mx-auto"
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          <Carousel
            opts={{
              align: "center",
              loop: true,
              startIndex: currentSlide,
            }}
            className="w-full"
          >
            <CarouselContent>
              {reviews.map((review, idx) => (
                <CarouselItem
                  key={idx}
                  className="md:basis-1/2 lg:basis-1/3 px-4"
                >
                  <div className="space-y-4 hover:shadow-lg p-6 bg-gray-100 rounded-lg transition-shadow duration-300 h-full">
                    <div className="flex text-yellow-500">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} weight="fill" size={20} />
                        ))}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {review.title}
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {review.body}
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      {review.name} –{" "}
                      <span className="text-gray-600">
                        {review.location}
                      </span>
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute z-30 left-2 top-1/2 transform -translate-y-1/2 bg-gray-300/40 hover:bg-gray-400 text-gray-800 p-2 rounded-full" />
            <CarouselNext className="absolute z-30 right-2 top-1/2 transform -translate-y-1/2 bg-gray-300/40 hover:bg-gray-400 text-gray-800 p-2 rounded-full" />
          </Carousel>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index
                    ? "bg-gray-800"
                    : "bg-gray-300 hover:bg-gray-500"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
