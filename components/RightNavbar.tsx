"use client";
import { ChevronRight, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useSelector } from "react-redux";
import { RootState } from "@/app/state/store";

const RightNavbar = ({ bgColor }: { bgColor: string }) => {
  const { user } = useUser();
  const numItemsInCart = useSelector(
    (state: RootState) => state.cartState.numItemsInCart
  );
  return (
    <div className="flex items-center gap-1 md:gap-4">
      <div className="flex items-center gap-2 md:gap-4">
        <Link href="/cart" className="relative" aria-label="view shopping cart">
          {" "}
          <span className="absolute bottom-3 left-4 text-white bg-black text-xs rounded-sm py-1 px-1">
            {numItemsInCart}
          </span>
          <ShoppingCart className="" />
        </Link>
      </div>
      {user?.nickname ? (
        <div className="hidden lg:flex gap-5 items-center">
          <span className="capitalize py-2 px-4 bg-blue-500 text-lg font-semibold rounded-[100%]">
            {user?.nickname.slice(0, 1)}
          </span>
          <Link
            href="/api/auth/logout"
            className={`hidden lg:flex gap-2 items-center ${bgColor} text-lg`}
            aria-label="Login to your account"
          >
            Logout <ChevronRight />
          </Link>
        </div>
      ) : (
        <Link
          href="/api/auth/login"
          className={`hidden lg:flex gap-2 items-center ${bgColor} text-lg`}
        >
          <p className="whitespace-nowrap">My Account</p>
          <ChevronRight />
        </Link>
      )}
    </div>
  );
};

export default RightNavbar;
