"use client";

import React, { useState } from "react";
import ProductCard from "./ui/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination"; 
import { products } from "@/lib/data";



const PRODUCTS_PER_PAGE = 12;

const ProductGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  return (
    <section className="py-8 px-4 md:px-6 lg:px-8 w-full bg-gray-300">
      <div className="max-w-7xl mx-auto mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Products</h2>
        <p className="text-gray-600">Discover our curated collection of premium clothing and accessories.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Pagination>
          <PaginationContent className="text-gray-800" >
            <PaginationItem>
              <PaginationPrevious
                onClick={goToPrevious}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>

            {/* Optional: show page numbers */}
            <PaginationItem>
              <span className="px-4 py-2">{currentPage} / {totalPages}</span>
            </PaginationItem>

            <PaginationItem>
              <PaginationNext
                onClick={goToNext}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

export default ProductGrid;
