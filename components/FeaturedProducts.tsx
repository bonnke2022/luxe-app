"use client";

import { GetAllItemsAction, PublicItem } from "@/lib/action";
import { useQuery } from "@tanstack/react-query";
import ShoppingList from "./ShoppingList";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const FeaturedProducts = () => {
  const { data } = useQuery({
    queryKey: ["items"],
    queryFn: () => GetAllItemsAction("", ""),
    staleTime: 1000 * 60,
  });

  const items = data || [];
  if (items?.length === 0)
    return (
      <div className="flex flex-col items-start bg-cyan-100 py-30 px-10 md:px-20 lg:px-40 gap-8">
        <h3 className="text-3xl font-light">Featured</h3>
        <div className="flex items-start">
          <h1 className="text-4xl md:text-7xl whitespace-nowrap">
            Weekly deals
          </h1>
          <hr className="w-full" />
        </div>
        <h1 className="text-4xl">Items not found...</h1>
      </div>
    );

  return (
    <div className="flex flex-col items-start bg-cyan-100 py-30 px-10 md:px-20 lg:px-40 gap-10">
      <h3 className="text-3xl font-extralight">Featured</h3>
      <div className="">
        <h1 className="text-4xl md:text-7xl mb-6">Weekly deals</h1>
        <span className="h-2 w-80 bg-[#333]"></span>
      </div>
      <div className="self-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center place-content-center">
        {items.slice(0, 4)?.map((item: PublicItem) => {
          return <ShoppingList key={item.title} item={item} />;
        })}
      </div>
      <Link
        href="/shop"
        className="bg-black text-white flex items-center gap-2 cursor-pointer px-12 py-3 text-2xl outline-none self-center mt-10"
      >
        See All Products <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
};

export default FeaturedProducts;
