"use client";

import { GetAllItemsAction } from "@/lib/action";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const DirectItem = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data } = useQuery({
    queryKey: ["items"],
    queryFn: () => GetAllItemsAction("", ""),
  });

  const items = data || [];
  if (items?.length === 0)
    return (
      <div className="flex items-center justify-between w-full lg:w-[80%]">
        <h2 className="text-lg">Items not found...</h2>
      </div>
    );

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items?.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items?.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="flex items-center justify-between w-full lg:w-[80%]">
      <Link href={`/shop/${items[currentIndex].id}`}>
        <button onClick={prevSlide} className="cursor-pointer">
          <ArrowLeft className="w-6 h-6" />
        </button>
      </Link>
      <Link href="/shop">
        <LayoutGrid className="w-10 h-10" />
      </Link>

      <Link href={`/shop/${items[currentIndex].id}`}>
        <button onClick={nextSlide} className="cursor-pointer">
          <ArrowRight className="w-6 h-6" />
        </button>
      </Link>
    </div>
  );
};

export default DirectItem;
