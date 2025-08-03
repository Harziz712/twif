"use client";

import React from "react";

const TailoringSection = () => {
  return (
    <section className="bg-white md:h-screen py-12 px-4 md:px-20 w-full flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          High–tech tailoring for every body
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed max-w-prose mx-auto md:mx-0">
          When your clothes are made with care, you can feel it. Before our tailors handcraft your piece, our algorithm uses a decade’s worth of sizing data to make sure it fits you right. Hard to believe, easy to prove.
        </p>
        <button className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-300">
          Know more
        </button>
      </div>
    <div className="md:w-1/2 flex justify-center md:justify-end">
      <img src="/sideimg.jpg" alt="" className="shadow-lg shadow-gray-700" />
    </div>
    </section>
  );
};

export default TailoringSection;