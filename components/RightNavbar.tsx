"use client";
import { ChevronRight, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/state/store";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const RightNavbar = ({ bgColor }: { bgColor: string }) => {
  const numItemsInCart = useSelector(
    (state: RootState) => state.cartState.numItemsInCart
  );
  return (
    <div className="flex items-center gap-4 md:gap-4">
      <div className="flex items-center gap-2 md:gap-4">
        <Link href="/cart" className="relative" aria-label="view shopping cart">
          {" "}
          <span className="absolute bottom-3 left-4 text-white bg-black text-xs rounded-sm py-1 px-1">
            {numItemsInCart}
          </span>
          <ShoppingCart className="" />
        </Link>
      </div>

      <SignedOut>
        <SignInButton>
          <button
            className={`hidden lg:flex gap-2 items-center ${bgColor} text-lg cursor-pointer`}
          >
            My Account <ChevronRight />
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <button className="hidden lg:flex">
          <UserButton afterSwitchSessionUrl="/" />
        </button>
      </SignedIn>
    </div>
  );
};

export default RightNavbar;
