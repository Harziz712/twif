"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageCard from './ImageCard';

interface Image {
  src: string;
  alt: string;
  title: string;
}

const Carousel = ({ images }: { images: Image[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full border-2">
      <h2 className="text-2xl font-bold mb-4 text-center">Bespoke from head to toe</h2>
      <div className="relative overflow-auto">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            className="flex justify-between gap-5 items-center"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
          >
            {images.map((image, index) => (
              <ImageCard
                key={index}
                src={image.src}
                alt={image.alt}
                title={image.title}
              />
            ))}
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevSlide}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full ${currentIndex === 0 ? 'hidden' : ''}`}
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
      <div className="flex justify-between mt-4">
        {images.map((image, index) => (
          <p key={index} className="text-center">{image.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Carousel;