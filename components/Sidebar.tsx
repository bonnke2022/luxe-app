"use client";
import { SheetTitle, SheetHeader, SheetClose } from "@/components/ui/sheet";
import { links, NavLink } from "@/lib/carouselLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ShoppingCart } from "lucide-react";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import { SignedIn, UserButton } from "@clerk/clerk-react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <>
      <SheetHeader>
        <SheetTitle className="flex flex-col items-center gap-6">
          <SignedOut>
            <SignInButton>
              <Link
                href="/sign-in"
                className={`flex gap-2 items-center bg-[#eee] p-3 lg:hidden`}
              >
                <p className="whitespace-nowrap">My Account</p>
                <ChevronRight className="w-6" />
              </Link>
            </SignInButton>
          </SignedOut>

          {/* )} */}
          <div className="flex">
            <SignedIn>
              <button className="md:hidden">
                <UserButton afterSwitchSessionUrl="/" />
              </button>
            </SignedIn>
            <Link href="/cart" className="relative">
              {" "}
              <span className="absolute bottom-3 left-6 text-white text-xs rounded-sm py-1 px-1">
                0
              </span>
              <ShoppingCart className="w-10 text-[#aaa]" />
            </Link>
          </div>
        </SheetTitle>
      </SheetHeader>
      <ul className="flex flex-col capitalize self-start px-6 w-full">
        {links.map((link: NavLink) => {
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`border-t-[#222] border-t-[2px] last:border-b-[#222] last:border-b-[2px] py-3 pl-2 cursor-pointer
                    ${
                      pathname === link.href
                        ? "text-white font-bold"
                        : "text-[#eee]"
                    }
                        `}
            >
              <SheetClose className="capitalize cursor-pointer">
                {link.label}
              </SheetClose>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Sidebar;
