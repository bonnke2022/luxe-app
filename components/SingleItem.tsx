"use client";

import { GetSingleItemAction } from "@/lib/action";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { addItem } from "@/app/state/features/cart/cartSlice";
import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner";
import LoadingCircleSpinner from "./Loading";

const SingleItem = ({ id, cart }: { id: number; cart: string }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ["singleItem", id],
    queryFn: () => GetSingleItemAction(id),
    enabled: !!id,
  });

  if (isLoading)
    return (
      <main className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full items-center gap-8 max-w-6xl">
        <LoadingCircleSpinner />
      </main>
    );
  if (error)
    return (
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full items-center gap-8 max-w-6xl">
        <p>Error: {error.message || "Something went wrong!!!"}</p>;
      </div>
    );
  if (!data)
    return (
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full items-center gap-8 max-w-6xl">
        <p>No items found...</p>
      </div>
    );

  const AddToCart = () => {
    dispatch(
      addItem({
        product: {
          id: data.id,
          name: data.title,
          price: Number(data.price),
          quantity: quantity,
          image: data.image,
        },
      })
    );
    toast(`${data?.title} has been added to the cart.`);
  };

  return (
    <main className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full items-center gap-8 max-w-6xl">
      <Image
        src={data?.image || ""}
        alt={data?.title || ""}
        width={50}
        height={50}
        className="w-full lg:w-[50%] h-full lg:h-200"
        unoptimized
        priority={false}
        loading="lazy"
      />
      <div className="flex flex-col gap-6 w-full lg:w-[50%]">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
          {data?.title}
        </h1>
        <h1 className="text-xl md:text-3xl lg:text-4xl border-t-2 w-35 py-3">
          ${Number(data?.price)}.00
        </h1>
        <p className="text-xl text-[#777] tracking-wide w-[80%]">
          {data?.description}
        </p>
        <ul className="flex flex-col gap-3 text-xl text-[#555] font-bold">
          <li className="border-b-2 py-2">
            Category: <span className="text-[#777]">{data?.category}</span>
          </li>
          <li className="border-b-2 py-2">
            Colors: <span className="text-[#777]">{data?.colors}</span>
          </li>
          <li className="border-b-2 py-2">
            Fit Type: <span className="text-[#777]">{data?.fitType}</span>
          </li>
          <li className="border-b-2 py-2">
            Material: <span className="text-[#777]">{data?.material}</span>
          </li>
          <li className="border-b-2 py-2">
            Occasion: <span className="text-[#777]">{data?.occasion}</span>
          </li>
          <li className="border-b-2 py-2">
            Size: <span className="text-[#777]">{data?.size}</span>
          </li>
          <li className="border-b-2 py-2">
            Dimension A: <span className="text-[#777]">{data?.dimensionA}</span>
          </li>
          <li className="">
            Dimension B: <span className="text-[#777]">{data?.dimensionB}</span>
          </li>
          <div className="flex items-center gap-4">
            <Label className="text-xl text-[#555] font-bold">Quantity: </Label>
            <Input
              type="number"
              value={quantity}
              min={1}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border p-2 w-20"
            />
          </div>
        </ul>

        {cart === "" ? null : (
          <Button
            className="w-[80%] md:w-full self-center mt-8 cursor-pointer"
            onClick={AddToCart}
          >
            {cart}
          </Button>
        )}
      </div>
    </main>
  );
};

export default SingleItem;
