// app/cart/page.tsx
"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/app/state/store";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState } from "react";
import { toast } from "sonner";
import LoadingCircleSpinner from "./Loading";

const CartPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();
  const cartItems = useSelector(
    (state: RootState) => state.cartState.cartItems
  );

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      toast("Your cart is empty");
      return;
    }
    setIsLoading(true);
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cartItems }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
    setIsLoading(false);
  };

  if (!user) {
    return (
      <main className="p-6 max-w-5xl mx-auto space-y-6">
        <h2 className="text-xl font-bold">
          Please log in to proceed with checkout.
        </h2>
        <Link href="/api/auth/login">
          <Button className="cursor-pointer">Login</Button>
        </Link>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {isLoading ? (
        <LoadingCircleSpinner />
      ) : cartItems.length === 0 ? (
        <div className="text-gray-500">
          Your cart is empty.{" "}
          <Link href="/" className="text-blue-600 underline">
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 border-b pb-4"
            >
              <Image
                src={item.image || ""}
                alt={item.name}
                width={80}
                height={80}
                priority={false}
                loading="lazy"
                unoptimized
                className="object-cover rounded w-24 h-24"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <p className="text-sm text-gray-700">
                  Quantity:{" "}
                  <span className="font-semibold">{item.quantity}</span>
                </p>
              </div>
              <div className="text-lg font-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center border-t pt-6">
            <h2 className="text-xl font-semibold">Total:</h2>
            <p className="text-2xl font-bold">${totalPrice.toFixed(2)}</p>
          </div>

          <div className="text-right">
            <Button
              onClick={handleCheckout}
              className="text-lg px-6 py-3 cursor-pointer"
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </main>
  );
};

export default CartPage;
