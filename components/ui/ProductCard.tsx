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

  const variantImages = ["/suit.png", "/suit.png", "/suit.png"]; // replace with real variants

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100 group">
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
          <DialogContent className="w-xs md:max-w-2xl bg-gray-800">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription className="text-gray-500">
                {priceRange}
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {/* Left: Main image */}
              <div>
                <img
                  src={imageSrc}
                  alt={alt}
                  className="w-full h-[280px] md:h-auto rounded-md border"
                />
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {variantImages.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Variant ${i + 1}`}
                      className="rounded-md border object-cover aspect-[9/10]"
                    />
                  ))}
                </div>
              </div>

              {/* Right: Info & actions */}
              <div className="space-y-4">
                <p className={`text-sm font-medium ${inStock ? "text-green-600" : "text-red-600"}`}>
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
                  <Button variant="outline" onClick={() => setQuantity((q) => q + 1)}>
                    +
                  </Button>
                </div>

                <Button
                  className="w-full text-black  bg-white"
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
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base">{priceRange}</p>
        <div className="flex justify-center items-center gap-6">
          <button className="w-full bg-gray-700 text-white py-2.5 px-4 rounded-md hover:bg-gray-900 active:bg-gray-900 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2">
            Buy Now
          </button>
          <Tooltip delayDuration={300}>
            <TooltipTrigger asChild>
              <ShoppingCartIcon
                fill="fill"
                size="30"
                className="cursor-pointer hover:text-gray-700 transition-colors"
              />
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
