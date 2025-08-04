"use client";
import { PublicItem } from "@/lib/action";
import Image from "next/image";
import Link from "next/link";

const ShoppingList = ({ item }: { item: PublicItem }) => {
  return (
    <div className="flex flex-col gap-4">
      <Link href={`/shop/${item.id}`}>
        <div className="w-60 h-60 overflow-hidden relative rounded-lg">
          <Image
            src={item.image}
            alt={item.title}
            width={40}
            height={40}
            className="w-full cursor-pointer object-contain transition-transform duration-300 ease-in-out hover:scale-150 hover:object-cover rounded-lg"
            unoptimized
            priority={false}
            loading="lazy"
          />
        </div>
      </Link>
      <div className="text-center">
        <h3 className="text-xl">{item.title}</h3>
        <h2 className="font-bold text-2xl">${item.price}</h2>
      </div>
    </div>
  );
};

export default ShoppingList;
