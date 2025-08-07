"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";

interface SlideProps {
    image: string,
    title: string,
    subtitle: string,
    plus?:string
}

const slides: SlideProps[] = [
  {
    image: "/hero1.jpg",
    title: "Shop Men's Suits",
    subtitle: `Discover TWIF's Clothings for Premium bespoke and ready-to-wear men's clothing in Nigeria`,
    plus: "Explore our collection of suits, agbada, native attire, and more.",
  },
    {
    image: "/native.png",
    title: "Traditional Meets Modern",
    subtitle: "Native attire redesigned for today’s man",
    plus: "Experience the fusion of tradition and contemporary fashion.",
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
                <motion.h1
                  variants={wordAnim}
                  key={idx}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.h1>
              ))}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-xl md:text-2xl font-medium text-gray-200 max-w-2xl"
            >
              {slide.subtitle}
            </motion.h2>
            
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              href="#"
              className="text-lg md:text-xl bottom-10  right-0 bg-gray-900/60 px-5 rounded-bl-2xl rounded-tl-2xl absolute font-medium text-gray-300 hover:text-gray-400 max-w-2xl"
            >
              {slide.plus}
            </motion.a>
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
