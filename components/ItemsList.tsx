"use client";

import { GetAllItemsAction, PublicItem } from "@/lib/action";
import { useQuery } from "@tanstack/react-query";
import ShoppingList from "./ShoppingList";
import { useSearchParams } from "next/navigation";

const ItemsList = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "";

  const { data } = useQuery({
    queryKey: ["items"],
    queryFn: () => GetAllItemsAction(search, sort),
  });

  const items = data || [];
  if (items?.length === 0)
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        <h2 className="text-lg">Items not found...</h2>;
      </div>
    );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
      {items?.map((item: PublicItem) => {
        return <ShoppingList key={item.title} item={item} />;
      })}
    </div>
  );
};

export default ItemsList;
