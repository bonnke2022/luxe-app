"use client";
import { SheetTitle, SheetHeader, SheetClose } from "@/components/ui/sheet";
import { links, NavLink } from "@/lib/carouselLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ShoppingCart } from "lucide-react";
// import { useUser } from "@auth0/nextjs-auth0";

const Sidebar = () => {
  const pathname = usePathname();
  // const { user } = useUser();
  // if (user?.length === 0)
  //   return (
  //     <div className="flex gap-4 items-center w-full bg-[#eee] lg:hidden p-2">
  //       <h2 className="text-lg">Items not found...</h2>
  //     </div>
  //   );
  return (
    <>
      <SheetHeader>
        <SheetTitle className="flex flex-col items-center gap-6">
          {/* {user?.nickname ? (
            <div className="flex gap-4 items-center w-full bg-[#eee] lg:hidden p-2">
              <span className="capitalize py-3 px-4 bg-blue-500 text-lg font-semibold rounded-[100%]">
                {user.nickname.slice(0, 1)}
              </span>
              <Link
                href="/api/auth/logout"
                className={`flex lg:hidden gap-2 items-center p-3`}
              >
                Logout <ChevronRight className="w-6" />
              </Link>
            </div>
          ) : ( */}
          <Link
            href="/api/auth/login"
            className={`flex gap-2 items-center bg-[#eee] p-3 lg:hidden`}
          >
            <p className="whitespace-nowrap">My Account</p>
            <ChevronRight className="w-6" />
          </Link>
          {/* )} */}
          <div className="flex">
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
