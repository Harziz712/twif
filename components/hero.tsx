"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";

const slides = [
  {
    image: "/hero1.jpg",
    title: "Dress the real you",
    subtitle: `Discover TWIF's bespoke and ready-to-wear collection.
     Clothes made to fit you, not the other way around`,
  },
    {
    image: "/native.png",
    title: "Traditional Meets Modern",
    subtitle: "Native attire redesigned for today’s man",
  },
  {
    image: "/elegance.png",
    title: "Tailored Elegance",
    subtitle: "Discover TWIF's bespoke and ready-to-wear collection",
  },
];

const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const wordAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function HeroCarousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
  });

  return (
    <div ref={sliderRef} className="keen-slider relative h-[100vh] w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="keen-slider__slide relative h-full w-full"
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-100   transition-transform duration-[6000ms] ease-out"
            style={{
              backgroundImage: `url(${slide.image})`,
              animation: "zoomIn 8s ease-in-out infinite",
            }}
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex h-full flex-col items-start justify-center px-6 md:px-20 lg:px-32 text-white">
            <motion.div
              variants={textContainer}
              initial="hidden"
              animate="show"
              className="text-5xl md:text-7xl font-semibold mb-4"
            >
              {slide.title.split(" ").map((word, idx) => (
                <motion.span
                  variants={wordAnim}
                  key={idx}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-xl md:text-2xl font-light max-w-2xl"
            >
              {slide.subtitle}
            </motion.p>
          </div>
        </div>
      ))}
{/* 
      <style jsx>{`
        @keyframes zoomIn {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style> */}
    </div>
  );
}
