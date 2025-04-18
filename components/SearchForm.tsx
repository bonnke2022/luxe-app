"use client";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";

function SearchForm() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const defaultSort = searchParams.get("sort") || "alphabetical";
  const [sort, setSort] = useState(defaultSort);

  const router = useRouter();
  const pathname = usePathname();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams();

    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    const sort = formData.get("sort") as string;

    if (search) params.set("search", search);
    if (sort) params.set("sort", sort);
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
    >
      <div className="flex relative items-center bg-[#eee] rounded-lg w-full">
        <Input
          placeholder={`Search through our catalogue...`}
          type="text"
          name="search"
          className="outline-none shadow border-0 py-6 rounded-lg"
          defaultValue={search}
        />
      </div>
      <Select onValueChange={(val: string) => setSort(val)} value={sort}>
        <SelectTrigger
          value={sort}
          className="cursor-pointer w-full transition-none focus:outline-none"
        >
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent className="cursor-pointer w-full z-50">
          <SelectItem value="alphabetical">Alphabetical</SelectItem>
          <SelectItem value="price_low_to_high">Price: Low to High</SelectItem>
          <SelectItem value="price_high_to_low">Price: High to Low</SelectItem>
          <SelectItem value="latest">Latest</SelectItem>
        </SelectContent>
      </Select>
      <Input type="hidden" value={sort} />

      <Button type="submit" className="cursor-pointer">
        search
      </Button>
    </form>
  );
}

export default SearchForm;
