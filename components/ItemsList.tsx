"use client";

import { GetAllItemsAction, PublicItem } from "@/lib/action";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import ShoppingList from "./ShoppingList";
import { useSearchParams } from "next/navigation";
import SearchForm from "./SearchForm";

const ItemsList = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "";

  const { data } = useQuery({
    queryKey: ["items", search, sort],
    queryFn: () => GetAllItemsAction(search, sort),
    placeholderData: keepPreviousData,
  });

  const items = data || [];
  if (items?.length === 0)
    return (
      <main>
        <SearchForm />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center mt-6">
          <h2 className="text-lg">Items not found...</h2>;
        </div>
      </main>
    );
  return (
    <main className="">
      <SearchForm />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center mt-6">
        {items?.map((item: PublicItem) => {
          return <ShoppingList key={item.title} item={item} />;
        })}
      </div>
    </main>
  );
};

export default ItemsList;
