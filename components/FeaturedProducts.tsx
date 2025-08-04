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
        <h1 className="text-3xl md:text-7xl mb-6 border-b-[.2px] border-gray-800 pb-8 w-full">
          Featured Weekly deals
        </h1>
        <h1 className="text-4xl">Items not found...</h1>
      </div>
    );

  return (
    <div className="flex flex-col items-start bg-cyan-100 py-30 px-10 md:px-20 lg:px-40 gap-10 space-y-6">
      <h1 className="text-3xl md:text-7xl mb-6 border-b-[.2px] border-gray-800 pb-8 w-full">
        Featured Weekly deals
      </h1>
      <div className="self-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center place-content-center">
        {items.slice(0, 4)?.map((item: PublicItem) => {
          return <ShoppingList key={item.title} item={item} />;
        })}
      </div>
      <Link
        href="/shop"
        className="bg-black text-white flex items-center gap-2 cursor-pointer px-12 py-3 text-2xl outline-none self-center mt-10 rounded-lg"
      >
        See All Products <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
};

export default FeaturedProducts;
