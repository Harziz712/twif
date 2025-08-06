"use client";

import React, { useState } from "react";
import { ShoppingCartIcon } from "@phosphor-icons/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  title: string;
  priceRange: string;
  imageSrc: string;
  alt: string;
}

const ProductCard = ({ id, title, priceRange, imageSrc, alt }: Product) => {
  const [quantity, setQuantity] = useState(1);
  const [inStock] = useState(Math.random() > 0.3); // Random stock for demo

  const variantImages = ["/suit.png", "/suit.png", "/suit.png"]; // Replace with real variants

  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-neutral-900 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100 group dark:bg-neutral-800">
        <img
          src={imageSrc}
          alt={alt}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="absolute inset-0 bg-black/50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center text-sm font-medium transition-all">
              Click to View
            </button>
          </DialogTrigger>

          {/* Dialog content */}
          <DialogContent className="w-xs md:w-7xl bg-neutral-900 text-white border border-neutral-700">
            <DialogHeader>
              <DialogTitle className="text-white">{title}</DialogTitle>
              <DialogDescription className="text-gray-400">
                {priceRange}
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 ">
              {/* Image section */}
              <div className="relative flex justify-center items-center p-4 rounded-xl bg-neutral-800">
                {/* Variant Images */}
                <div className="absolute right-4 top-4 flex flex-col gap-2 z-10">
                  {variantImages.map((src, i) => (
                    <button key={i} className="w-12 h-12 border-2 border-white/20 rounded-full overflow-hidden hover:ring-2 ring-white/40 transition">
                      <img
                        src={src}
                        alt={`Variant ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Main Image */}
                <div className="w-full flex justify-center">
                  <img
                    src={imageSrc}
                    alt={alt}
                    className="h-[280px] md:h-[320px] object-contain transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Info & actions */}
              <div className="space-y-4">
                <p
                  className={`text-sm font-medium ${
                    inStock ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {inStock ? "Still in stock" : "Out of stock"}
                </p>

                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    −
                  </Button>
                  <span className="font-semibold">{quantity}</span>
                  <Button
                    variant="outline"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    +
                  </Button>
                </div>

                <Button
                  className="w-full bg-white text-black hover:bg-gray-200 transition"
                  disabled={!inStock}
                >
                  Add {quantity} to Cart
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Card body */}
      <div className="p-4 space-y-3">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
          {priceRange}
        </p>

        <div className="flex justify-center items-center gap-6">
          <button className="w-full bg-neutral-800 text-white py-2.5 px-4 rounded-md hover:bg-neutral-700 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:ring-offset-2">
            Buy Now
          </button>

          <Tooltip delayDuration={300}>
            <TooltipTrigger asChild>
              <button>
                <ShoppingCartIcon
                  size="30"
                  weight="fill"
                  className="text-neutral-700 dark:text-white hover:text-neutral-900 dark:hover:text-gray-300 transition"
                />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to cart</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
