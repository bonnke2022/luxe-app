"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { GetAllItemsAction, PublicItem } from "@/lib/action";
import ShoppingList from "./ShoppingList";
import { useSearchParams } from "next/navigation";
import SearchForm from "./SearchForm";

const ShopList = () => {
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
      <div className="flex flex-col py-30 px-10 md:px-20 lg:px-40 gap-10">
        <h2 className="text-lg">Items not found...</h2>
      </div>
    );

  return (
    <div className="flex flex-col items-center py-30 px-10 md:px-20 lg:px-40 gap-10">
      <div className="flex flex-col items-start justify-between w-full gap-10">
        <SearchForm />
        <p className="text-xl text-[#777] whitespace-nowrap">
          Showing all {data?.length} results
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
        {items?.map((item: PublicItem) => {
          return <ShoppingList key={item.title} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ShopList;
